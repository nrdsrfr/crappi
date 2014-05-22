crappi 0.2.0
======

A failure testing utility to make your Hapi API more Crappi

The impetus for this plugin was an internal request to help my ops team debug an issue by randomly increasing API response times by 10 seconds to force a client to timeout.

I hope to add more functionality to make this more useful, such as adding new ways to make your API crappi, using tags to specify which routes to apply crappiness to and parameters to adjust the crapiness

### Plugin Options

- `slomo` - options for slowing down an API's response
    - `rate` - percent of calls affected
    - `time` - number of seconds to delay the response