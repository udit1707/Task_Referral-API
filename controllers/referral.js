const User=require('../models/User');



exports.createModel=(req,res,next)=>{

    const user21=new User({name:'User21'});
    user21.save().then(user21=>{
       
        const user20=new User({referral:user21._id,name:'User20'});
        user20.save().then(user20=>{
            const user19=new User({referral:user20._id,name:'User19'});
            user19.save().then(user19=>{
                const user18=new User({referral:user19._id,name:'User18'});
                user18.save().then(user18=>{
                    const user17=new User({referral:user18._id,name:'User17'});
                    user17.save().then(user17=>{
                        const user16=new User({referral:user17._id,name:'User16'});
                        user16.save().then(user16=>{
                            const user15=new User({referral:user16._id,name:'User15'});
                            user15.save().then(user15=>{
                                const user14=new User({referral:user15._id,name:'User14'});
                                user14.save().then(user14=>{
                                    const user13=new User({referral:user14._id,name:'User13'});
                                    user13.save().then(user13=>{
                                        const user12=new User({referral:user13._id,name:'User12'});
                                        user12.save().then(user12=>{
                                            const user11=new User({referral:user12._id,name:'User11'});
                                            user11.save().then(user11=>{
                                                const user10=new User({referral:user11._id,name:'User10'});
                                                user10.save().then(user10=>{
                                                    const user9=new User({referral:user10._id,name:'User9'});
                                                    user9.save().then(user9=>{
                                                        const user8=new User({referral:user9._id,name:'User8'});
                                                        user8.save().then(user8=>{
                                                            const user7=new User({referral:user8._id,name:'User7'});
                                                            user7.save().then(user7=>{
                                                                const user6=new User({referral:user7._id,name:'User6'});
                                                                user6.save().then(user6=>{
                                                                    const user5=new User({referral:user6._id,name:'User5'});
                                                                    user5.save().then(user5=>{
                                                                        const user4=new User({referral:user5._id,name:'User4'});
                                                                        user4.save().then(user4=>{
                                                                            const user3=new User({referral:user4._id,name:'User3'});
                                                                            user3.save().then(user3=>{
                                                                                const user2=new User({referral:user3._id,name:'User2'});
                                                                                user2.save().then(user2=>{
                                                                                    const user1=new User({referral:user2._id,name:'User1'});
                                                                                    user1.save().then(result=>{console.log(result);
                                                                                        res.status(201).json({
                                                                                            message: 'Database Created Successfully'});

                                                                                    }).catch(err=>{console.log(err)});
                                                                                }).catch(err=>{console.log("User 2 creation failed")});
                                                                                }).catch(err=>{console.log("User 3 creation failed")});
                                                                                }).catch(err=>{console.log("User 4 creation failed")});
                                                                                }).catch(err=>{console.log("User 5 creation failed")});
                                                                                }).catch(err=>{console.log("User 6 creation failed")});
                                                                                }).catch(err=>{console.log("User 7 creation failed")});
                                                                                }).catch(err=>{console.log("User 8 creation failed")});
                                                                                }).catch(err=>{console.log("User 9 creation failed")});
                                                                                }).catch(err=>{console.log("User 10 creation failed")});
                                                                                }).catch(err=>{console.log("User 11 creation failed")});
                                                                                }).catch(err=>{console.log("User 12 creation failed")});
                                                                                
                                                                                }).catch(err=>{console.log("User 13 creation failed")});
                                                                                
                                                                                }).catch(err=>{console.log("User 14 creation failed")});
                                                                                
                                                                                }).catch(err=>{console.log("User 15 creation failed")});
                                                                                }).catch(err=>{console.log("User 16 creation failed")});
                                                                                
                                                                                }).catch(err=>{console.log("User 17 creation failed")});
                                                                                
                                                                                
                                                                                }).catch(err=>{console.log("User 18 creation failed")});
                                                                                
                                                                                }).catch(err=>{console.log("User 19 creation failed")});
                                                                                
                                                                                }).catch(err=>{console.log("User 20 creation failed")});

                }).catch(err=>{console.log(err);});
            
    
    
}
exports.getToken=(req,res,next)=>{
    let token =0;let intitial=10;let level=0;
    User.find().then(users=>{
        for(let i=users.length-1;i>=0;i--)
        {
           if(users[i].referral)
           {
               token+=intitial;
               intitial=intitial/2;
               level++;
           }
           else{
              break;
           }
        }
        res.status(200).json({
            message:'Referrals Fetched Successfuly',
            tokenAmount:token,
            User : "User1",
            level:level
        });
    })
    .catch(err=>{res.status(404).json({

        message:err
    });})

}