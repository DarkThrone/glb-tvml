var Presenter = {
  makeDocument: function(resource) {
    if(!Presenter.parser){
      Presenter.parser = new DOMParser();
    }

    return Presenter.parser.parseFromString(resource, 'application/xml');
  },
  modalDialogPresenter : function(xml) {
    navigationDocument.presentModal(xml);
  },
  pushDocument: function (xml) {
    navigationDocument.pushDocument(xml);
  },

  load: function(event) {
    var self = this,
      ele = event.target,
      videoURL = ele.getAttribute("videoURL");

    if(videoURL) {
      var player = new Player();
      var playlist = new Playlist();
      var mediaItem = new MediaItem("videos", videoURL);

      player.playlist = playlist;
      player.playlist.push(mediaItem);
      player.present();
    }
  }
};
