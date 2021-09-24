const request=require("request");


function gecoding(address,callback){
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address +
        '.json?access_token=pk.eyJ1IjoiemVuZ2lkIiwiYSI6ImNrdG9yNTQ3aDBmZXQydXF1OXF1YnNxZTEifQ.KyGlzrlXExC9uksqLyfAuw&limit=1' 
    
        request({url,json:true},(err,res)=>{

            
            if (err){
                callback(err,res);
                return
            }
            else{
                callback(null,res);            }
    });

}



module.exports=gecoding;
// let mapCallback=(err,res)=>{
//     if (err){
//         console.log("error occured");
//         return;
//     }
//     let lat=res.body.features[0].center[1];
//     let long=res.body.features[0].center[0]
//     let place=res.body.features[0].place_name;
//     console.log(res.body.features)
//     console.log(`The place is ${place}`)
//     forecast(lat,long,(err,res)=>{
//         if (err){
//             console.log(err);
//             return;
//         }
//         else{
//             console.log(res.body)
//         }
//     })
//     // console.log(res.body.features[0].center[1],res.body.features[0].center[0]);
//     // console.log(res.body.features)
// }


// module.exports=mapCallback;

