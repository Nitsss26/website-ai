-- Insert sample blog data matching your frontend
INSERT INTO public.blogs (id, category, title, src, publish_date) VALUES
(1, 'Release Copilot AI Free Trial', 'Experience Copilot AI for Free', 'https://images.unsplash.com/photo-1593508512255-86ab42a8e620?q=80&w=3556&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2022-09-15'),
(2, 'Productivity', 'Enhance your productivity.', 'https://images.unsplash.com/photo-1531554694128-c4c6665f59c2?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2022-09-15'),
(3, 'Product', 'Launching the new Apple Vision Pro.', 'https://images.unsplash.com/photo-1713869791518-a770879e60dc?q=80&w=2333&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2022-09-15'),
(4, 'Product', 'Maps for your iPhone 15 Pro Max.', 'https://images.unsplash.com/photo-1599202860130-f600f4948364?q=80&w=2515&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2022-09-15'),
(5, 'iOS', 'Photography just got better.', 'https://images.unsplash.com/photo-1602081957921-9137a5d6eaee?q=80&w=2793&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2022-09-15'),
(6, 'Hiring', 'Hiring for a Staff Software Engineer', 'https://images.unsplash.com/photo-1511984804822-e16ba72f5848?q=80&w=2048&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', '2022-09-15');

-- Insert sample course data
INSERT INTO public.courses (title, description, instructor, category, duration_weeks, students_enrolled, rating, difficulty, thumbnail_url) VALUES
('Introduction to Machine Learning', 'Learn the fundamentals of Machine Learning. Get started with the basics of Machine Learning.', 'Dr. Sarah Johnson', 'AI/ML', 8, 1200, 4.8, 'Beginner', '/course1.png'),
('Deep Learning with Neural Networks', 'Dive deep into the world of Neural Networks. Understand how to build and train deep learning models.', 'Prof. Michael Chen', 'AI/ML', 12, 850, 4.9, 'Advanced', '/course2.png'),
('Machine Learning for Beginners', 'A beginner''s guide to Machine Learning. Learn the basics of Machine Learning and how to apply it.', 'Dr. Emily Rodriguez', 'AI/ML', 6, 2100, 4.7, 'Beginner', '/course3.png'),
('Scalable Model Deployment', 'Learn how to deploy Machine Learning models at scale. Understand the best practices for deploying models in production.', 'John Smith', 'DevOps', 10, 650, 4.6, 'Intermediate', '/course4.png');

-- Insert sample analytics data
INSERT INTO public.analytics (date, page_views, new_accounts, revenue, blog_reads, total_users) VALUES
(CURRENT_DATE, 8224, 6, 15420.50, 13224, 8230),
(CURRENT_DATE - INTERVAL '1 day', 7890, 8, 12300.00, 11500, 8224),
(CURRENT_DATE - INTERVAL '2 days', 9100, 12, 18750.25, 14800, 8216);
