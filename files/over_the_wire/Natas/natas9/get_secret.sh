#!/bin/bash

php -r '$secret = base64_decode(strrev(hex2bin("3d3d516343746d4d6d6c315669563362")));echo $secret;'