(w=>{
	const once=(e,s,c)=>{const x=o=>{e.removeEventListener(s,x);c(o)};e.addEventListener(s,x)},
	ƒ=(o)=>{
		const d=o!==null?o.target:d,
		w=d.defaultView,
		c=w.console,
		debounce=(f,v=300)=>{let e;return o=>{w.clearTimeout(e);e=w.setTimeout(()=>{f(o)},v)}},
		swapClass=(x,a,b)=>{const e=x.classList;e.remove(a);e.add(b)},
		Html=d.documentElement,
		Body=d.body,
		ƒR=[],
		ƒS=[],
		ƒB=[];
		let x=Body.classList;
		//
		c.clear();
		c.info('%O %s %O',w,'loaded',o);
		//
		if(x.length!==0){
			if(x.contains('listen-scroll')){
				c.info(' detect eos (end of scroll)');
				const eos=(s)=>{
					c.info(s,'(eos)');
					swapClass(Body,'reached-top','reached-bottom');
					const m=ƒB;
					for(const i of m){i(o)}
				};
				let Y=w.scrollY<<0;
				//
				ƒR[0]=o=>{
					c.log('resize! callback:',0,'update?')
				};
				//
				ƒS[0]=o=>{
					const y=w.scrollY<<0;
					c.log('scroll! callback:',0,'y | prev:',Y,'curr:',y);
					if(y!==0){
						if(y!==Y){
							if(y>Y){
								if((Html.scrollHeight-(y+Html.clientHeight))!==0){
									c.info('scrolled: down')
								}else{
									eos('reached: bottom')
								}
							}else{
								c.info('scrolled: up')
							}
						}else{
							eos('is: bottom')
						}
					}else{
						swapClass(Body,'reached-bottom','reached-top');
						c.info('reached: top')
					};
					Y=y
				};
				//
				if(x.contains('scroll-is-infinite')){
					let requesting=false;
					ƒB[0]=o=>{
						if(requesting){
							c.log('eos! callback:',0,'loading data');
						}else{
							requesting=true;
							c.log('eos! callback:',0,'load data');//append more contents
						}
					};
				}
			}
		};
		//
		x=(s,m)=>{if(m.length!==0){w.addEventListener(s,debounce(o=>{c.info('%O %s %O',w,o.type,o);for(const i of m){i(o)}}))}};
		x('resize',ƒR);
		x('scroll',ƒS);//touchmove?
		x=null
	};
	if(w.document.readyState!=='complete'){once(w,'load',o=>{ƒ(o)})}else{ƒ(null)}
})(window);
