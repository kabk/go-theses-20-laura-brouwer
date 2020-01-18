let titleBar = $('#title-bar')

$(function() {
    // dropDownMenu();
    changeHeadingOnSight();
});

function changeHeadingOnSight() {
  let titles = document.querySelectorAll('.chapter-title');

  let options = {
    root: null,
    rootMargin: "0px 0px -93% 0px",
    threshold: 0
  };
  let observer = new IntersectionObserver(changeHeading, options);

  titles.forEach(title => {
    observer.observe(title);
  });
}

let changeHeading = (entries, observer) => {
  entries.forEach(entry => {
    let title = entry.target;
    // let title.childNotes
    // console.log(title)

    if (entry.isIntersecting) {
      titleBar[0].innerHTML = title.innerHTML;
    }
  });
};
