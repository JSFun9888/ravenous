const apiKey = '7m7ruSluO-3bzVod-A0gH9mHGZLnBYghHQOe3YVqavSJBICJlFQPqQFk9VoRgImsEAhu9W52JlOpHJIPiroiuAO-7oZd3_dJBB_6nAH442f6Ek07lYHAoETDuHH2YHYx';
const cors = 'https://cors-anywhere.herokuapp.com/';

const Yelp = {
    search(term,location,sortby) {
        const url = 'https://api.yelp.com/v3/businesses/search?term='
        return fetch(
            cors+url+term+'&location='+location+'&sort_by='+sortby,
            {headers: 
                {Authorization: `Bearer ${apiKey}`}
            }
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if(jsonResponse.businesses) {
                return jsonResponse.businesses.map(business => {
                    return {
                        id: business.id,
                        imageSrc: business.image_url,
                        name: business.name,
                        address: business.location.address1,
                        city: business.location.city,
                        state: business.location.state,
                        zipCode: business.location.zip_code,
                        category: business.categories.title,
                        rating: business.rating,
                        reviewCount: business.review_count
                    }
                });
            }
        });
    }
};



export default Yelp;
