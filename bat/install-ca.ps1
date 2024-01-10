$cert = "mitmproxy-ca-cert.p12";
$in_cert = $Home + "\.mitmproxy\" + $cert;

# Read the pfx certificate data:
$pfx = (Get-PfxData -FilePath $in_cert -ErrorAction Stop);

# Get the root certificate:
$root = $pfx.OtherCertificates[0];

# Add the root to current user:
$rootStore = Get-Item "Cert:\CurrentUser\Root";
$rootStore.Open('ReadWrite');
$rootStore.add($root);
$rootStore.close();