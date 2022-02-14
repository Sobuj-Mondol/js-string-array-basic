let friends = ['Sobuj','Sagor','Akash','Raju'];
function megaFriend(friends){
    // array ki na check kora holo
    if(Array.isArray(friends) == false){
        return 'Please provide an array';
    }
    let mega = friends[0];
    for(let friend of friends){
        if(friend.length > mega.length){
            mega = friend;
        }
    }
    return mega;
}
let myFriends = megaFriend(friends);
console.log(myFriends);
// indexOf
if(friends.indexOf('Akash') != -1){
    console.log('Akash is hear')
}
// includes
if(friends.includes('Akash') != -1){
    console.log('Akash is hear')
}