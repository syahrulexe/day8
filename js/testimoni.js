// METODE CALLBACK AND HOF

const testimonialData = [
  {
    author: "Abel Dustin",
    quote: "Jagalah Kebersihan",
    image:
      "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 5,
  },
  {
    author: "Cintara Surya",
    quote: "Keren cuys!!",
    image:
      "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 4,
  },
  {
    author: "Soeharto",
    quote: "The Best Pelayanannya!",
    image:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYWFRgWFhYZGRgaHBgaGhgYGhwaGhwYGRgaGRkYGhocIS4lHB4rIRoYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMBgYGEAYGEDEdFh0xMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMTExMf/AABEIAKgBLAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAD0QAAEDAgQDBAgFBAEEAwAAAAEAAhEDIQQSMVEFQWEGInGBEzJSYpGhsfBCgsHR4RQjcvGyB1SSohUzU//EABQBAQAAAAAAAAAAAAAAAAAAAAD/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwDMuKe1yhc5Oaglzrg5RhKEEmZLmTQnQgcwqQFRAJyCQuXF4GpA8UN4jxLICG3dp0E79bFUKWGa4h+Je5rTMNF6jjlJbA/C0kanpaCCgI1+JAg5Lgaug5RcCZ2uN/BUX8Vc0XyvcQMpZoJ1DpEkjSLIdVxDnMawwGMJLQBFyACTuTAv/CgII5QgsVsa55GdzgLBwHzgJ/p3sLgysS3lc94G47h0O+11TJm5SILtDHublDmte0EugjLMiCC5sGPPktT2Zx4exwgNIPqibA3ETeOXksTCkpVXMcHNcWkcwUG5447+2UAquOQCQFXfxpz2ZHi/tDn4hJUeMoi6CKT7aIYn1BfzQsG/qIhjj3G28kFA5vaCjh27UriPZKacuxQdfp8lIxp2Ci7vVKS3coJmsd7AKcamXVgTKeSLvIVeqfelBYqYgEWYqz39F1OLyU3zQPp3Oic1t9Eym6CnisdJQQ1GiVEQp3lRoI4StKWFwCBwf1Ugd1UMJQEErvFMUgB2TEGlcU4OTHJzQge0qVjeaRrYCkagSE4BcSlQKFKKBLHPFmt1cfVBiY6noLqpiHk9xkyQXHKA5wY0XLWkiToI/ZD+JYwh7MkZQBDcxcD77gbtcYEgyRESQAgrY2oWOILZJOaHDkHHJnboRqeVjCrmkTlc9xAIEONzDRADRMmwaFZpUwBnIzOzNvM+Xx/VVqpdUfJ/gAT8kFUuvb5rmsJ1+JVxmH+XxN1Yp4B7h6pO3hOvzQDC265lMmAtHg+zT3QXWBE/x43RmhwVjORJv9+AQYtmEcdN/wDSa7DEajz6LcVcK3k3yVCpgQQRACDHuYORTWvIRPFYYsJAGtuvkhjxCCZjhIur2PeYF40Q6ge8Fdx7tLIKn5k4T7QTAfdCT8qB8HcJIO4XCPZKSBsUCkHokc0nkFxDeqTu7lAhpGNEhpnZSNy7ldA9ooIQCkKLcLoNdM3sqGLphryAghJEDdNSkJWMlA1JlUwpncJ4B6IIQE4AbqW+wXCdggjtukI6qUz7IXflQH05jLpSFLQHeEoHBic1SOp/YTcsIEXPcACToBKbmUb3iZd6jbu0JkghgAdZ3evB1DSgixmUMLSYewioXssWvcIa3MTMNFu6L2OoQdjC90BpLi6/KzbRA0srAwpLQCSSSbmQGyZMA6TA+C2nZLsux5z1BpBHIETfxkIADcKzJGYu5tMEXdY3O0JeF8FDpDhGoNuloP6dFvOO4djjJAt3QABYbobREWA/nxQU6PBmNblIm2p+XmrlPCtB0H3+isgbqZrNkCNZ0so3sk28FdbTJSuw3mgGvpjSEOxGF1ICOvpDzG+/gq1RkifkgyHFMLILgLj7nxCyuIpkG/PmvQsZSj5rG8WoZSY0lAJYYKuY0ght7QqhSsdaEHADdd+ZOnoEnkgUf5KQAgTmCh/KnE+6ge8O3Cac3RNtsUgA2KCTvbBKJ9kKPu9UoA3KAxwgWdIhUsQ0l57s3V3hTe666pPd3ic3PT5IIHsj8CjMeyVLUds/4qMz7SBttiu7vVOv7QXd7cIG93qutuUt+i6D0QIY3KW26WDskvsEGiaVOx11VBUrHILBcml6QFMKB8odiqhgMlxe92fIJECIYD1IvHvKfFYsMy93MTNiYFo13HSyoYbGEOL/AMZcXdBMzAPmEBfheFmuxj7we9BgDcDfx5r0F1drSWtMNF5H08l5zwitNUvm/wBOl+X7LTf1dpJ/39wgL4mpIiSeWY6lVaesD4/eqpCuXc1cpnSN9UFpjLyiFOhpyVfD0gjNGnN+nzjT4IObw+Og/jVK/DRe/wDCK06jXNk7Jj3BzbCDHhdBncSwx5oc5h3CNYmgbqm7CxNkGbxDO8Ry+izvFsKSDz1+X2FtsVgucwUAxFMh5aRc6dY5IPP3NgkFTYXCZybwGjMTr8kV43gY74HiouBtJcWASXFvwaS4/wDFAKr0yxxadR9ORTWkLV9scA3JSxDBY/239DEtP1HwWSQSQN0se8kE7BLB2QJB9pLf2kke6u/KgeJ3CWHdFHbYrsw6oDnDTDDIQqo45jYIpgDFIoO8iTcoHfkC5w9xMBHtFKT7yBLeykMbFOn3l1/aCBltiuEdU6TuEt+iBvd3K625TpPRJB2CA6NU9jwomPT3FBM0rkxpUhKCtjWnIcuu1oNxugj3Eo89zg4EaIXxHD5XZh6p68ygdgK+SdJt9/P6I7QxeYFZZhvbmr+EroNVhaoRHD1v0+4QHDVBbb7/AIRjBgE7oD2HdcIxh3GEGwzdFouHUwQZ0hAmFnQk68zp4K1T7jt/hbxXMe0c1BjcUzRpEjb9kFnEtZlLi4AbFYvjHaNjCWsBcdxou4piy6QTPRRcOwbAQ9/kP1KAfTfVqw9wcwQYzCPPeFUrMOaRMtv8NFpeJ8TpsZmm2gyiRblOnzWfHFqVTNBjncbdQSgrY6mHNLeio9iqIGJcHDRroHiQJ+B+aJ1pec0WnTmZ08ALeKqYWsMPiWvI7ru6/wADF/IwfJAc43hR6DE0iJGQ1GdC0gn5gLy4hez8Th0x/wBvUzfmPd+hPkvF0CtTrblKxhGycZ2CBn5lwPvJ19guj3UCGfaS33C4D3UlvZKA3hv/AKboM4nYIwwRRtsgpy9UDhOwXX9lIA3cpQB7RQJPurj/AIpYHtJfzIIzHslJbYqQz7S6+4QMhvVdA3Kffokv0QF2KRRsTkE7SlCia5StcgcAmV8LnB+7pzXJ7XIM7WblcbRH3ZJQqQQinFcO3LnDhNgRedOXKEHZqEGmwDwQAtJhWhokmAshRdlAOxHw/hEMPVdWOW48Dog0b+0dNlgC87BLh+0T3n1crfG67hnZ+i25lx946eSl4m2hTtLQf8vlCC5R4tOpVr0+ZtgsXVqAnuTGy0XZ3EXynQgf7QVcc/Kcx1koNi8Y97gxs31An4kDUdFq+J8NaXw+csjTbooKvAC29Em+ptJA0goM9Q7KPfL8RWho9UHmJ8e74BX8BwClLiwFwFs0a+A/VEMNwJ7jNTMQNcz/ANLrTcOYIyhsDaZQZ5uBytvp1QXjXDZaSNRotziKESguNoQCYQCuHYvNhKhk5xSLXTuwOb9IPmvMVv6tYU6OIbMes5v5hlI+I+awJCBWkbJbdU5rY5hLfcIGW3K626kg9EkHYIGz7y4f5J0H2QkH+KAu4kUfJCgTuESxJimB0QqBsUEl+ibfYJpjqutuUDpPspD/AIpIG5S5feQNt7K62xUtKkXENBuU51FwJBOiCAxsUluqmg7pIPRAUaE+FzGyrDcOghaFIFO2gpP6dBWlOaVI+hCjaIQV+IM7s7frugbgNVrvQB4InUIPiuGGkS4jM0Brvyu0J+nkgfTpuhsiZAI8DrG/h0RHA1W05dqNZGo8YV1rKb6bWBuXKAbdevw+KrUeGtzTAP8AlJv1nVBD/wDMYis7JRBAPPmfPkrZ4AGtD8RVe5/sA2A+Mz0CO8N4Ps/JOpaA353VxvZ1ma7nH3ib+AnTxQC+BYBk5msM8gXEjxI3V9zAMRDbCJjz/dGP6UMZlYIANo6cwgtR/wDckG8xHzQaDEUc7A7Xkf5VOlLTBJ+qIYY5qTuR1QusyTCAyGiACfgpqT2MvN0DxDYZLhPy+fJAxSqludlQtJEhjyXNIN/W1HzQbGrWBQziJBafD5rOUu0JY/JWbld8WnwKvPxweJEoMrx6nmYdxf4LJgXW3xbZDp6rFxdAse6kgbJ3ml/MgjgbFJA6qUzuuv0QRGNylbqLp99gtWOxzvRNe17S+xLYt4B3LzQBMce4LoZf2kS4k2BBFxYjYhD2MkgBpJOgFyfAIEvuF3e6LScK7JOeQap9G07XcOpGgC7jHZT0DHP9Jmy6tLcst5uaZuEGc72wXSfZCbbcroG5QGOyonFUx6PPJIy+LTe9rarT8W4FbEPdTyQS62gEAyFjuD4t9Gsyox3eaZE3F7EHoQSFruI9pKz6TwS3+4INtBEEDyQYQMcScoJSd5XcM8tcYVbEVO8UBigrgQ9hUvpSguscpAUPbWKd/UFAQJshmNcBBa7xU3pyhz3AkoJcPXeUe4U/0zCwx6QBwbm0ex2rD12/lCMEwZUjsS1rpDoIQWsI6Hupus5ndIPSw+iKYU3AQrE1S9zcQ3lDakRcHR/XT5K9hq8O6cvDkg2GAqaIsMU0CYErO4WtA6KLinE8jCQgn4rxuXFjTDRZxHX8KrGm1zQ4QCNv1Q3Dhpp5XCS67upOv30Qirh8TTP9p+dvIGM0bHdB6LwXFNBh2n2FFxWqxsvzW3Nl5zR7Q1qToe0jxkfXVWcO+txCoKbcwYDNRw0Df1OwQFqmPqYx5YyWUQYc/m/drdh1RLE1wxoaDGw/ZJjMVQw7AxpAawQA2/xO6ynFuMPfZjSJsPaM/fzQExRZXflcMw5xr8RoiXD+HZKZBJMTBdrCXgfB/RUgZlzruJ59B0RLGva2mfBBl6jC7ujV7g0eLjH6qlxTsPiaIL2AVWDmycw8WG/wlPr8RNN1Nw1D2u+DpXrNB+YAjmAfjdB4C5p9lNLfdXuPFez+GxIJfTbm9tvdeD/kNfNYziP/AE4eJNCtPu1BH/u39kHn5HupsDYotxTgGJw96lNwaPxjvM/8myB5whYndAy3VbLgnHO4GudfS6zeA4dUquysjqToPvZbfhXA6NAAuIc/XMR/xbyQV8TwZuJgwWc8wEE+X7orgeD0qDe60A83G7j5n6BWTibdxjj8vqs/x3G4lrSWUyRqXbeWpQE8bxRjGmSPOFm+0PHW4hga2WmBnPJxHOOsDXZZ1+Mc8y+56/dlG83QMv0Xd7YKOB1SiOqCWm4ggwiOJqksA3Qk9CrT3mGoGAFpBCfUe2fVVzCUxOYmeiq4gMLiUFtuiWUgKQlAspU0JwQSTZUQdVcc6xQ1j7oC2Gd3ULfQ7zjKn9PAhXuB8Hq4lzm022nvPNmN8Tv0F0FXhlR4GVombEagj75q+x4EZSDFpGkjbcaXWq4n2TbRwb20yXVRDnP0LgPWa0chHLovP8HisroPqmPIhBqKHEDEKpj3vqOawC2pnSBfVVQ7KZ5brRcMax7RpPRAEdiSz17R805nGWAXv4I/iOEsqHJUEi8HTzkc9FnuK9mRTM03mPe5+fL5oLA4xn7jKRqW9Usz23yxoitJmMNNuSmKdOo5jR6rA3O4NBLW3AkpOzwewMHpabTTdIOXvEOaQWE+yCfkEdbxPEu/tZGHM5wzscTAkljgwi505oIKXZCkyX1nekdDcmZ2VheXerHIEwOeqr8VbTzlxZlfN7juNAy5BFiTAPwV+t6RjC7EVml0WJaAQW//AJtFwSeZ6XQPDg16ogHLNgd9yg0ZYfRg7xA2HJA+N1IZG62FWgAwDbT78l572oxYBI2QZjHVc1SOQt5r2/hbCKbAfYb/AMV4z2Z4ecRiWM5F2Zx2aLk/e69wYyPv9kDRZ/Q6qUidEx7Z+9/9KzQbaUEbqIIuJWc4j2KwtUk5MhP4mdz5eqfgtWQo3hB59wrgwY91M9z0ZI0uQdHZtDIg+amxuBYx+ZhMEd6STLp3KvdsXuY5hog+ndqZhgpt1L520HPXZeb8Y49We8j0gcBaWiATzidfFBvaWLkd0t2N1XrYkwZAiYB3tf8AT4rMcD4JVqw57ntab5QSCepPJbOjgGU2gDQfU6+aDy/jmDyVDAhrjLf2VQr1Hi2BZWplhGuh5g7g+K82x+EdSe5jhcfMciEFQA7hLfokyjYpIHVBz52ClrGIHRMYwEiFZxzO9HRA01IaIVR75MpWG8Jr6RlAVlISklNJQPlOaVECr2C4dVqn+3Te/qAcv/kbIIHu7pVPBYR9R+Smxz3H8LRPmdh1K3PC+xFR5/vnI3m1pBeek6N8b+C2+B4XToMyU2NY3Zup6ucbuPiUGI4J2EEh+JMxB9Ew2/O8fQfFb/C0msYGta1jG6MYAB8lEXchorTDaEFau+3ivNO2nC2MqCoZHpATDQBoYnxK9Oe0E6fY+ygXbnhHpcPLB3qfeAHMAQR80HnmFYKgdkbGRokEyXDfxsuwmLLHAg2Vjs9TIZWebNEAk9Af3QF7y3TTZB6FhcYHgEG3KFar4XOzK/1TZjxvsV59w7iRYZafFv7Lb8I4w14ibbbdUAjE4StSdu3keSt0OI4mMrbf4i/x1Wmp5H23sp6eDAkgfz1QZvDcNqVDL5vqSZN1reD8KZTEm5+/uFGcWGez4nXqIUGI4tAu8Wv3f3QW+N41rAb6Lx7jeLzvO0rQ9peNZpa03KyVCiXvaxur3Bo8XGB9UHpf/TLg+Wk7EOHeqHKz/BupHifotxEFN4XhG0qTGNHdY0NHgBH34qapqgiJVmj4+RUbm2Pn9/JLQN/L6f7QWCFC53x+4UomFRx9bIxzjr+Ee8bD5oPMu3/Giaz6bLQAxzt2jVo/NmQXsv2efiXl05WM/ERq7UNH6r0DHcAw9VjfSMuB64MO+Wqp08e3BUnMLP7TTDXCA4g3DXAmSdyAgne9uHp94gGJJKB4LilbEOIpMAZN3v0joBqUCxuOrY+sGMaYJsxvJo5leg8KwQoUW5gG2EDp1QQU+Fm2d2c6y6Ino0WCBdreDue2W+sz4kcwrmM7UsD8jO86YB5aXJ6D9ERp41j25QS4xrBknmYHWUHkhB3SHNuF6BiuzbK73MADKhGam4ggO5ljx8wdRB8FisdhDSe5lRjmPbqD9RuOqCHDzN1bxz2+cKgKgaZAPmnPxDTqEDaNPmpsqYzEt2S+nagmRPg3Aq2JdDG93m91mDz5noFy5BvOEdj6FK7h6V41Lh3AejdPjJWlZRgRy2C5cgkBA/ZRVzIXLkEbGqVjrnySLkD6YunVXff34/JcuQZrivZJlRhbTJpkuL4HqOcR+IeQXnvGuAVqE52GPaF2nzXLkGe0KvYbFOaZBvuFy5BoMD2gc2JRdnaJrvWcfj93SLkED+OsEkuzbXmEGx/Gi+wXLkAl5m51Wh7A8LNXFB/4KXfJ94yGD4yfyrlyD2gNgQo6mq5cgcPv781DQNx4x8Vy5Bccs/2jqHMxni7zEAf8j8Fy5B1CmCBzXmXbnGvfiXMc0tbTMNbv7/WfouXIDPY57MLQdWqU3tzH1yBEfh5yB5XKF9pe1rqvcpS1mk846LlyBOzOAq0wK+RxBFi27gOrdbr0Hh/Eg8DNmYfea5v1ELlyAV2sd6NgqMPeBaWuHtA5hfxCJ9o+DNxNIPLB6VrZFrm0uZ9Y6+K5cg84OEpz6oVTG8PYfUaB1XLkFJuBbE8wu/ombrlyD//Z",
    rating: 4,
  },
  {
    author: "Dandi Cuy",
    quote: "The Best Pelayanannya!",
    image:
      "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    rating: 1,
  },
];

function allTestimonials() {
  let testimonialHTML = "";

  testimonialData.forEach(function (item) {
    testimonialHTML += `<div class="testimonial">
                            <img
                                src="${item.image}"
                                class="profile-testimonial"
                            />
                            <p class="quote">${item.quote}</p>
                            <p class="author">- ${item.author}</p>
                            <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                        </div>
        `;
  });

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}

allTestimonials();

function filterTestimonials(rating) {
  let testimonialHTML = "";

  const testimonialFiltered = testimonialData.filter(function (item) {
    return item.rating === rating;
  });

  //   console.log(testimonialFiltered);

  if (testimonialFiltered.length === 0) {
    testimonialHTML += `<h1>gada</h1>`;
  } else {
    testimonialFiltered.forEach(function (item) {
      testimonialHTML += `<div class="testimonial">
                                <img
                                    src="${item.image}"
                                    class="profile-testimonial"
                                />
                                <p class="quote">${item.quote}</p>
                                <p class="author">- ${item.author}</p>
                                <p class="author">${item.rating} <i class="fa-solid fa-star"></i></p>
                            </div>
                        `;
    });
  }

  document.getElementById("testimonials").innerHTML = testimonialHTML;
}


// METODE OOP

// class Testimonial {
//     #quote = "";
//     #image = "";
  
//     constructor(quote, image) {
//       this.#quote = quote;
//       this.#image = image;
//     }
  
//     get quote() {
//       return this.#quote;
//     }
  
//     get image() {
//       return this.#image;
//     }
  
//     // This is an abstract method that subclasses will implement
//     get author() {
//       throw new Error("getAuthor() method must be implemented");
//     }
  
//     // This is a polymorphic method that can take any subclasses of Testimonial
//     get testimonialHTML() {
//       return `<div class="testimonial">
//                   <img
//                       src="${this.image}"
//                       class="profile-testimonial"
//                   />
//                   <p class="quote">${this.quote}</p>
//                   <p class="author">- ${this.author}</p>
//               </div>
//           `;
//     }
//   }
  
//   // Subclass
//   class AuthorTestimonials extends Testimonial {
//     #author = "";
  
//     constructor(author, quote, image) {
//       super(quote, image);
//       this.#author = author;
//     }
  
//     get author() {
//       return this.#author;
//     }
//   }
  
//   // Subclass
//   class CompanyTestimonials extends Testimonial {
//     #company = "";
  
//     constructor(company, quote, image) {
//       super(quote, image);
//       this.#company = company;
//     }
  
//     get author() {
//       return this.#company + " Company";
//     }
//   }
  
//   const testimonial1 = new AuthorTestimonials(
//     "testimonial1",
//     "author pertama",
//     "https://mmc.tirto.id/image/otf/500x0/2017/11/07/soeharto--life_ratio-16x9.JPG"
//   );
//   const testimonial2 = new AuthorTestimonials(
//     "testi2",
//     "author dua",
//     "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   );
//   const testimonial3 = new CompanyTestimonials(
//     "toyota",
//     "ketiga",
//     "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
//   );
  
//   let testimonialData = [testimonial1, testimonial2, testimonial3];
//   let testimonialHTML = "";
  
//   for (let i = 0; i < testimonialData.length; i++) {
//     testimonialHTML += testimonialData[i].testimonialHTML;
//   }
  
//   document.getElementById("testimonials").innerHTML = testimonialHTML;