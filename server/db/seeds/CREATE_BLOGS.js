exports.seed = function(knex, Promise) {
  return knex('blogs').del().then(()=>{
    return knex('blogs').insert([
      {
        title: 'Do Forex Trading Better Than Barack Obama',
        image_url: '/assets/dog1.jpg',
        author: 'Steve',
        date: new Date("October 13, 2014"),        
        votes: -1
      },
      {
        title: '52 Ways To Avoid Probiotic Burnout',
        image_url: '/assets/dog2.jpg',
        author: 'Uthra',
        date: new Date("December 7, 2015"),
        votes: 2
      },
      {
        title: 'How To Turn Your 23 Amusingly Misspelled Tattoos That Will Make You Chuckle From Zero To Hero',
        image_url: '/assets/dog3.jpg',
        author: 'Andrew',
        date: new Date("August 1, 2015"),
        votes: -7
      },
      {
        title: '5 Things People Hate About Headphones',
        image_url: '/assets/dog4.jpg',
        author: 'Parker',
        date: new Date("January 25, 2016"),
        votes: 8
      },      
      {
        title: 'The A to Z Guide Of Coconut Oil',
        image_url: '/assets/dog5.jpg',
        author: 'Andrew',
        date: new Date("March 2, 2016"),
        votes: 32
      },      
      {
        title: 'Take The Stress Out Of Twitter',
        image_url: '/assets/dog6.jpg',
        author: 'Uthra',
        date: new Date("March 15, 2016"),
        votes: 0
      },
      {
        title: 'How To Lose Money With Children Menu Conspiracy',
        image_url: '/assets/dog7.jpg',
        author: 'Steve',
        date: new Date("November 8, 2015"),
        votes: 33
      }
    ]).returning('id');
  }).then(ids=>{
    return knex('posts').insert([
      {
        blog_id: ids[0],
        content: `Fashion axe microdosing direct trade bitters four dollar toast. Kinfolk readymade cred four loko DIY, humblebrag chambray godard farm-to-table crucifix. Gentrify fashion axe you probably haven't heard of them, mlkshk thundercats tacos blue bottle forage intelligentsia. Kitsch farm-to-table fanny pack craft beer banh mi health goth, blog fingerstache trust fund put a bird on it waistcoat vegan occupy. Hashtag franzen kombucha meggings tote bag hammock everyday carry pop-up, beard gentrify shabby chic deep v man bun. Chia keffiyeh cliche fashion axe irony schlitz paleo bespoke, helvetica next level pabst vice. Listicle migas hella, selvage occupy gentrify typewriter.

Godard meh YOLO fixie, try-hard VHS intelligentsia. Drinking vinegar wayfarers celiac occupy, bitters thundercats yr crucifix authentic 90's. Pug XOXO mustache, fingerstache street art meggings twee chambray fap hashtag four loko man braid dreamcatcher sriracha. Put a bird on it skateboard everyday carry, shoreditch pickled thundercats stumptown distillery. Blue bottle four loko bushwick, cliche mumblecore church-key migas organic man bun disrupt offal wolf brunch. Intelligentsia knausgaard flannel, lumbersexual fingerstache actually lomo. Keffiyeh swag slow-carb mumblecore.`
      },
      {
        blog_id: ids[1],
        content: `Lumber cred messenger bag, umami truffaut thundercats swag letterpress microdosing. Readymade portland drinking vinegar DIY paleo shabby chic. Wayfarers man bun vinyl, ethical ramps fingerstache food truck messenger bag put a bird on it iPhone pabst helvetica. Marfa fashion axe quinoa, gochujang typewriter pabst biodiesel williamsburg. Kitsch blue bottle chicharrones heirloom, trust fund YOLO meh vinyl. Austin bitters gentrify chicharrones. Asymmetrical DIY polaroid godard lomo drinking vinegar pabst.

Mixtape stumptown microdosing kickstarter. Banh mi 8-bit narwhal, literally 90's craft beer pork belly keytar echo park kickstarter DIY beard gochujang. Listicle knausgaard paleo messenger bag thundercats. Green juice gastropub artisan typewriter, 8-bit art party bicycle rights cardigan jean shorts freegan authentic austin. Craft beer hammock flexitarian put a bird on it, bushwick selfies post-ironic pinterest mustache dreamcatcher lomo banh mi twee. Organic venmo trust fund, narwhal XOXO pabst williamsburg master cleanse freegan tote bag ethical food truck. Blog pabst aesthetic mlkshk chicharrones.`
      },
      {
        blog_id: ids[2],
        content: `Paleo mixtape messenger bag selvage, hoodie PBR&B art party slow-carb meditation. Poutine deep v mlkshk, chambray VHS kale chips sartorial salvia. Keytar listicle readymade put a bird on it mumblecore, authentic wayfarers lumbersexual fap fixie photo booth austin whatever. Salvia brunch hammock, flannel street art thundercats yr banh mi lo-fi. Brooklyn microdosing sustainable gluten-free truffaut. Actually humblebrag health goth marfa raw denim. Disrupt kogi semiotics etsy, keytar authentic organic poutine ramps.

Meggings fingerstache fixie banjo messenger bag, next level 8-bit fanny pack bitters put a bird on it roof party neutra. Forage jean shorts twee blue bottle listicle. Food truck vice vegan raw denim, cronut dreamcatcher chambray biodiesel. Marfa meh ramps, fap whatever listicle bushwick put a bird on it scenester beard lumbersexual keffiyeh portland. Vinyl keffiyeh bushwick, gluten-free skateboard forage blue bottle readymade four loko pug. Tattooed jean shorts intelligentsia, chia everyday carry marfa flexitarian irony freegan. Occupy bicycle rights deep v, affogato crucifix man bun scenester VHS health goth.

Hashtag intelligentsia franzen, mumblecore cornhole echo park affogato jean shorts chambray polaroid try-hard bespoke chicharrones cardigan freegan. Chambray kinfolk yuccie, lo-fi narwhal gochujang retro pork belly etsy. Tumblr +1 wayfarers pitchfork neutra farm-to-table kogi cold-pressed ennui. Truffaut ethical shoreditch, brooklyn sustainable street art tattooed lumbersexual readymade occupy tote bag four loko. Put a bird on it cronut polaroid hashtag green juice. Raw denim four dollar toast man bun portland brunch, sustainable trust fund. Taxidermy kinfolk bespoke echo park lomo leggings.`
      },
      {
        blog_id: ids[3],
        content: `Irony mlkshk distillery meditation, yuccie cred you probably haven't heard of them 8-bit shabby chic roof party polaroid poutine paleo. Hella affogato waistcoat wayfarers YOLO. Pop-up four dollar toast marfa, pour-over four loko selvage lomo chia truffaut +1 freegan mustache gastropub gochujang green juice. Hammock direct trade scenester bitters. Before they sold out forage occupy iPhone lo-fi dreamcatcher hella. Plaid shoreditch normcore, trust fund jean shorts marfa humblebrag pinterest. Tacos synth cred, raw denim cold-pressed umami helvetica health goth wolf intelligentsia ethical try-hard freegan.

Sustainable pour-over plaid, gentrify beard meh cray deep v iPhone. Semiotics fingerstache hoodie ramps cold-pressed, meggings tousled freegan disrupt kitsch thundercats etsy. Brooklyn williamsburg kogi, meditation shoreditch distillery food truck humblebrag. Four dollar toast yr green juice, flexitarian tofu selvage gochujang quinoa sartorial keffiyeh lumbersexual artisan fingerstache celiac. Truffaut everyday carry flannel paleo freegan pour-over squid, meggings polaroid XOXO. DIY readymade cold-pressed, ennui thundercats sartorial mustache austin godard master cleanse 3 wolf moon ethical. Actually four dollar toast swag cardigan.`
      },
      {
        blog_id: ids[4],
        content: `PBR&B crucifix labore cronut cliche. Truffaut umami cred, pork belly pour-over et bespoke sunt. Literally velit sartorial crucifix iPhone placeat. Cray tote bag tumblr pinterest id, vegan ramps bicycle rights williamsburg lo-fi. Crucifix incididunt semiotics cardigan neutra, actually four dollar toast 8-bit PBR&B art party man braid aliqua accusamus tote bag. Blue bottle esse retro salvia, semiotics exercitation tousled paleo odio art party locavore pariatur. Minim incididunt fingerstache distillery, non selvage letterpress tacos small batch cupidatat tofu commodo fanny pack ex kinfolk.`
      },
      {
        blog_id: ids[5],
        content: `Pork belly VHS cronut nisi schlitz irure. Shabby chic cray pop-up assumenda selvage anim. Qui esse ramps nulla, exercitation deep v beard kitsch celiac pabst. Quis godard salvia organic butcher, ad cold-pressed pour-over voluptate try-hard banh mi listicle. Kickstarter quinoa disrupt, try-hard proident exercitation lomo tempor gentrify. Officia meh ea, austin 8-bit direct trade street art affogato chambray. Occaecat yuccie culpa, VHS letterpress vice normcore vinyl.

Quis sriracha marfa, portland schlitz vero VHS fugiat cillum shabby chic actually before they sold out. Heirloom meggings green juice, you probably haven't heard of them locavore post-ironic gochujang pork belly nulla. Mixtape man bun cupidatat, raw denim single-origin coffee meggings post-ironic. Cillum iPhone cornhole meggings, est ex deep v synth fugiat. Letterpress austin mixtape street art, ullamco cornhole neutra quinoa chartreuse green juice. Squid you probably haven't heard of them tattooed YOLO cliche. Pickled hoodie deserunt chambray.`
      },
      {
        blog_id: ids[6],
        content: `Beard intelligentsia hoodie vegan direct trade you probably haven't heard of them. Echo park biodiesel affogato, chillwave food truck tofu gochujang tattooed before they sold out poutine literally quinoa kale chips humblebrag. Kale chips chia shabby chic keytar humblebrag keffiyeh. Craft beer everyday carry flexitarian ramps, stumptown beard deep v master cleanse. Craft beer wayfarers mustache everyday carry, fingerstache authentic direct trade selvage narwhal dreamcatcher irony blue bottle ennui. Salvia VHS viral raw denim. Cold-pressed mixtape kogi lo-fi, readymade squid cronut small batch shoreditch dreamcatcher yuccie +1 brunch venmo.

Shoreditch +1 master cleanse marfa helvetica, art party pug small batch hella keytar. Everyday carry locavore four loko wolf authentic, skateboard tousled disrupt gastropub letterpress viral XOXO offal single-origin coffee. Pug blog pabst food truck kale chips. Ethical fanny pack neutra, PBR&B mlkshk chillwave DIY cold-pressed four dollar toast ennui you probably haven't heard of them godard. Pitchfork roof party austin post-ironic beard tacos. Gochujang fingerstache meditation, mlkshk irony deep v banjo post-ironic. Distillery shoreditch kitsch, butcher cred next level occupy kinfolk tumblr gochujang DIY brunch pork belly 90's ugh.

Man braid bitters try-hard ugh lomo yuccie. Mixtape vegan YOLO scenester aesthetic dreamcatcher. Cornhole kinfolk retro, microdosing keytar jean shorts bicycle rights authentic portland fanny pack health goth taxidermy. Paleo meggings typewriter selfies locavore. Four dollar toast try-hard mustache, poutine ethical cliche +1 farm-to-table hoodie put a bird on it. Organic williamsburg truffaut ethical normcore, chillwave single-origin coffee. Crucifix ennui lomo letterpress, echo park offal forage pickled VHS franzen.`
      }
    ]);
  });
};
