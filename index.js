$(document).ready(function() {
    hideAllTabs();

    var inProcess = "inProcess";
    var todo = "toDo";
    var done = "done";
    var tabIds = [inProcess, todo, done];

    tabIds.forEach(id => registerTabClick(id));

    fillTab(inProcess, GetAllInPoccessBooks());
    fillTab(todo, GetAllToDosBooks());
    
    showTab(inProcess);
});

function getBookHtml(book) {
    const html = `
    <div class="book">
        <img class="book-image" src="${book.imagePath}"/>
        <div class="book-description">
            <div class="book-author">${book.author}</div>
            <div class="book-age">${book.publisher} - ${book.age}</div>
            <div class="book-link">
                    Link : <a href="${book.link}" target="_blank">Link</a>
            </div>
            <div class="book-page">Progress : ${book.progress}/${book.totalPages} </div>
        </div>
    </div>
    `;

    return html;
}

function fillTab(tabId, books) {
    books.forEach(function(book) {
        var tab = $(`#${tabId}`);
        var html = getBookHtml(book);
        tab.append(html)
      });
}

function registerTabClick(id) {
    var menuId = '#tab-'+id;
    $(menuId).click(function() {
        $(".menu > div").removeClass();
        $(menuId).addClass("clicked");
        hideAllTabs();
        $("#"+id).show();
    });
}

function hideAllTabs() {
    $(".tab").hide();
}

function showTab(tab) {
    $("#tab-"+tab).click();
}


class Book {

    WithImage(imagePath) {
        this.imagePath = imagePath;
        return this;
    }

    WithAuthor(author) {
        this.author = author;
        return this;
    }

    WithPublisher(publisher) {
        this.publisher = publisher;
        return this;
    }

    WithAge(age) {
        this.age = age;
        return this;
    }

    WithLink(link) {
        this.link = link;
        return this;
    }

    WithTotalPages(totalPages) {
        this.totalPages = totalPages;
        return this;
    }

    WithProgress(progress) {
        this.progress = progress;
        return this;
    }
}

function GetAllInPoccessBooks() {
    const fSharp3_book = new Book()
        .WithImage('images/Fsharp3_0.png')
        .WithAuthor('Chris Smith')
        .WithPublisher('O’Reilly Media')
        .WithAge(2012)
        .WithLink("https://www.amazon.com/Programming-3-0-Comprehensive-Writing-Problems/dp/1449320295/")
        .WithTotalPages(474)
        .WithProgress(347);
    
    

    const fsharp_ddd_book = new Book()
        .WithImage('images/ddd-f-sharp.jpg')
        .WithAuthor('Scott Wlaschin')
        .WithPublisher('Pragmatic Bookshelf')
        .WithAge(2018)
        .WithLink("https://www.amazon.com/Domain-Modeling-Made-Functional-Domain-Driven-dp-1680502549/dp/1680502549")
        .WithTotalPages(312)
        .WithProgress(90);

    return [fSharp3_book,
        fsharp_ddd_book];
}

function GetAllToDosBooks() {
    const fSharp3_expert_book = new Book()
        .WithImage('images/Fsharp3_0_expret.png')
        .WithAuthor('Don Syme')
        .WithPublisher('Apress')
        .WithAge(2012)
        .WithLink("https://www.amazon.com/Expert-3-0-Experts-Voice-Syme/dp/1430246502/")
        .WithTotalPages(638)
        .WithProgress(0);

    const architecture_modern_web_app_book = new Book()
        .WithImage('images/architecting-modern-web-applications.png')
        .WithAuthor('Steve Smith')
        .WithPublisher('Microsoft Corporation')
        .WithAge(2019)
        .WithLink("https://dotnet.microsoft.com/learn/web/aspnet-architecture")
        .WithTotalPages(119)
        .WithProgress(0);

    const dotnet_microservice_architecture_book = new Book()
        .WithImage('images/dotnet-microservices-architecture.png')
        .WithAuthor('Mike Rousos, Bill Wagner')
        .WithPublisher('Microsoft Corporation')
        .WithAge(2019)
        .WithLink("https://dotnet.microsoft.com/learn/web/microservices-architecture")
        .WithTotalPages(333)
        .WithProgress(0);
    
    const impact_mapping_book = new Book()
        .WithImage('images/impact-mapping.jpg')
        .WithAuthor('Gojko Adzic')
        .WithPublisher('Provoking Thoughts')
        .WithAge(2012)
        .WithLink("https://www.amazon.com/Impact-Mapping-software-products-projects-ebook/dp/B009KWDKVA")
        .WithTotalPages(86)
        .WithProgress(0);

    const designing_distributed_systems = new Book()
        .WithImage('images/designing-distributed-systems.png')
        .WithAuthor('Brendan Burns')
        .WithPublisher('O’Reilly')
        .WithAge(2018)
        .WithLink("https://www.amazon.com/Designing-Distributed-Systems-Patterns-Paradigms/dp/1491983647")
        .WithTotalPages(165)
        .WithProgress(0);

    const designing_data_intensive_applications = new Book()
        .WithImage('images/designing-data-intensive-applications.jpg')
        .WithAuthor('Martin Kleppmann')
        .WithPublisher('O’Reilly')
        .WithAge(2017)
        .WithLink("https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321")
        .WithTotalPages(616)
        .WithProgress(0);

    const js_book = new Book()
        .WithImage('images/lrg.jpg')
        .WithAuthor('David Flanagan')
        .WithPublisher('O’Reilly Media')
        .WithAge(2011)
        .WithLink("http://shop.oreilly.com/product/9780596805531.do")
        .WithTotalPages(1098)
        .WithProgress(149);

    const sql_book = new Book()
        .WithImage('images/51aWutP-3oL.jpg')
        .WithAuthor('Itzik Ben-Gan')
        .WithPublisher('Microsoft Press')
        .WithAge(2012)
        .WithLink("https://www.amazon.com/Training-70-461-Querying-Microsoft-Server/dp/0735666059")
        .WithTotalPages(752)
        .WithProgress(459);

    const patterns_book = new Book()
        .WithImage('images/patterns.jpg')
        .WithAuthor('Bert Bates, Eric Freeman')
        .WithPublisher('O’Reilly Media')
        .WithAge(2009)
        .WithLink("http://shop.oreilly.com/product/9780596007126.do")
        .WithTotalPages(688)
        .WithProgress(0);

    const dive_into_design_patterns = new Book()
        .WithImage('images/dive-into-design-patterns.png')
        .WithAuthor('Aleksander Shvets')
        .WithPublisher('refactoring.guru')
        .WithAge(2019)
        .WithLink("https://refactoring.guru/design-patterns/book")
        .WithTotalPages(410)
        .WithProgress(0);

    return [
        fSharp3_expert_book, 
        architecture_modern_web_app_book, 
        dotnet_microservice_architecture_book, 
        impact_mapping_book, 
        designing_distributed_systems, 
        designing_data_intensive_applications,
        js_book, 
        sql_book, 
        patterns_book,
        dive_into_design_patterns];
}