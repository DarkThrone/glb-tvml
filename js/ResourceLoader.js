/**
 * Created by geronimo on 11/11/15.
 */
class ResourceLoader {
  constructor(baseUrl){
    this.BASEURL = baseUrl;
  }

  loadResource(resource, callback){
    var self = this;
    evaluateScripts([resource], function(success) {
      if(success) {
        var resource = Template.call(self);
        callback.call(self, resource);
      } else {
        var title = "Resource Loader Error",
          description = `Error loading resource '${resource}'. \n\n Try again later.`,
          alert = createAlert(title, description);

        navigationDocument.presentModal(alert);
      }
    });
  }
}
