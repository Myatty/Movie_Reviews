import MoviesDAO from '../dao/moviesDAO.js';
import ReviewsDAO from '../dao/reviewsDAO.js';

export default class ReviewsController{

    static async apiPostReview(req, res, next){
        try{
            const movieId = req.body.movie_id;
            const review = req.body.review;
            const userInfo = {
                name: req.body.name,
                _id: req.body.user_id
            }

            const date = new Date();

            const ReviewResponse = await ReviewsDAO.addReview(
                movieId,
                userInfo,
                review,
                date,
            )
            res.json({status: "success"})
        }catch(e){
            res.status(500).json({error: e.message})
        }
    }

    static async apiUpdateReview(req, res, next){
        try{
            const reviewId = req.body.review_id;
            const review = req.body.review;
        
            const date = new Date();

            const ReviewResponse = await ReviewsDAO.updateReview(
                reviewId,
                req.body.user_id,
                review,
                date
            );
            
            console.log("ReviewResponse:", ReviewResponse); // Debugging log
            const { error } = ReviewResponse;
            

            if (error) {
                res.status(400).json({ error }); 
                return;
            }
            if(ReviewResponse.modifiedCount === 0){
                throw new Error("Unable to update review. User may not be original poster")
            }
            res.json({status: "Success"})
        }catch(e){
            res.status(500).json({ error: e.message });
        }
    }

    static async apiDeleteReview(req, res, next){

        try{
            const reviewId = req.body.review_id;
            const userId = req.body.user_id;

            const ReviewResponse = await ReviewsDAO.deleteReview(
                reviewId,
                userId,
            ) 

            res.json({status: 'Success'});
        }
        catch(e){
            res.status(500).json({error: e.message})
        }
    }

    static async apiGetMovieById(req, res, next){

        try{
            const id = req.params.id || {};
            const movie = await MoviesDAO.getMovieById(id);

            if(!movie){
                res.status(404).json({error : "Not Found"});
                return
            }

            res.json(movie);
        }
        catch(e){
            console.log(`Api : ${e}`);
            res.status(500).json({error: e})
        }
    }

    static async apiGetRatings(req, res, next){

        try{
            let propertyTypes = await MoviesDAO.getRatings();
            res.json(propertyTypes)
        }
        catch(e){
            console.log(`Api : ${e}`);
            res.status(500).json({error: e})
        }
    }
}