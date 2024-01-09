CREATE TABLE sampledata (
  id SERIAL PRIMARY KEY,
  sample_text VARCHAR(500)
);

INSERT INTO sampledata (sample_text) VALUES
  ('Hello World!'),
  ('Hello Joensuu!'),
  ('Hello something!');