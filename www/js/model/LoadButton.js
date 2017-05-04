/**
 * @author Carl- wzhang@softrobtech.com
 *
 * - Most Implementation is copied from LoadButton implemented by Carl
 */

/**
 * A button that load into Viewer.
 *
 *
 * @constructor
 * @param options - object with following keys:
 *   * ros - the ROSLIB.Ros connection handle
 *   * topic (optional) - the map topic to listen to
 *   * rootObject (optional) - the root object to add this marker to
 *   * continuous (optional) - if the map should be continuously loaded (e.g., for SLAM)
 */
ROS2D.LoadButton = function(options) {
  var that = this;
  options = options || {};
  var divID = options.divID;
  var ros = options.ros;
  this.continuous = options.continuous;
  this.rootObject = options.rootObject || new createjs.Container();

  // current grid that is displayed
  this.currentGrid = null;
  
  that.rootObject.addChild(that.divID);

};
ROS2D.LoadButton.prototype.__proto__ = EventEmitter2.prototype;
