import express from 'express';
import MoviesController from '../controllers/movies.controllers.js';
import ReviewsController from '../controllers/reviews.controllers.js';

const router = express.Router()

router.route('/').get(MoviesController.apiGetMovies);
router.route('/id/:id').get(MoviesController.apiGetMovieById);
router.route('/ratings').get(MoviesController.apiGetRatings);
router.route("/review").post(ReviewsController.apiPostReview).put(ReviewsController.apiUpdateReview).delete(ReviewsController.apiDeleteReview)

export default router;