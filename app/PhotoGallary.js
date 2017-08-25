import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ImgFigure from './ImgFigure';
import ControllerUnit from './ControllerUnit';

import styles from './Greeter.css';

class PhotoGallary extends Component{

    constructor(props){
        super(props);
        this.state = {
            imgsArrangeArr:[]
        };
        this.Constant={
            centerPos:{
                left:0,
                right:0
            },
            hPosRange:{
                leftSecX:[0,0],
                rightSecX:[0,0],
                y:[0,0]
            },
            vPosRange:{
                x:[0,0],
                topY:[0,0]
            }
        };
    }

    componentDidMount() {
        var stageDom=ReactDOM.findDOMNode(this.refs.stage);
        var stageW=stageDom.scrollWidth,
            stageH=stageDom.scrollHeight,
            halfStageW=Math.ceil(stageW/2),
            halfStageH=Math.ceil(stageH/2);

        var imgFigureDom=ReactDOM.findDOMNode(this.refs.imgFigure0),
            imgW=imgFigureDom.scrollWidth,
            imgH=imgFigureDom.scrollHeight,
            halfImgW=Math.ceil(imgW/2),
            halfImgH=Math.ceil(imgH/2);

        this.Constant.centerPos={
            left:halfStageW-halfImgW,
            top:halfStageH-halfImgH
        };

        // this.Constant.hPosRange.leftSecX[0]=-halfImgW;
        this.Constant.hPosRange.leftSecX[0]=0;
        this.Constant.hPosRange.leftSecX[1]=halfStageW-halfImgW*3;
        this.Constant.hPosRange.rightSecX[0]=halfStageW+halfImgW;
        this.Constant.hPosRange.rightSecX[1]=stageW-imgW;
        // this.Constant.hPosRange.rightSecX[1]=stageW-halfImgW;
        // this.Constant.hPosRange.y[0]=-halfImgH;
        this.Constant.hPosRange.y[0]=0;
        this.Constant.hPosRange.y[1]=stageH-imgH;
        // this.Constant.hPosRange.y[1]=stageH-halfImgH;

        this.Constant.vPosRange.topY[0]=-halfImgH;
        this.Constant.vPosRange.topY[1]=halfStageH-halfImgH*3;
        this.Constant.vPosRange.x[0]=halfImgW-imgW;
        this.Constant.vPosRange.x[1]=halfImgW;

        this.rearrange(0);

    }
    //获取两个数之间的随机数
    getRangeRandom(low,high){
        return Math.ceil(Math.random()*(high-low)+low);
    }
    //获取旋转角度在-30度到30度的随机值
    getDegree(){
        return ((Math.random() > 0.5 ? '' : '-') + Math.ceil(Math.random() * 30));
    }

    //翻转图片
    // @param index 输入当前被执行inverse操作的图从对应图片信息数组的index
    // @return {function} 这是一个闭包函数，其内返回一个真正待背后自行的函数
    inverse(index){
        return function(){
            var imgArrangeArr=this.state.imgsArrangeArr;
            imgArrangeArr[index].isInverse=! imgArrangeArr[index].isInverse;
            this.setState({
                imgArrangeArr:imgArrangeArr
            });
        }.bind(this);
    }


    //重新布局所有图片
    rearrange(centerIndex){  var self=this;
        var imgsArrangeArr=this.state.imgsArrangeArr,
            Constant=this.Constant,
            centerPos=Constant.centerPos,
            hPosRange=Constant.hPosRange,
            vPosRange=Constant.vPosRange,
            hPosRangeLeftSecX=hPosRange.leftSecX,
            hPosRangeRightSecX=hPosRange.rightSecX,
            hPosRangeY=hPosRange.y,
            vPosRangeTopY=vPosRange.topY,
            vPosRangeX=vPosRange.x;

        var imgsArrangeTopArr=[];
        var topImgNum=Math.floor(Math.random()*2),
            // 取一个或者不取
            topImgSpliceIndex=0,
            imgsArrangeCenterArr=imgsArrangeArr.splice(centerIndex,1);
        // 首先居中centerindex的照片
        imgsArrangeCenterArr[0]={
            pos: centerPos,
            rotate: 0,
            isCenter: true
        };

        // 取出要布局上侧的图片的状态信息
        topImgSpliceIndex=Math.floor(Math.random()*(imgsArrangeArr.length-topImgNum));
        imgsArrangeTopArr=imgsArrangeArr.splice(topImgSpliceIndex,topImgNum);

        //布局上侧的图片
        imgsArrangeTopArr.forEach(function(value,index){
            imgsArrangeTopArr[index] ={
                pos:{
                    top:self.getRangeRandom(vPosRangeTopY[0],vPosRangeTopY[1]),
                    left:self.getRangeRandom(vPosRangeX[0],vPosRangeX[1])
                },
                rotate:self.getDegree(),
                isCenter: false
            };
        });
        //布局左右两边的图片
        for(var i=0,j=imgsArrangeArr.length,k=j/2;i<j;i++){
            var hPosRangeLORX=null;

            if(i<k){
                hPosRangeLORX=hPosRangeLeftSecX;
            }
            else{
                hPosRangeLORX=hPosRangeRightSecX;
            }
            imgsArrangeArr[i]={
                pos:{
                    top:self.getRangeRandom(hPosRangeY[0],hPosRangeY[1]),
                    left:self.getRangeRandom(hPosRangeLORX[0],hPosRangeLORX[1])
                },
                rotate:self.getDegree()
            };

        }

        if(imgsArrangeTopArr && imgsArrangeTopArr[0] ){
            imgsArrangeTopArr.splice(topImgSpliceIndex,0,imgsArrangeTopArr[0]);
        }

        imgsArrangeArr.splice(centerIndex,0,imgsArrangeCenterArr[0]);

        this.setState({
            imgsArrangeArr:imgsArrangeArr
        });
    }
    /*
     * 利用arrange函数， 居中对应index的图片
     * @param index, 需要被居中的图片对应的图片信息数组的index值
     * @returns {Function}
     */
    center(index) {
        return function () {
            this.rearrange(index);
        }.bind(this);
    }

    render() {
// 获取图片名称
        let imageData=require("./config.json");
// 利用自执行函数，把图片名转成图片URL路径信息
        imageData=((imageArr)=>{
            for(let i=0;i<imageArr.length;i++){
                let singleImage=imageArr[i];
                singleImage.key="image"+i;
                singleImage.imageURL=imageArr[i].fileName;
                imageArr[i]=singleImage;
            }
            return imageArr;
        })(imageData);

        let controllerUnits=[],
            imgFigures=[];
        imageData.forEach(function(value,index){
            if(!this.state.imgsArrangeArr[index]){
                this.state.imgsArrangeArr[index]={
                    pos:{
                        left:0,
                        top:0
                    },
                    rotate:0,
                    isInverse:false,
                    isCenter: false
                }
            }
            imgFigures.push(<ImgFigure key={value.key} data={value}
                                       ref={"imgFigure"+index}
                                       arrange={this.state.imgsArrangeArr[index]}
                                       inverse={this.inverse(index)}
                                       center={this.center(index)}/>);
            controllerUnits.push(<ControllerUnit key={"controller"+index}
                                                 arrange={this.state.imgsArrangeArr[index]}
                                                 inverse={this.inverse(index)}
                                                 center={this.center(index)}/>);
        }.bind(this));

        var style={
            width:"100%",
            height:"100%",
            perspective:"1800px",
            overflow:"hidden"
        };
        return (
            <div style={style}>
                <div style={style} ref="stage">
                    {imgFigures}
                </div>
                <nav className={styles.controllerNav}>
                    {controllerUnits}
                </nav>
            </div>
        );
    }
}

export  default PhotoGallary


