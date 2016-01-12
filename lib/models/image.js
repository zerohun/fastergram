FS.debug = true;
Images = new FS.Collection("images", {
  stores: [new FS.Store.FileSystem("images")]
});

Images.allow({
    insert: function(userId, fileObj) {
        return true;
    }
});
