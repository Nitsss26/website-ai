-- Function to increment course enrollment count
CREATE OR REPLACE FUNCTION increment_course_enrollment(course_id INTEGER)
RETURNS void AS $$
BEGIN
  UPDATE public.courses 
  SET students_enrolled = students_enrolled + 1 
  WHERE id = course_id;
END;
$$ LANGUAGE plpgsql;

-- Function to update course rating
CREATE OR REPLACE FUNCTION update_course_rating(course_id INTEGER)
RETURNS void AS $$
DECLARE
  avg_rating DECIMAL(3,2);
  rating_count INTEGER;
BEGIN
  SELECT AVG(rating), COUNT(*) 
  INTO avg_rating, rating_count
  FROM public.course_reviews 
  WHERE course_id = course_id;
  
  UPDATE public.courses 
  SET rating = COALESCE(avg_rating, 0),
      total_ratings = rating_count
  WHERE id = course_id;
END;
$$ LANGUAGE plpgsql;

-- Trigger to update course rating when review is added/updated
CREATE OR REPLACE FUNCTION trigger_update_course_rating()
RETURNS trigger AS $$
BEGIN
  PERFORM update_course_rating(NEW.course_id);
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER update_course_rating_trigger
  AFTER INSERT OR UPDATE ON public.course_reviews
  FOR EACH ROW
  EXECUTE FUNCTION trigger_update_course_rating();

-- Function to create user profile after signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name, avatar_url)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'full_name',
    NEW.raw_user_meta_data->>'avatar_url'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Trigger to create profile on user signup
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();
