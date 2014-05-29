crappi 0.3.0
======
[![Build Status](https://travis-ci.org/nrdsrfr/crappi.svg?branch=master)](https://travis-ci.org/nrdsrfr/crappi)

A failure testing utility to make your [Hapi](https://github.com/spumko/hapi) API more Crappi

The impetus for this plugin was an internal request to help my ops team debug an issue by randomly increasing API response times by 10 seconds to force a client to timeout.

I hope to add more functionality to make this more useful, such as adding new ways to make your API crappi, using tags to specify which routes to apply crappiness to and parameters to adjust the crapiness

## Usage

To make a route crappi, you must add a `crappi` property to the route's `plugins` object where the value is either `true` or an object containing route specific options

    {
        config: {
            plugins: {
                crappi: // true or crappi options
            }
        }
    }

Setting `crappi` to a crappi options object will use those settings. If set to `true`, crappi will first use any global settings registered before falling back to defaults.


### Plugin Options Object

- `slomo` - options for slowing down an API's response
    - `rate` - percent of calls affected
    - `time` - number of seconds to delay the response


You can pass options to your server globally via `pack.require` or `Hapi.Composer` eg.


    pack: {},
    servers: [ ... ],
    plugins: {
      'crappi': {
          slomo: {
            rate: 10,
            time: 10
          }
        }
      }
    }
