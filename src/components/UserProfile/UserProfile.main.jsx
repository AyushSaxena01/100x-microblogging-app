import React from 'react'
import { useNavigate } from 'react-router-dom';
import Add from '../common/Add.icon'
import Post from '../Tweet/Post'
export default function MainUserProfile() {
  const navigate = useNavigate();

  const trailData = [
    {
      Meta: {comments:11, reposts:289, likes:786, views:99.9},
      Post: {id:1, 
        text:{text:" Hey, have you checked out the new sports car that just hit the market?"}, 
        postedAt:'', 
        postedBy: { userid:2, userName:'@Anexas', userFullName:'Ayush Saxena',userImage:'src/assets/avtar.png'}
      }
    },
    {
      Meta: {comments:18, reposts:29, likes:780, views:79.9},
      Post: {id:2, 
        text:{text:"Well, I still love cars, but there's something about the freedom and adrenaline rush you get on a motorcycle. I recently got myself a new superbike, and it's a whole different experience."}, 
        postedAt:'', 
        postedBy: { userid:3, userName:'@Anishka', userFullName:'Anishka Saxena',userImage:'src/assets/avtar.png'}
      }
    },
    {
      Meta: {comments:114, reposts:294, likes:86, views:9.9},
      Post: {id:3, 
        text:{text:"True, cruisers have that timeless charm. But you can't beat the agility of a sportbike, especially when you're carving through twisty roads."}, 
        postedAt:'', 
        postedBy: { userid:4, userName:'@Anuj', userFullName:'Anuj Bangard',userImage:'src/assets/avtar.png'}
      }
    },
    {
      Meta: {comments:110, reposts:2869, likes:7860, views:99.5},
      Post: {id:4, 
        text:{text:"Yeah, electric cars are making quite a statement. I've been eyeing the new Tesla Roadster. The acceleration on that thing is mind-blowing, and the fact that it's all electric is just the future knocking on our doors."}, 
        postedAt:'', 
        postedBy: { userid:5, userName:'@Mukta', userFullName:'Mukta Wallabhdas',userImage:'src/assets/avtar.png'}
      }
    },
    {
      Meta: {comments:114, reposts:20, likes:78, views:56},
      Post: {id:5, 
        text:{text:"Great the tweet functionality is working now, the list is being rendered"}, 
        postedAt:'', 
        postedBy: { userid:6, userName:'@Anexas', userFullName:'Ayush Saxena',userImage:'src/assets/avtar.png'}
      }
    },
    {
      Meta: {comments:14, reposts:7, likes:7, views:6},
      Post: {id:6, 
        text:{text:"Great the tweet functionality is working now, the list is being rendered.Great the tweet functionality is working now, the list is being rendered.Great the tweet functionality is working now, the list is being rendered.Great the tweet functionality is working now, the list is being rendered.Great the tweet functionality is working now, the list is being rendered"}, 
        postedAt:'', 
        postedBy: { userid:7, userName:'@Anexas', userFullName:'Ayush Saxena',userImage:'src/assets/avtar.png'}
      }
    }
  ]

  return (
    <>
       <main className="flex flex-col  w-96.5">
       <ul>
        {
          trailData.map((element)=>{
          return (
            <li key={element.Post.id}>
              <Post Meta={element.Meta} Post={element.Post} />
            </li>
            )
          })
        }
        </ul>

  
   <Add onClick={()=>{navigate('/ComposeTweet')}} />
  
</main>

    </>
  )
}
