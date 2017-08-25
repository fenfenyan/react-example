import React, {Component} from 'react';

import figureStyle from './Greeter.css';

class ImgFigure extends Component{

    // imageFigure的点击处理函数
    handleClick(e){
        if (this.props.arrange.isCenter) {
            this.props.inverse();
        } else {
            this.props.center();
        }
        e.stopPropagation();
        e.preventDefault();
    }

    render() {

        var styleObj={};
        //如果props中指定了这张图片的位置，则使用
        if(this.props.arrange.pos){
            styleObj=this.props.arrange.pos;
        }
        //如果图片的旋转角度有值且不为0，则添加旋转角度
        if(this.props.arrange.rotate){
            (["Moz","ms","Webkit",""]).forEach(function(value){
                styleObj[value+"Transform"]="rotate("+this.props.arrange.rotate+"deg)";
            }.bind(this));
        }
        // 如果是居中的图片， z-index设为11
        if (this.props.arrange.isCenter) {
            styleObj.zIndex = 11;
        }

        var imgFigureClassName=figureStyle.image;
        if(this.props.arrange.isInverse){
            imgFigureClassName=[figureStyle.image,figureStyle.imageInverse].join(" ");
        }

        return (
            <figure style={styleObj} className={imgFigureClassName} onClick={this.handleClick.bind(this)}>
                <img  src={this.props.data.fileName} className={figureStyle.imageSize} alt={this.props.data.title}/>
                <figcaption>
                    <div style={{height:"15px"}}>{this.props.data.title}</div>
                    <div className={figureStyle.imageBack} onClick={this.handleClick.bind(this)}>
                        <p>{this.props.data.desc}</p>
                    </div>
                </figcaption>
            </figure>
        );
    }
}

export  default ImgFigure


