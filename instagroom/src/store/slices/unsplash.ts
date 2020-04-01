import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { produce, Draft } from "immer"

interface IUnsplashState {
  readonly items: Array<any>
}

const initialState: IUnsplashState = {
  items: []
}

/**
 * {type: 'unsplash/setPics', payload: { results: [pic1, pic2, ...] }}
 * Inserts the pics into the store.
 */
const setPicsReducer = {
  setPics: produce((draft: Draft<IUnsplashState>, { payload: { results: items } }: PayloadAction<any>) => {
    draft.items = items
  })
}

export const unsplashSlice = createSlice({
  name: 'unsplash',
  initialState,
  reducers: {
    ...setPicsReducer,
  },
})

export const sample = {
  "id": "lkMJcGDZLVs",
  "created_at": "2018-02-19T11:35:56-05:00",
  "updated_at": "2020-03-28T01:02:28-04:00",
  "promoted_at": "2018-02-20T10:13:38-05:00",
  "width": 3648,
  "height": 5472,
  "color": "#D0824B",
  "description": "Bearded Man",
  "alt_description": "man wearing green crew-neck t-shirt looking upwards",
  "urls": {
    "raw": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMzkwM30",
    "full": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjEyMzkwM30",
    "regular": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjEyMzkwM30",
    "small": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjEyMzkwM30",
    "thumb": "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjEyMzkwM30"
  },
  "links": {
    "self": "https://api.unsplash.com/photos/lkMJcGDZLVs",
    "html": "https://unsplash.com/photos/lkMJcGDZLVs",
    "download": "https://unsplash.com/photos/lkMJcGDZLVs/download",
    "download_location": "https://api.unsplash.com/photos/lkMJcGDZLVs/download"
  },
  "categories": [],
  "likes": 848,
  "liked_by_user": false,
  "current_user_collections": [],
  "user": {
    "id": "1Ii2-3J-e_o",
    "updated_at": "2020-03-29T14:11:21-04:00",
    "username": "jakobowens1",
    "name": "Jakob Owens",
    "first_name": "Jakob",
    "last_name": "Owens",
    "twitter_username": "jakobOwenss",
    "portfolio_url": "http://www.directorjakobowens.com",
    "bio": "Filmmaker and Photographer: LA/PHX - Instagram: @JakobOwens\r\nLightroom Presets available here: http://bit.ly/2nzXy7z",
    "location": null,
    "links": {
      "self": "https://api.unsplash.com/users/jakobowens1",
      "html": "https://unsplash.com/@jakobowens1",
      "photos": "https://api.unsplash.com/users/jakobowens1/photos",
      "likes": "https://api.unsplash.com/users/jakobowens1/likes",
      "portfolio": "https://api.unsplash.com/users/jakobowens1/portfolio",
      "following": "https://api.unsplash.com/users/jakobowens1/following",
      "followers": "https://api.unsplash.com/users/jakobowens1/followers"
    },
    "profile_image": {
      "small": "https://images.unsplash.com/profile-1489915140304-be21c5eb4986?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
      "medium": "https://images.unsplash.com/profile-1489915140304-be21c5eb4986?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
      "large": "https://images.unsplash.com/profile-1489915140304-be21c5eb4986?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
    },
    "instagram_username": "jakobowens",
    "total_collections": 2,
    "total_likes": 445,
    "total_photos": 760,
    "accepted_tos": true
  },
  "tags": [
    {
      "type": "landing_page",
      "title": "people",
      "source": {
        "ancestry": {
          "type": {
            "slug": "images",
            "pretty_slug": "Images"
          },
          "category": {
            "slug": "people",
            "pretty_slug": "People"
          }
        },
        "title": "People Images & Pictures",
        "subtitle": "Download free people images",
        "description": "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
        "meta_title": "People Pictures [HQ] | Download Free Images on Unsplash",
        "meta_description": "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
        "cover_photo": {
          "id": "PmNjS6b3XP4",
          "created_at": "2017-04-20T18:04:07-04:00",
          "updated_at": "2020-03-21T01:02:34-04:00",
          "promoted_at": "2017-04-21T12:00:49-04:00",
          "width": 4630,
          "height": 3087,
          "color": "#272D35",
          "description": "Summer in France with baby",
          "alt_description": "woman carrying baby while walking",
          "urls": {
            "raw": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1",
            "full": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
            "regular": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "small": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
            "thumb": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/PmNjS6b3XP4",
            "html": "https://unsplash.com/photos/PmNjS6b3XP4",
            "download": "https://unsplash.com/photos/PmNjS6b3XP4/download",
            "download_location": "https://api.unsplash.com/photos/PmNjS6b3XP4/download"
          },
          "categories": [],
          "likes": 1442,
          "liked_by_user": false,
          "current_user_collections": [],
          "user": {
            "id": "7S_pCRiCiQo",
            "updated_at": "2020-03-12T11:13:23-04:00",
            "username": "thedakotacorbin",
            "name": "Dakota Corbin",
            "first_name": "Dakota",
            "last_name": "Corbin",
            "twitter_username": "thedakotacorbin",
            "portfolio_url": "http://www.dakotacorbin.com",
            "bio": "Husband | Father | Art Director",
            "location": "Utah, United States",
            "links": {
              "self": "https://api.unsplash.com/users/thedakotacorbin",
              "html": "https://unsplash.com/@thedakotacorbin",
              "photos": "https://api.unsplash.com/users/thedakotacorbin/photos",
              "likes": "https://api.unsplash.com/users/thedakotacorbin/likes",
              "portfolio": "https://api.unsplash.com/users/thedakotacorbin/portfolio",
              "following": "https://api.unsplash.com/users/thedakotacorbin/following",
              "followers": "https://api.unsplash.com/users/thedakotacorbin/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1526492009234-3869bff1ca1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1526492009234-3869bff1ca1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1526492009234-3869bff1ca1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "thedakotacorbin",
            "total_collections": 2,
            "total_likes": 1,
            "total_photos": 44,
            "accepted_tos": false
          }
        }
      }
    },
    {
      "type": "landing_page",
      "title": "person",
      "source": {
        "ancestry": {
          "type": {
            "slug": "images",
            "pretty_slug": "Images"
          },
          "category": {
            "slug": "people",
            "pretty_slug": "People"
          }
        },
        "title": "People Images & Pictures",
        "subtitle": "Download free people images",
        "description": "Human faces speak to us in a way that language cannot. Everyone recognize a smile, a frown, tears. Unsplash has the finest selection of people images on the web: high-def and curated for quality. Family, friends, men, women, Unsplash has photos for all.",
        "meta_title": "People Pictures [HQ] | Download Free Images on Unsplash",
        "meta_description": "Choose from hundreds of free people pictures. Download HD people photos for free on Unsplash.",
        "cover_photo": {
          "id": "PmNjS6b3XP4",
          "created_at": "2017-04-20T18:04:07-04:00",
          "updated_at": "2020-03-21T01:02:34-04:00",
          "promoted_at": "2017-04-21T12:00:49-04:00",
          "width": 4630,
          "height": 3087,
          "color": "#272D35",
          "description": "Summer in France with baby",
          "alt_description": "woman carrying baby while walking",
          "urls": {
            "raw": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1",
            "full": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb",
            "regular": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max",
            "small": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max",
            "thumb": "https://images.unsplash.com/photo-1492725764893-90b379c2b6e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max"
          },
          "links": {
            "self": "https://api.unsplash.com/photos/PmNjS6b3XP4",
            "html": "https://unsplash.com/photos/PmNjS6b3XP4",
            "download": "https://unsplash.com/photos/PmNjS6b3XP4/download",
            "download_location": "https://api.unsplash.com/photos/PmNjS6b3XP4/download"
          },
          "categories": [],
          "likes": 1442,
          "liked_by_user": false,
          "current_user_collections": [],
          "user": {
            "id": "7S_pCRiCiQo",
            "updated_at": "2020-03-12T11:13:23-04:00",
            "username": "thedakotacorbin",
            "name": "Dakota Corbin",
            "first_name": "Dakota",
            "last_name": "Corbin",
            "twitter_username": "thedakotacorbin",
            "portfolio_url": "http://www.dakotacorbin.com",
            "bio": "Husband | Father | Art Director",
            "location": "Utah, United States",
            "links": {
              "self": "https://api.unsplash.com/users/thedakotacorbin",
              "html": "https://unsplash.com/@thedakotacorbin",
              "photos": "https://api.unsplash.com/users/thedakotacorbin/photos",
              "likes": "https://api.unsplash.com/users/thedakotacorbin/likes",
              "portfolio": "https://api.unsplash.com/users/thedakotacorbin/portfolio",
              "following": "https://api.unsplash.com/users/thedakotacorbin/following",
              "followers": "https://api.unsplash.com/users/thedakotacorbin/followers"
            },
            "profile_image": {
              "small": "https://images.unsplash.com/profile-1526492009234-3869bff1ca1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=32&w=32",
              "medium": "https://images.unsplash.com/profile-1526492009234-3869bff1ca1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=64&w=64",
              "large": "https://images.unsplash.com/profile-1526492009234-3869bff1ca1d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=faces&cs=tinysrgb&fit=crop&h=128&w=128"
            },
            "instagram_username": "thedakotacorbin",
            "total_collections": 2,
            "total_likes": 1,
            "total_photos": 44,
            "accepted_tos": false
          }
        }
      }
    },
    {
      "type": "search",
      "title": "human"
    }
  ]
}