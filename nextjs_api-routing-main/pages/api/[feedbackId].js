import { buildFeedBackPath, extractFeedback } from './feedback';

function handler(req, res) {
  const { feedbackId } = req.query;
  const path = buildFeedBackPath();
  const feedbackData = extractFeedback(path);

  const selectedFeedback = feedbackData.find(
    (feedback) => feedback.id === feedbackId
  );
  res.status(200).json({ feedback: selectedFeedback });
}

export default handler;
