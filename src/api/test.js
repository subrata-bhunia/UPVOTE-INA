import React, { useEffect } from "react";
import { JoinGroup, UserRemove } from "./groups";
import {View,Text} from 'react-native';
import { AddFriend, BlockFriend, TotalFriend, UnblockFriend } from "./friends";
import { MagicCommentCount, MagicCommentList, MagicShareCount, MyMagicQuestion } from "./magic-questions";
import { QuestionLikeCount, QuestionShareCount } from "./questions";
const Test= () =>{
    useEffect(()=>{
        // JoinGroup('61f3946e8b8fca9c52a89779',{
        //     "memberID":"61f26db96d124a0503f5c94e"
        // }).then(res=>console.log("Test 1",res.data))
        // UserRemove('61f3946e8b8fca9c52a89779',{
        //     "memberID":"61f26db96d124a0503f5c94e"
        // }).then(res=>console.log("Test 2",res.data))
        // AddFriend({
        //     "my_id":"61eed3f26d124a0503f5c934",
        //     "friends_id":"61f26db96d124a0503f5c94e"
        // }).then(res=>console.log("Test 3",res.data))
        // TotalFriend('61f26db96d124a0503f5c94e').then(res=>console.log("Test 4",res.data))
        // BlockFriend({
        //     "my_id":"61eed3f26d124a0503f5c934",
        //     "block_user_id":"61f26db96d124a0503f5c94e"
        // }).then(res=>console.log("Test 5",res.data))
        // UnblockFriend('61eed3f26d124a0503f5c934',{
        //     "blockId":'61f26db96d124a0503f5c94e'
        // }).then(res=>console.log("Test 6",res.data))
    },[])
    return(
        <View>
            <Text>
                Test
            </Text>
        </View>
    )
}

export default Test;
