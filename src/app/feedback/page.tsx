export default function FeedbackPage() {
  return (
    <section>
      <h2 className="flex mb-4 text-2xl font-medium text-gray-900 dark:text-white">Breakfast Club Feedback</h2>
      <p className="mb-4 text-lg font-light text-gray-500 dark:text-gray-400">
        Going into 2025, we are seeking feedback on what you&apos;d like to see more of!
      </p>

      <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSd7B6hVoyTTxe1Z8vb7-s7dQc4ASy6ngmJ8N5VFAKGSmp4xcg/viewform?embedded=true" className="h-dvh w-dvw">
        Loading...
      </iframe>
    </section>
  );
}
