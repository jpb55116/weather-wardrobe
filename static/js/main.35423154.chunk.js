(window["webpackJsonpweather-wardrobe"]=window["webpackJsonpweather-wardrobe"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),i=a.n(o),c=(a(13),a(1)),s=a(2),l=a(4),h=a(3),u=a(5),m=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e,t="",a=this.props.weatherID.toString().split("")[0];return e=this.props.lowTemp>75?"T-Shirt":this.props.lowTemp<=75&&this.props.lowTemp>60?"Long Sleeve T-Shirt":this.props.lowTemp<=60&&this.props.lowTemp>50?"Sweatshirt":"Quarter Zip",500!==this.props.weatherID&&501!==this.props.weatherID&&"3"!==a||(t="Light Rain Jacket"),"2"===a&&(t="Rain Jacket"),this.props.lowTemp<35&&(t="Down Winter Coat"),r.a.createElement("div",{className:"card",style:{alignItems:"center"}},""!==t?r.a.createElement("div",null,r.a.createElement("h1",null,t),r.a.createElement("h4",null,"&")):"",r.a.createElement("h1",null,e),r.a.createElement("h4",null,"&"),this.props.lowTemp>65?r.a.createElement("h1",null,"Shorts"):r.a.createElement("h1",null,"Pants"))}}]),t}(n.Component),p=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e,t=this,a=new Date,n=new Array("Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday")[a.getDay()],r=function(){var e=a;return/1/.test(parseInt((e+"").charAt(0)))?"th":1===(e=parseInt((e+"").charAt(1)))?"st":2===e?"nd":3===e?"rd":"th"}(),o=e+(a.getDate()<10)?"0"+a.getDate()+r:a.getDate()+r,i=new Array("January","February","March","April","May","June","July","August","September","October","November","December")[a.getMonth()];e=n+", "+i+" "+o,fetch("http://api.openweathermap.org/data/2.5/weather?q=denver&APPID=66ac02b03ce1fdbb4ebcea5949ecc717&units=imperial").then((function(e){return e.json()})).then((function(a){console.log("THIS IS YOUR DATA",a),t.setState({conditions:a,date:e})})).catch(console.log)}},{key:"render",value:function(){var e,t,a;return this.state.conditions?(a=this.state.conditions.weather[0].id,e=this.state.conditions.main.temp_max,t=this.state.conditions.main.temp_min,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h5",{className:"card-title"},"Today's Date: ",this.state.date),r.a.createElement("h6",{className:"card-subtitle mb-2 text-muted"},"What should I wear today?"),r.a.createElement("h5",null,"Today's Conditions in Denver"),r.a.createElement("h6",null,"High: ",e,"\xb0F"),r.a.createElement("h6",null,"Low: ",t,"\xb0F"),r.a.createElement(m,{highTemp:e,lowTemp:t,weatherID:a})))):r.a.createElement("h1",null,"Loading")}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},8:function(e,t,a){e.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.35423154.chunk.js.map