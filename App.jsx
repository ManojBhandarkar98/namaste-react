import React from "react";
import ReactDOM from "react-dom/client";

//react Element
const jsxHeading = (<h1 id="heading">Namaste React using JSX 🚀</h1>);

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/2/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-JmYWTjUsE-Q.jpg"></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    );
}

const RestroCard = (props) => {
    const { restData } = props;

    const { name, cuisines, avgRating, sla,cloudinaryImageId } = restData?.info;
    return (
        <div className="restro-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="rest-logo"
                src={cloudinaryImageId} alt="rest-logo" />
            <h2>{name}</h2>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating} rating</h4>
            <h4>{sla.deliveryTime} minutes</h4>
        </div>
    );
}

const resObj =
    [
        {
            "info": {
                "id": "870899",
                "name": "Paras Mishthan",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/ff45eb24-ff5d-49d5-8652-7f90aaee28f5.jpg",
                "locality": "Nagarpalika Complex",
                "areaName": "Chhindwara City",
                "costForTwo": "₹150 for two",
                "cuisines": [
                    "Beverages",
                    "Sweets",
                    "Snacks"
                ],
                "avgRating": 3.8,
                "veg": true,
                "parentId": "510613",
                "avgRatingString": "3.8",
                "totalRatingsString": "28",
                "sla": {
                    "deliveryTime": 54,
                    "lastMileTravel": 11.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "50-55 mins",
                    "lastMileTravelString": "11.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-27 22:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "20% OFF",
                    "subHeader": "ABOVE ₹699",
                    "discountTag": "FLAT DEAL"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/paras-mishthan-nagarpalika-complex-chhindwara-city-rest870899",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "672945",
                "name": "Annu's Kitchen's Queen Of Paratha",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/e65c0247-812f-43da-92b6-f156fc32e764.jpg",
                "locality": "Teacher's Colony",
                "areaName": "Chhindwara City",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "North Indian",
                    "South Indian",
                    "Chinese",
                    "Beverages",
                    "Fast Food",
                    "Desserts"
                ],
                "avgRating": 4.6,
                "parentId": "402960",
                "avgRatingString": "4.6",
                "totalRatingsString": "92",
                "sla": {
                    "deliveryTime": 73,
                    "lastMileTravel": 13.7,
                    "serviceability": "SERVICEABLE",
                    "slaString": "70-75 mins",
                    "lastMileTravelString": "13.7 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-27 23:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/annus-kitchens-queen-of-paratha-teachers-colony-chhindwara-city-rest672945",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "498029",
                "name": "Omi Ki Bakery",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/44df4975-8ff8-49dd-8e66-58d4d9a80a87.jpg",
                "locality": "Rautha Wada",
                "areaName": "Chhindwara City",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Bakery"
                ],
                "avgRating": 4.6,
                "veg": true,
                "parentId": "298958",
                "avgRatingString": "4.6",
                "totalRatingsString": "5",
                "sla": {
                    "deliveryTime": 57,
                    "lastMileTravel": 10.3,
                    "serviceability": "SERVICEABLE",
                    "slaString": "55-60 mins",
                    "lastMileTravelString": "10.3 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-27 23:30:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/omi-ki-bakery-rautha-wada-chhindwara-city-rest498029",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "945448",
                "name": "Yummy Better",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/dd79d385-5898-4956-8a07-718b8ddde9ff.jpg",
                "locality": "Chhindwara City",
                "areaName": "Chhindwara City",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "South Indian",
                    "Fast Food"
                ],
                "veg": true,
                "parentId": "557138",
                "avgRatingString": "NEW",
                "sla": {
                    "deliveryTime": 61,
                    "lastMileTravel": 11.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "60-65 mins",
                    "lastMileTravelString": "11.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-27 22:00:00",
                    "opened": true
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "isOpen": true,
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "aggregatedDiscountInfoV3": {
                    "header": "10% OFF",
                    "subHeader": "UPTO ₹40"
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "isNewlyOnboarded": true,
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/yummy-better-chhindwara-city-rest945448",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "151509",
                "name": "Dawat Restaurant (hotel Surya)",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/3fe1dda8-4369-48b7-aff0-574bbfa28885.jpg",
                "locality": "Sinchai Colony",
                "areaName": "Chhindwara Locality",
                "costForTwo": "₹200 for two",
                "cuisines": [
                    "Chinese",
                    "South Indian"
                ],
                "avgRating": 4.8,
                "parentId": "68916",
                "avgRatingString": "4.8",
                "totalRatingsString": "29",
                "sla": {
                    "deliveryTime": 59,
                    "lastMileTravel": 11.5,
                    "serviceability": "SERVICEABLE",
                    "slaString": "55-60 mins",
                    "lastMileTravelString": "11.5 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextCloseTime": "2024-12-27 10:00:00",
                    "opened": true
                },
                "badges": {

                },
                "isOpen": true,
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {

                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/dawat-restaurant-hotel-surya-sinchai-colony-chhindwara-locality-rest151509",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "751057",
                "name": "The Burger House",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/a2963595-02b9-4472-80a5-e790d9308d93.jpg",
                "locality": "Vip Khajri Road",
                "areaName": "Chhindwara City",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "Burgers",
                    "Snacks",
                    "Beverages"
                ],
                "veg": true,
                "parentId": "16588",
                "avgRatingString": "--",
                "sla": {
                    "deliveryTime": 66,
                    "lastMileTravel": 11.4,
                    "serviceability": "SERVICEABLE",
                    "slaString": "65-70 mins",
                    "lastMileTravelString": "11.4 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextOpenTimeMessage": "Opens next at 9 am, today"
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/the-burger-house-vip-khajri-road-chhindwara-city-rest751057",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "830418",
                "name": "Indian Coffee House",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/36654b98-27ab-4601-b54c-a59cb11b5607.jpg",
                "locality": "Chhindwara City",
                "areaName": "Khajri Chowk",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "South Indian",
                    "North Indian",
                    "Chinese",
                    "Fast Food",
                    "Beverages"
                ],
                "avgRating": 4.4,
                "veg": true,
                "parentId": "106448",
                "avgRatingString": "4.4",
                "totalRatingsString": "103",
                "sla": {
                    "deliveryTime": 45,
                    "lastMileTravel": 11.2,
                    "serviceability": "SERVICEABLE",
                    "slaString": "40-45 mins",
                    "lastMileTravelString": "11.2 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextOpenTimeMessage": "Opens next at 9 am, today"
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/indian-coffee-house-city-khajri-chowk-rest830418",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        },
        {
            "info": {
                "id": "549580",
                "name": "Fresh Meal's",
                "cloudinaryImageId": "https://product-assets.faasos.io/eatsure_cms/production/d4f6cedf-1e89-4aa5-a91d-8bb425a4f686.jpg",
                "locality": "Teacher's Colony",
                "areaName": "Chhindwara City",
                "costForTwo": "₹300 for two",
                "cuisines": [
                    "North Indian",
                    "South Indian"
                ],
                "avgRating": 4.1,
                "veg": true,
                "parentId": "15219",
                "avgRatingString": "4.1",
                "totalRatingsString": "86",
                "sla": {
                    "deliveryTime": 77,
                    "lastMileTravel": 13.6,
                    "serviceability": "SERVICEABLE",
                    "slaString": "75-80 mins",
                    "lastMileTravelString": "13.6 km",
                    "iconType": "ICON_TYPE_EMPTY"
                },
                "availability": {
                    "nextOpenTimeMessage": "Opens next at 9 am, today"
                },
                "badges": {
                    "imageBadges": [
                        {
                            "imageId": "v1695133679/badges/Pure_Veg111.png",
                            "description": "pureveg"
                        }
                    ]
                },
                "aggregatedDiscountInfoV2": {

                },
                "type": "F",
                "badgesV2": {
                    "entityBadges": {
                        "imageBased": {
                            "badgeObject": [
                                {
                                    "attributes": {
                                        "description": "pureveg",
                                        "imageId": "v1695133679/badges/Pure_Veg111.png"
                                    }
                                }
                            ]
                        },
                        "textBased": {

                        },
                        "textExtendedBadges": {

                        }
                    }
                },
                "orderabilityCommunication": {
                    "title": {

                    },
                    "subTitle": {

                    },
                    "message": {

                    },
                    "customIcon": {

                    }
                },
                "differentiatedUi": {
                    "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                    "differentiatedUiMediaDetails": {
                        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                        "lottie": {

                        },
                        "video": {

                        }
                    }
                },
                "reviewsSummary": {

                },
                "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
                "restaurantOfferPresentationInfo": {

                },
                "externalRatings": {
                    "aggregatedRating": {
                        "rating": "--"
                    }
                },
                "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
            },
            "analytics": {
                "context": "seo-data-279683a3-0785-4ed3-b3d5-81524b8d1b24"
            },
            "cta": {
                "link": "https://www.swiggy.com/city/chhindwara/fresh-meals-teachers-colony-chhindwara-city-rest549580",
                "text": "RESTAURANT_MENU",
                "type": "WEBLINK"
            },
            "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
        }
    ];





const Body = () => {
    return (
        <div className="wrapper">
            <div className="Search-container">
                Search
            </div>

            <div className="restro-container">
                {
                    resObj.map(restaurant => <RestroCard restData={restaurant} />)
                }

            </div>

        </div>
    );
}

//React Functional Component
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />

        </div>);
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);   //render react component - Component first letter Capital
//root.render(jsxHeading);    //render react Element