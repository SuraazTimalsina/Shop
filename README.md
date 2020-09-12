    tester =() =>{
        console.log('State products:',this.state.products[0] .inCart);
        console.log('Data products:',storeProducts[0] .inCart);

        const tempProducts = [...this.state.products];
        tempProducts[0].inCart = true
        this.setState(()=>{
            return{products:tempProducts}
        },()=>{
            console.log('State products:',this.state.products[0] .inCart);
            console.log('Data products:',storeProducts[0] .inCart);
    
        })

    }

            <button onClick={this.tester}>test me</button>
