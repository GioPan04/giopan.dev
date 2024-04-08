---
layout: '../../../layouts/Post.astro'
title: 'Generate a SSL certificate for a FRITZ!Box access-point'
pubDate: 2024-04-08
description: "I just got a FRITZ!Box access-point but I had issues installing the SSL certificate, here's how I did it"
tags: ['guide', 'networking']
---

I want to play safe (and maybe it's a little bit overkill, anyway) so I configured every device in my home accessible via a web interface, to use only HTTPS.
Today I got a FRITZ!Box access-point, and I was happy to see that it support HTTPS using a custom certificate. Neat!

So I quickly generated a SSL certificate from my pfSense firewall, downloaded the key, and installed to the access-point. Well, or so I hoped. It was giving me an error: 

![Screenshot of the error: The certificate may be invalid](../../../images/blog/20240408-fritzbox-ssl/cert-import-error.png)

Mh... ok, I tried looking to the [documentation](https://en.avm.de/service/knowledge-base/dok/FRITZ-Box-3272-int/1525_Importing-your-own-certificate-to-the-FRITZ-Box/) and my eyes read something that caught my attention:

> The certificate and the private key must both be PEM files. The private key must have been created using the RSA method and it may be password protected.

Out of curiosity I opened the key file that my pfSense firewall generated, and there was only the key _(obviously, duh)_, so something is missing.

In the past I opened PEM files and if I recall correctly, they could contain both certificates and keys. So I did the first thing that came in my mind.


## The solution

I downloaded both the certificate (which contained the public key) and the private key, and I just merged the files together, like this:

```bash
cat certificate.crt > output.pem
cat privatekey.key >> output.pem
```

which created something like:
```
-----BEGIN CERTIFICATE-----
...
...
...
-----END CERTIFICATE-----
-----BEGIN PRIVATE KEY-----
...
...
...
-----END PRIVATE KEY-----
```

and like this I had the PEM certificate that my FRITZ!Box required, and now I have HTTPS enabled! All's well that ends well.
