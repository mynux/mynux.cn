<!DOCTYPE html>
<html lang="en">

<head>

    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Mynux 在线免费工具平台</title>

    <!-- Bootstrap Core CSS -->
    <link href="/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom CSS -->
    <link href="/css/heroic-features.css" rel="stylesheet">

    <!-- HTML5 Shim and Respond.js IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
        <script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>
        <script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>
    <![endif]-->

    <!-- jQuery -->
    <script src="/js/jquery.js"></script>

    <!-- Bootstrap Core JavaScript -->
    <script src="/js/bootstrap.min.js"></script>

    <!-- Crypto Algorithms JavaScript -->
    <script src="/js/cryptoJS/md5.js"></script>
    <script src="/js/cryptoJS/sha1.js"></script>
    <script src="/js/cryptoJS/sha256.js"></script>
    <script src="/js/cryptoJS/sha512.js"></script>

    <!-- Customer self-defined js functions -->
    <script src="/js/mynux.js"></script>

</head>

<body>

    <!-- Navigation -->
    <nav class="navbar navbar-inverse navbar-fixed-top" role="navigation">
        <div class="container">
            <!-- Brand and toggle get grouped for better mobile display -->
            <div class="navbar-header">
                <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <a class="navbar-brand" href="/">Mynux</a>
            </div>
            <!-- Collect the nav links, forms, and other content for toggling -->
            <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="#">工具</a>
                    </li>
                    <li>
                        <a href="#">教程</a>
                    </li>
                    <li>
                        <a href="#">关于</a>
                    </li>
                </ul>
            </div>
            <!-- /.navbar-collapse -->
        </div>
        <!-- /.container -->
    </nav>

    <!-- Page Content -->
    <div class="container-fluid">
        <div class="row">
            <div class="col-lg-8">
                <form>
                    <div class="form-group">
                    <label for="string-to-sign">待签名串(Plain Text):</label>
                    <textarea class="form-control" id="origin-str" rows="3" ></textarea>
                    </div>
                    <div class="form-group">
                    <label for="signature-algorithm">签名算法(Signature Algorithm)：</label>
                    <select class="form-control" id="algorithm-names">
                      <option>请选择</option>
                      <option>MD5</option>
                      <option>SHA1</option>
                      <option>SHA256</option>
                      <option>SHA512</option>
                    </select>
                    <label for="signature-result">签名结果(Result)：</label>
                    <input type="text" class="form-control" id="sign-result" placeholder="">
                    <script>
                        /* signature trigger for select changed event */
                        $('select').on('change', function (e) {
                            var optionSelected = $("option:selected", this);
                            var algorithmSelected = this.value;
                            var origin_str = $("#origin-str").val();
                            var hash = doSignature(origin_str, algorithmSelected);
                            $("#sign-result").val(hash);
                        });

                        /* signature trigger for input text area changed event */
                        $('textarea').on('input', function (e) {
                            var algorithmSelected = $("#algorithm-names option:selected").text();
                            var origin_str = $("#origin-str").val();
                            var hash = doSignature(origin_str, algorithmSelected);
                            $("#sign-result").val(hash);
                        });
                        
                    </script>
                    </div>
                </form>
            </div>
            <div class="col-lg-4">
                <div class="panel panel-success">
                    <div class="panel-heading">
                            <span class="glyphicon glyphicon-question-sign"></span> 数字摘要与签名算法
                    </div>
                    <div class="panel-body">
                        数字签名通俗的讲就是网站上一篇原创文章的作者为了防止别人盗用自己的文章，利用自己拥有的一个私钥串对文章进行哈希计算，生成的结果就是唯一标识作者身份的签名。
                        <div><a href=" https://en.wikipedia.org/wiki/Digital_signature">维基百科词条: Digtial_Signature</a></div>
                    </div>
                </div>
            </div>
        

    </div>
    <!-- /.container -->


</body>

</html>
