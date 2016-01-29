// This works by taking the title and try to find unique element on the timeline
// by slugifying title and matches with timeline unique_id and triggers on click event
// on that timeline event to move to slide.
// Note: If slugify doesn't generate same result as of
// Timeline.js library unique_id this will fail as library tries to generate unique id after slugify
// but we do not know how to identify it.
function navigateToTimelineEvent(str) {
  var slug = TL.Util.slugify(str);
  var eventMarker = slug + '-marker';

  if ($('#' + eventMarker).length == 0) {
    return;
  }

  $('#' + eventMarker).trigger('click');

}
