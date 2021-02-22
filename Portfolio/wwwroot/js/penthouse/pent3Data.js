var bigHouse = [
    {bedroom:'1', extra:'Hot Tub', imgUrl:'https://q-cf.bstatic.com/images/hotel/max1280x900/756/75660284.jpg', planningUrl: 'https://i.ibb.co/0n5kM2z/download-17-B.png',name:'Penthouse Deluxe 1'},
    {bedroom:'1', extra:'Pool', imgUrl:'https://www.caandesign.com/wp-content/uploads/2015/04/Dietz-Lantern-Building-Penthouse-19.jpg', planningUrl: 'https://i.ibb.co/NZwB3Ww/download-17-C.png',name:'Penthouse Deluxe 2'},
    {bedroom:'1', extra:'Terrace', imgUrl:'https://i.insider.com/5c48b8012bdd7f5c5e640d67?width=1100&format=jpeg&auto=webp', planningUrl: 'https://i.ibb.co/h2ssqBp/download-17.png',name:'Penthouse Deluxe 3'},
    {bedroom:'2', extra:'Hot Tub', imgUrl:'https://odis.homeaway.com/odis/listing/b84a171f-91e0-4a00-986f-3c76542ba292.c10.jpg', planningUrl: 'https://i.ibb.co/1dRpykw/download-16-B.png',name:'Penthouse Deluxe 4'},
    {bedroom:'2', extra:'Pool', imgUrl:'https://highworthcitizen.com/wp-content/uploads/2019/08/penthouse-Pool.jpg', planningUrl: 'https://i.ibb.co/F0BgD6n/download-16-C.png',name:'Penthouse Deluxe 5'},
    {bedroom:'2', extra:'Terrace', imgUrl:'https://www.chambonpenthouse.be/assets/images/exterior2-v2.jpg', planningUrl: 'https://i.ibb.co/fqDP5Hx/download-16.png',name:'Penthouse Deluxe 6'},
    {bedroom:'3', extra:'Hot Tub', imgUrl:'https://forge-sf.com/app/uploads/2017/01/Penthouse-Hot-Tub.jpg', planningUrl: 'https://i.ibb.co/XZqn5Hz/download-15-B.png',name:'Penthouse Deluxe 7'},
    {bedroom:'3', extra:'Pool', imgUrl:'https://www.imagicasa.be/storage/stories/October2019/810306-51804-Luxe-penthouse-met-uniek-zicht-op-Antwerpen-50.jpg', planningUrl: 'https://i.ibb.co/WVchpx7/download-15-C.png',name:'Penthouse Deluxe 8'},
    {bedroom:'3', extra:'Terrace', imgUrl:'https://www.realista.com/nl/wp-content/uploads/2017/10/penthouse-te-koop-centrum-Estepona-for-sale_Residential-Infinity-Estepona_Realista-Quality-Properties-Marbella.jpg', planningUrl: 'https://i.ibb.co/k08CTQb/download-15.png',name:'Penthouse Deluxe 9'},
    {bedroom:'4', extra: 'Terrace', imgUrl:'https://i.ibb.co/BwQg4Gj/5310a729-cf93-4ed0-93c9-7df26129cd24.jpg', planningUrl: 'https://i.ibb.co/N9qcjJV/download-14-B-copy.png',name:'Penthouse Deluxe 10'},
    {bedroom:'4', extra: 'Pool', imgUrl:'https://i.ibb.co/BwQg4Gj/5310a729-cf93-4ed0-93c9-7df26129cd24.jpg', planningUrl: 'https://i.ibb.co/59nC1qZ/download-14.png',name:'Penthouse Deluxe 10'},
    {bedroom:'4', extra: 'Hot Tub', imgUrl:'https://i.ibb.co/BwQg4Gj/5310a729-cf93-4ed0-93c9-7df26129cd24.jpg', planningUrl: 'https://i.ibb.co/gr0rfs4/download-13.png',name:'Penthouse Deluxe 10'},
    ]
    var smallHouse = [
    {bedroom:'1', imgUrl:'https://design-milk.com/images/2020/05/ethnicraft-dmoa-mini-loft-12.jpg', planningUrl: 'https://i.ibb.co/qyR8KT5/download-9.png',name:'Penthouse Fundamentals 1'},
    {bedroom:'2', imgUrl:'https://r-cf.bstatic.com/images/hotel/max1280x900/251/251143749.jpg', planningUrl: 'https://i.ibb.co/MRNQkYc/download-10.png',name:'Penthouse Fundamentals 2'},
    {bedroom:'3', imgUrl:'https://r-cf.bstatic.com/images/hotel/max1280x900/251/251143749.jpg', planningUrl: 'https://i.ibb.co/KW6vThv/download-11.png',name:'Penthouse Fundamentals 3'},
    ]
    var utilitiesPrice=[
      {utilityName:'Pool', price:10000}, 
      {utilityName:'Hot Tub', price:5000}, 
      {utilityName:'Terrace', price:0}
    ]
    var kitchen = [
      {name:'Regular', price:0, imgUrl:'https://nimvo.com/wp-content/uploads/2019/10/Modern-Kitchen.jpg'},
      {name:'Special', price:10000,  imgUrl:'https://i.ytimg.com/vi/x4wwdCFDvLE/maxresdefault.jpg'},
      {name:'Elegant', price:14000,  imgUrl:'https://d6jhp3hr7lf1v.cloudfront.net/wp-content/uploads/sites/178/2015/05/11152647/6733057_l-1900x1080.jpg'},
    ]
    var bathroom = [
      {name:'Classic', price:0, imgUrl:'https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegpEFZhS0lI_F8U4XZVz~HWxt~mGgYekxX9nCAxh0ZjtE2u9zqepXEUrVLqfm8KeIGW6Gtyd4X89rAIO5di0rCB16ZRsLZ39Rz92eYHvTHf4xVf97SwGxKMe3K40XFhGlV2hKlbKVcwbhWp2h5TA--.jpg'},
      {name:'Modern', price:11000, imgUrl:'https://www.luxuryproperty.com/uploads/images/5-bedroom-penthouse-for-sale-135_west_52nd_street-LP02591-2d5ac6ddf5e46400.jpg'},
      {name:'Deluxe', price:15000, imgUrl:'https://www.sripanwa.com/wp-content/uploads/2016/11/8-Penthouse-Suite-Private-Pool-Sri-Panwa-Luxury-Hotel-Phuket-1920x1080.jpg'},
    ]
    var bigPlanImg = ['https://i.ibb.co/h2ssqBp/download-17.png','https://i.ibb.co/fqDP5Hx/download-16.png','https://i.ibb.co/k08CTQb/download-15.png','https://i.ibb.co/N9qcjJV/download-14-B-copy.png',]
    var smallPlanImg =['https://i.ibb.co/qyR8KT5/download-9.png','https://i.ibb.co/MRNQkYc/download-10.png','https://i.ibb.co/KW6vThv/download-11.png']
    
