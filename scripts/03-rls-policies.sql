-- Enable Row Level Security
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blogs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.enrollments ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.course_reviews ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.analytics ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.chat_logs ENABLE ROW LEVEL SECURITY;

-- Profiles policies
CREATE POLICY "Public profiles are viewable by everyone" ON public.profiles
    FOR SELECT USING (true);

CREATE POLICY "Users can insert their own profile" ON public.profiles
    FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can update own profile" ON public.profiles
    FOR UPDATE USING (auth.uid() = id);

-- Blogs policies
CREATE POLICY "Published blogs are viewable by everyone" ON public.blogs
    FOR SELECT USING (is_published = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Admins can manage blogs" ON public.blogs
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Courses policies
CREATE POLICY "Published courses are viewable by everyone" ON public.courses
    FOR SELECT USING (is_published = true OR auth.uid() IS NOT NULL);

CREATE POLICY "Admins can manage courses" ON public.courses
    FOR ALL USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Enrollments policies
CREATE POLICY "Users can view their own enrollments" ON public.enrollments
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can enroll themselves" ON public.enrollments
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own enrollment progress" ON public.enrollments
    FOR UPDATE USING (auth.uid() = user_id);

-- Reviews policies
CREATE POLICY "Reviews are viewable by everyone" ON public.course_reviews
    FOR SELECT USING (true);

CREATE POLICY "Users can create their own reviews" ON public.course_reviews
    FOR INSERT WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can update their own reviews" ON public.course_reviews
    FOR UPDATE USING (auth.uid() = user_id);

-- Analytics policies (admin only)
CREATE POLICY "Only admins can view analytics" ON public.analytics
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Contact submissions policies
CREATE POLICY "Anyone can submit contact form" ON public.contact_submissions
    FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view contact submissions" ON public.contact_submissions
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE id = auth.uid() AND role = 'admin'
        )
    );

-- Chat logs policies
CREATE POLICY "Users can view their own chat logs" ON public.chat_logs
    FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Users can create their own chat logs" ON public.chat_logs
    FOR INSERT WITH CHECK (auth.uid() = user_id);
