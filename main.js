var images=[
    "https://i.pinimg.com/736x/64/66/36/6466368ae882a786de7641c011c45a4a--cute-family-photos-family-posing.jpg",
    "https://tse4.mm.bing.net/th?id=OIP.Y1Ja22rDaiNUML-UkNh1DQHaJ4&pid=Api&P=0&w=300&h=300",
    "https://www.pixelstalk.net/wp-content/uploads/2016/11/Free-Images-Family.jpg",
    "https://media.istockphoto.com/photos/cheerful-loving-family-making-human-pyramid-in-park-picture-id170041885?k=6&m=170041885&s=170667a&w=0&h=VpijU_y7PPGRxrX7bM8hWPO75-fv0NTv_z8mp3_XubU="
  ];
  var reasons=[
    "Family is great",
    "Family supports you",
    "Family is always there for you",
    "Trust your family"
  ];
  var i=0;
  function next(){
    document.getElementById("reason").innerHTML=reasons[i];
    document.getElementById("Album").src=images[i];
    i++;
    document.getElementById("audio").play();
  }