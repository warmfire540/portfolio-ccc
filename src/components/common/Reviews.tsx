import { ReactGoogleReviews } from 'react-google-reviews';
import 'react-google-reviews/dist/index.css';

function Reviews() {
  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what clients have to say
            about working with Curious Cat Consulting.
          </p>
        </div>
        <div className="max-w-5xl mx-auto">
          <ReactGoogleReviews
            layout="badge"
            featurableId={process.env.REACT_APP_FEATURABLE_WIDGET_ID ?? ''}
          />
        </div>
      </div>
    </section>
  );
}

export default Reviews;
