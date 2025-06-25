const Collaps = () => {
  return (
    <div className="w-4/5 mx-auto p-10 space-y-2">
        <h1 className="text-center font-bold text-3xl pb-4">Popular Questions </h1>
      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-gray-200 border-blue-600 border"
      >
        <div className="collapse-title font-semibold">
          1. How can I register for an event on ATHLETICHUB?
        </div>
        <div className="collapse-content text-sm bg-base-100 pt-2">
          To register for an event, simply navigate to the event's page, click on the "Register" button, and follow the on-screen instructions. Make sure you have an ATHLETICHUB account to streamline the process.
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-gray-200 border-blue-600 border"
      >
        <div className="collapse-title font-semibold">
          2. What if an event I registered for is cancelled or postponed?
        </div>
        <div className="collapse-content text-sm bg-base-100 pt-2">
          If an event is cancelled or postponed, we will notify all registered participants via email as soon as possible. Information regarding refunds or new dates will be provided in the notification.
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-gray-200 border-blue-600 border"
      >
        <div className="collapse-title font-semibold">
          3. Can I get a refund if I can no longer attend an event?
        </div>
        <div className="collapse-content text-sm bg-base-100 pt-2">
          Refund policies vary per event. Please check the specific event's details page for information on refunds. Generally, there's a deadline for refund requests, and administrative fees may apply.
        </div>
      </div>

      <div
        tabIndex={0}
        className="collapse collapse-arrow bg-gray-200 border-blue-600 border"
      >
        <div className="collapse-title font-semibold">
          4. How can I view the results of past events?
        </div>
        <div className="collapse-content text-sm bg-base-100 pt-2">
          You can typically find the results of past events on their respective event pages under the "Results" tab. We strive to upload results promptly after an event concludes.
        </div>
      </div>
    </div>
  );
};

export default Collaps;