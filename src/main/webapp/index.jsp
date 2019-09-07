<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Książki</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.5/css/bulma.min.css">
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <style>

    </style>
</head>
<body>


<nav class="navbar is-dark" role="navigation" aria-label="main navigation">
    <div class="navbar-brand" style="margin-left: 5%">
        <img src="static/img/logo.png" alt="" style="height: 130px;">
    </div>
</nav>

<section class="hero has-background-light" id="form">
    <div class="hero-body">
        <div class="container">
            <div class="columns" style="margin-left: 4.5%">
                <div class="column is-narrow">
                    <div class="field">
                        <div class="field">
                            <div class="control">
                                <input class="input" style="width: 400px" type="text" id="title" placeholder="Tytuł">
                            </div>
                        </div>
                        <div class="field">
                            <div class="control">
                                <input class="input" style="width: 400px" type="text" id="author" placeholder="Autor">
                            </div>
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input" style="width: 400px" type="text" id="publisher"
                                   placeholder="Wydawnictwo">
                        </div>
                    </div>
                    <div class="field">
                        <div class="control">
                            <input class="input" style="width: 400px" type="text" id="isbn" placeholder="ISBN">
                        </div>
                    </div>
                </div>
                <div class="column is-narrow">
                    <div class="field">
                        <div class="control">
                            <div class="select is-multiple">
                                <select size="8" id="type" placeholder="Gatunek" style="height: 180px">
                                    <option value="Programowanie">Programowanie</option>
                                    <option value="Beletrystyka">Beletrystyka</option>
                                    <option value="Publicystyka">Publicystyka</option>
                                    <option value="Nauki ścisłe">Nauki ścisłe</option>
                                    <option value="Literatura dziecięca">Literatura dziecięca</option>
                                    <option value="Poradniki">Poradniki</option>
                                    <option value="Biografie">Biografie</option>
                                    <option value="Filozofia">Filozofia</option>
                                    <option value="Historia">Historia</option>
                                    <option value="Sztuka">Sztuka</option>
                                    <option value="Poezja i dramat">Poezja i dramat</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-narrow">
                    <div class="control" style="position: absolute;bottom: 10%">
                        <button class="button has-background-primary has-text-light">Dodaj
                            książkę
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>

<nav class="level has-background-grey-lighter" style="height: 120px">
    <p class="level-item has-text-centered is-size-2" style="font-weight: bold">
        Książki
    </p>
</nav>

<div class="columns is-one-quarter is-multiline is-mobile" id="book-list">

</div>

<section class="has-background-lighter" style="height: 30px">
    <div class="columns is-mobile is-centered">
        <a href="https://bulma.io" style="margin-top: 80px">
            <img src="static/img/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
        </a>
    </div>
    <div class="columns is-mobile is-centered">
        <a href="https://github.com/Joanna026" style="margin-bottom: 13px" >
            <img src="static/img/gitHub.png" alt="GitHub account" width="64" height="12">
        </a>
    </div>
</section>

<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
<script src="static/js/app.js"></script>
</body>

</html>