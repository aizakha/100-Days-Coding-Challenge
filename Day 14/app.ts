//🚀 Day 14 Challenge: Start Coding! 🚀
//Question 1
function music_album(artics: string, title: string, tracks?: number) {
    let album: any = {
      artics,
      title,
    };
    if (tracks) {
      album["tracks"] = tracks;
    }
    return album;
  }
  console.log(music_album("Leonardo da Vinci", "Premier Painter"));
  console.log(music_album("Claude Monet", "Oscar-Claude Monet", 2));
  //Qestion 2
  let magicianNames: string[] = ["Harry Houdini", "David Blaine", "Derren Brown"];
  magicianNames.forEach((Name) => {
    console.log(`Magician Name :${Name}`);
  });
  //Question 3
  magicianNames.forEach((Name) => {
    console.log(`The Great Magician Names :"${Name}"`);
  });