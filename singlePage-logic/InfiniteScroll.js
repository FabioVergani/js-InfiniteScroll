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
				let Y=w.scrollY<<0;
				//
				ƒR[0]=o=>{
					c.log('resize! callback:',0,'update?')
				};
				//
				const ƒS0=o=>{
					const y=w.scrollY<<0;
					c.log('scroll! callback:',0,'y | prev:',Y,'curr:',y);
					if(y!==0){
						if(y!==Y){
							if(y>Y){
								let e=Html;
								e=e.scrollHeight-(y+e.clientHeight);
								if(e!==0){
									c.info('scrolled: down')
								}else{
									swapClass(Body,'reached-top','reached-bottom');
									w.removeEventListener('scroll',debouncerƒS);
									c.info('reached: bottom');
									const m=ƒB;
									for(const i of m){i(o)}
								}
							}else{
								c.info('scrolled: up');
							}
						}
					}else{
						swapClass(Body,'reached-bottom','reached-top');
						c.info('reached: top')
					};
					Y=y
				};
				ƒS[0]=ƒS0;
				//
				if(x.contains('scroll-is-infinite')){
					ƒB[0]=o=>{
						c.log('eos! callback:',0,'append more contents');
						//...
						//w.addEventListener('scroll',debouncerƒS);
					};
				}
			}
		};
		//
		x=(s,m)=>{
			let f=null;
			if(m.length!==0){
				w.addEventListener(s,f=debounce(o=>{
					c.info('%O %s %O',w,o.type,o);
					for(const i of m){i(o)}
				}))
			};
			return f
		};
		x('resize',ƒR);
		const debouncerƒS=x('scroll',ƒS);//touchmove?
		x=null
	};
	if(w.document.readyState!=='complete'){once(w,'load',o=>{ƒ(o)})}else{ƒ(null)}
})(window);