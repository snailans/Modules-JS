const musicIterator = Symbol.iterator;

const musicCollection = {
  albums: [
    {
      title: "Альбом 1",
      artist: "Исполнитель 1",
      year: "2000",
    },
    {
      title: "Альбом 2",
      artist: "Исполнитель 2",
      year: "2005",
    },
    {
      title: "Альбом 3",
      artist: "Исполнитель 3",
      year: "2010",
    },
  ],

  [musicIterator]: function () {
    let index = 0;
    const albums = this.albums;

    return {
      next: function () {
        return index < albums.length
          ? { value: albums[index++], done: false }
          : { done: true };
      },
    };
  },
};

for (const album of musicCollection) {
  console.log(`${album.title} - ${album.artist} (${album.year})`);
}
