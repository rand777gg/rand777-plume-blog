import{$r as e,$s as t,Co as n,Fo as r,Gc as i,Hc as a,Hi as o,Jr as s,Js as c,La as l,Qc as u,Qr as d,Ri as f,Ro as p,Sa as m,So as h,Ta as g,To as _,Va as v,Wi as y,Xr as b,Xs as x,Yr as S,Zr as C,_i as w,ci as T,cl as E,co as D,da as O,ec as k,ei as A,el as j,fa as ee,hi as M,ho as te,ia as ne,li as N,mi as re,oc as ie,pa as ae,pi as oe,qi as P,rl as se,ta as ce,yo as le,za as ue,zc as de}from"./common-B7rGXzG4.js";import{Ht as fe,K as pe,Kt as me,St as he,Ut as ge,W as _e,Yt as ve,Zt as ye,_ as be,ct as xe,dn as Se,ft as Ce,in as we,mt as Te,nn as Ee,qt as De,rn as Oe,vn as ke,wn as Ae,yn as F,z as je}from"./vendor~app~index~index-Dpmkrpgi.js";import{A as I,B as Me,C as L,D as Ne,E as Pe,F as Fe,I as Ie,L as Le,M as Re,N as ze,O as Be,P as Ve,R as He,S as R,T as z,_ as Ue,a as We,b as B,c as Ge,d as Ke,f as V,g as qe,h as H,i as Je,j as Ye,k as Xe,l as Ze,m as Qe,n as $e,o as et,p as U,r as tt,s as nt,t as rt,u as it,v as at,w as ot,x as st,y as ct,z as lt}from"./vendor~index-Ca0Enye2.js";P([e,s]),P(A);var ut=He.extend({scene:null,camera:null,renderer:null},function(){this._ray=new ot,this._ndc=new Ye},{pick:function(e,t,n){return this.pickAll(e,t,[],n)[0]||null},pickAll:function(e,t,n,r){return this.renderer.screenToNDC(e,t,this._ndc),this.camera.castRay(this._ndc,this._ray),n||=[],this._intersectNode(this.scene,n,r||!1),n.sort(this._intersectionCompareFunc),n},_intersectNode:function(e,t,n){e instanceof qe&&e.isRenderable()&&(!e.ignorePicking||n)&&(e.mode===Le.TRIANGLES&&e.geometry.isUseIndices()||e.geometry.pickByRay||e.geometry.pick)&&this._intersectRenderable(e,t);for(var r=0;r<e._children.length;r++)this._intersectNode(e._children[r],t,n)},_intersectRenderable:(function(){var e=new z,t=new z,n=new z,r=new ot,i=new B;return function(a,o){var s=a.isSkinnedMesh();r.copy(this._ray),B.invert(i,a.worldTransform),s||r.applyTransform(i);var c=a.geometry,l=s?a.skeleton.boundingBox:c.boundingBox;if(!(l&&!r.intersectBoundingBox(l))){if(c.pick){c.pick(this._ndc.x,this._ndc.y,this.renderer,this.camera,a,o);return}else if(c.pickByRay){c.pickByRay(r,a,o);return}var u=a.cullFace===Le.BACK&&a.frontFace===Le.CCW||a.cullFace===Le.FRONT&&a.frontFace===Le.CW,d,f=c.indices,p=c.attributes.position,m=c.attributes.weight,h=c.attributes.joint,g,_=[];if(!(!p||!p.value||!f)){if(s){g=a.skeleton.getSubSkinMatrices(a.__uid__,a.joints);for(var v=0;v<a.joints.length;v++){_[v]=_[v]||[];for(var y=0;y<16;y++)_[v][y]=g[v*16+y]}var b=[],x=[],S=[],C=[],w=[],T=c.attributes.skinnedPosition;(!T||!T.value)&&(c.createAttribute(`skinnedPosition`,`f`,3),T=c.attributes.skinnedPosition,T.init(c.vertexCount));for(var v=0;v<c.vertexCount;v++){p.get(v,b),m.get(v,x),h.get(v,S),x[3]=1-x[0]-x[1]-x[2],Ne.set(C,0,0,0);for(var y=0;y<4;y++)S[y]>=0&&x[y]>1e-4&&(Ne.transformMat4(w,b,_[S[y]]),Ne.scaleAndAdd(C,C,w,x[y]));T.set(v,C)}}for(var v=0;v<f.length;v+=3){var E=f[v],D=f[v+1],O=f[v+2],k=s?c.attributes.skinnedPosition:p;if(k.get(E,e.array),k.get(D,t.array),k.get(O,n.array),d=u?r.intersectTriangle(e,t,n,a.culling):r.intersectTriangle(e,n,t,a.culling),d){var A=new z;s?z.copy(A,d):z.transformMat4(A,d,a.worldTransform),o.push(new ut.Intersection(d,A,a,[E,D,O],v/3,z.dist(A,this._ray.origin)))}}}}}})(),_intersectionCompareFunc:function(e,t){return e.distance-t.distance}});ut.Intersection=function(e,t,n,r,i,a){this.point=e,this.pointWorld=t,this.target=n,this.triangle=r,this.triangleIndex=i,this.distance=a};var dt=`vec3 calcAmbientSHLight(int idx, vec3 N) {
 int offset = 9 * idx;
 return ambientSHLightCoefficients[0]
 + ambientSHLightCoefficients[1] * N.x
 + ambientSHLightCoefficients[2] * N.y
 + ambientSHLightCoefficients[3] * N.z
 + ambientSHLightCoefficients[4] * N.x * N.z
 + ambientSHLightCoefficients[5] * N.z * N.y
 + ambientSHLightCoefficients[6] * N.y * N.x
 + ambientSHLightCoefficients[7] * (3.0 * N.z * N.z - 1.0)
 + ambientSHLightCoefficients[8] * (N.x * N.x - N.y * N.y);
}`,ft=`uniform vec3 `,pt=`uniform float `,mt=`@export clay.header.`,ht=`@end`,gt=`:unconfigurable;`,_t=[mt+`directional_light`,ft+`directionalLightDirection[DIRECTIONAL_LIGHT_COUNT]`+gt,ft+`directionalLightColor[DIRECTIONAL_LIGHT_COUNT]`+gt,ht,mt+`ambient_light`,ft+`ambientLightColor[AMBIENT_LIGHT_COUNT]`+gt,ht,mt+`ambient_sh_light`,ft+`ambientSHLightColor[AMBIENT_SH_LIGHT_COUNT]`+gt,ft+`ambientSHLightCoefficients[AMBIENT_SH_LIGHT_COUNT * 9]`+gt,dt,ht,mt+`ambient_cubemap_light`,ft+`ambientCubemapLightColor[AMBIENT_CUBEMAP_LIGHT_COUNT]`+gt,`uniform samplerCube ambientCubemapLightCubemap[AMBIENT_CUBEMAP_LIGHT_COUNT]`+gt,`uniform sampler2D ambientCubemapLightBRDFLookup[AMBIENT_CUBEMAP_LIGHT_COUNT]`+gt,ht,mt+`point_light`,ft+`pointLightPosition[POINT_LIGHT_COUNT]`+gt,pt+`pointLightRange[POINT_LIGHT_COUNT]`+gt,ft+`pointLightColor[POINT_LIGHT_COUNT]`+gt,ht,mt+`spot_light`,ft+`spotLightPosition[SPOT_LIGHT_COUNT]`+gt,ft+`spotLightDirection[SPOT_LIGHT_COUNT]`+gt,pt+`spotLightRange[SPOT_LIGHT_COUNT]`+gt,pt+`spotLightUmbraAngleCosine[SPOT_LIGHT_COUNT]`+gt,pt+`spotLightPenumbraAngleCosine[SPOT_LIGHT_COUNT]`+gt,pt+`spotLightFalloffFactor[SPOT_LIGHT_COUNT]`+gt,ft+`spotLightColor[SPOT_LIGHT_COUNT]`+gt,ht].join(`
`);I.import(_t);var vt=Ue.extend(function(){return{color:[1,1,1],intensity:1,castShadow:!0,shadowResolution:512,group:0}},{type:``,clone:function(){var e=Ue.prototype.clone.call(this);return e.color=Array.prototype.slice.call(this.color),e.intensity=this.intensity,e.castShadow=this.castShadow,e.shadowResolution=this.shadowResolution,e}}),yt=Be.create(),bt=Be.create(),xt={};function St(e){var t=[],n=Object.keys(e);n.sort();for(var r=0;r<n.length;r++){var i=n[r];t.push(i+` `+e[i])}var a=t.join(`
`);if(xt[a])return xt[a];var o=lt.genGUID();return xt[a]=o,o}function Ct(){this.opaque=[],this.transparent=[],this._opaqueCount=0,this._transparentCount=0}Ct.prototype.startCount=function(){this._opaqueCount=0,this._transparentCount=0},Ct.prototype.add=function(e,t){t?this.transparent[this._transparentCount++]=e:this.opaque[this._opaqueCount++]=e},Ct.prototype.endCount=function(){this.transparent.length=this._transparentCount,this.opaque.length=this._opaqueCount};var wt=Ue.extend(function(){return{material:null,lights:[],viewBoundingBoxLastFrame:new at,shadowUniforms:{},_cameraList:[],_lightUniforms:{},_previousLightNumber:{},_lightNumber:{},_lightProgramKeys:{},_nodeRepository:{},_renderLists:new Fe(20)}},function(){this._scene=this},{addToScene:function(e){e instanceof Ze?(this._cameraList.length>0&&console.warn(`Found multiple camera in one scene. Use the fist one.`),this._cameraList.push(e)):e instanceof vt&&this.lights.push(e),e.name&&(this._nodeRepository[e.name]=e)},removeFromScene:function(e){var t;e instanceof Ze?(t=this._cameraList.indexOf(e),t>=0&&this._cameraList.splice(t,1)):e instanceof vt&&(t=this.lights.indexOf(e),t>=0&&this.lights.splice(t,1)),e.name&&delete this._nodeRepository[e.name]},getNode:function(e){return this._nodeRepository[e]},setMainCamera:function(e){var t=this._cameraList.indexOf(e);t>=0&&this._cameraList.splice(t,1),this._cameraList.unshift(e)},getMainCamera:function(){return this._cameraList[0]},getLights:function(){return this.lights},updateLights:function(){var e=this.lights;this._previousLightNumber=this._lightNumber;for(var t={},n=0;n<e.length;n++){var r=e[n];if(!r.invisible){var i=r.group;t[i]||(t[i]={}),t[i][r.type]=t[i][r.type]||0,t[i][r.type]++}}for(var a in this._lightNumber=t,t)this._lightProgramKeys[a]=St(t[a]);this._updateLightUniforms()},cloneNode:function(e){var t=e.clone(),n={};function r(e,t){n[e.__uid__]=t;for(var i=0;i<e._children.length;i++){var a=e._children[i],o=t._children[i];r(a,o)}}return r(e,t),t.traverse(function(e){e.skeleton&&=e.skeleton.clone(n),e.material&&=e.material.clone()}),t},updateRenderList:function(e,t){var n=e.__uid__,r=this._renderLists.get(n);r||(r=new Ct,this._renderLists.put(n,r)),r.startCount(),t&&(this.viewBoundingBoxLastFrame.min.set(1/0,1/0,1/0),this.viewBoundingBoxLastFrame.max.set(-1/0,-1/0,-1/0));var i=this.material&&this.material.transparent||!1;return this._doUpdateRenderList(this,e,i,r,t),r.endCount(),r},getRenderList:function(e){return this._renderLists.get(e.__uid__)},_doUpdateRenderList:function(e,t,n,r,i){if(!e.invisible)for(var a=0;a<e._children.length;a++){var o=e._children[a];if(o.isRenderable()){var s=o.isSkinnedMesh()?yt:o.worldTransform.array,c=o.geometry;Be.multiplyAffine(bt,t.viewMatrix.array,s),(i&&!c.boundingBox||!this.isFrustumCulled(o,t,bt))&&r.add(o,o.material.transparent||n)}o._children.length>0&&this._doUpdateRenderList(o,t,n,r,i)}},isFrustumCulled:(function(){var e=new at,t=new B;return function(n,r,i){var a=n.boundingBox;if(a||=n.skeleton&&n.skeleton.boundingBox?n.skeleton.boundingBox:n.geometry.boundingBox,!a)return!1;if(t.array=i,e.transformFrom(a,t),n.castShadow&&this.viewBoundingBoxLastFrame.union(e),n.frustumCulling){if(!e.intersectBoundingBox(r.frustum.boundingBox))return!0;t.array=r.projectionMatrix.array,e.max.array[2]>0&&e.min.array[2]<0&&(e.max.array[2]=-1e-20),e.applyProjection(t);var o=e.min.array,s=e.max.array;if(s[0]<-1||o[0]>1||s[1]<-1||o[1]>1||s[2]<-1||o[2]>1)return!0}return!1}})(),_updateLightUniforms:function(){var e=this.lights;e.sort(Tt);var t=this._lightUniforms;for(var n in t)for(var r in t[n])t[n][r].value.length=0;for(var i=0;i<e.length;i++){var a=e[i];if(!a.invisible){var n=a.group;for(var r in a.uniformTemplates){var o=a.uniformTemplates[r],s=o.value(a);if(s!=null){t[n]||(t[n]={}),t[n][r]||(t[n][r]={type:``,value:[]});var c=t[n][r];switch(c.type=o.type+`v`,o.type){case`1i`:case`1f`:case`t`:c.value.push(s);break;case`2f`:case`3f`:case`4f`:for(var l=0;l<s.length;l++)c.value.push(s[l]);break;default:console.error(`Unkown light uniform type `+o.type)}}}}}},getLightGroups:function(){var e=[];for(var t in this._lightNumber)e.push(t);return e},getNumberChangedLightGroups:function(){var e=[];for(var t in this._lightNumber)this.isLightNumberChanged(t)&&e.push(t);return e},isLightNumberChanged:function(e){var t=this._previousLightNumber,n=this._lightNumber;for(var r in n[e])if(!t[e]||n[e][r]!==t[e][r])return!0;for(var r in t[e])if(!n[e]||n[e][r]!==t[e][r])return!0;return!1},getLightsNumbers:function(e){return this._lightNumber[e]},getProgramKey:function(e){return this._lightProgramKeys[e]},setLightUniforms:(function(){function e(e,t,n){for(var r in e){var i=e[r];if(i.type===`tv`){if(!t.hasUniform(r))continue;for(var a=[],o=0;o<i.value.length;o++){var s=i.value[o],c=t.takeCurrentTextureSlot(n,s);a.push(c)}t.setUniform(n.gl,`1iv`,r,a)}else t.setUniform(n.gl,i.type,r,i.value)}}return function(t,n,r){e(this._lightUniforms[n],t,r),e(this.shadowUniforms,t,r)}})(),dispose:function(){this.material=null,this._opaqueList=[],this._transparentList=[],this.lights=[],this._lightUniforms={},this._lightNumber={},this._nodeRepository={}}});function Tt(e,t){if(t.castShadow&&!e.castShadow)return!0}var Et=[`px`,`nx`,`py`,`ny`,`pz`,`nz`],Dt=He.extend(function(){var e={position:new z,far:1e3,near:.1,texture:null,shadowMapPass:null},t=e._cameras={px:new nt({fov:90}),nx:new nt({fov:90}),py:new nt({fov:90}),ny:new nt({fov:90}),pz:new nt({fov:90}),nz:new nt({fov:90})};return t.px.lookAt(z.POSITIVE_X,z.NEGATIVE_Y),t.nx.lookAt(z.NEGATIVE_X,z.NEGATIVE_Y),t.py.lookAt(z.POSITIVE_Y,z.POSITIVE_Z),t.ny.lookAt(z.NEGATIVE_Y,z.NEGATIVE_Z),t.pz.lookAt(z.POSITIVE_Z,z.NEGATIVE_Y),t.nz.lookAt(z.NEGATIVE_Z,z.NEGATIVE_Y),e._frameBuffer=new et,e},{getCamera:function(e){return this._cameras[e]},render:function(e,t,n){var r=e.gl;n||t.update();for(var i=this.texture.width,a=2*Math.atan(i/(i-.5))/Math.PI*180,o=0;o<6;o++){var s=Et[o],c=this._cameras[s];if(z.copy(c.position,this.position),c.far=this.far,c.near=this.near,c.fov=a,this.shadowMapPass){c.update();var l=t.getBoundingBox();l.applyTransform(c.viewMatrix),t.viewBoundingBoxLastFrame.copy(l),this.shadowMapPass.render(e,t,c,!0)}this._frameBuffer.attach(this.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+o),this._frameBuffer.bind(e),e.render(t,c,!0),this._frameBuffer.unbind(e)}},dispose:function(e){this._frameBuffer.dispose(e)}}),W=new B,Ot=V.extend({dynamic:!1,widthSegments:1,heightSegments:1,depthSegments:1,inside:!1},function(){this.build()},{build:function(){var e={px:kt(`px`,this.depthSegments,this.heightSegments),nx:kt(`nx`,this.depthSegments,this.heightSegments),py:kt(`py`,this.widthSegments,this.depthSegments),ny:kt(`ny`,this.widthSegments,this.depthSegments),pz:kt(`pz`,this.widthSegments,this.heightSegments),nz:kt(`nz`,this.widthSegments,this.heightSegments)},t=[`position`,`texcoord0`,`normal`],n=0,r=0;for(var i in e)n+=e[i].vertexCount,r+=e[i].indices.length;for(var a=0;a<t.length;a++)this.attributes[t[a]].init(n);this.indices=new Ie.Uint16Array(r);var o=0,s=0;for(var i in e){for(var c=e[i],a=0;a<t.length;a++)for(var l=t[a],u=c.attributes[l].value,d=c.attributes[l].size,f=l===`normal`,p=0;p<u.length;p++){var m=u[p];this.inside&&f&&(m=-m),this.attributes[l].value[p+d*s]=m}for(var h=c.indices.length,p=0;p<c.indices.length;p++)this.indices[p+o]=s+c.indices[this.inside?h-p-1:p];o+=c.indices.length,s+=c.vertexCount}this.boundingBox=new at,this.boundingBox.max.set(1,1,1),this.boundingBox.min.set(-1,-1,-1)}});function kt(e,t,n){W.identity();var r=new We({widthSegments:t,heightSegments:n});switch(e){case`px`:B.translate(W,W,z.POSITIVE_X),B.rotateY(W,W,Math.PI/2);break;case`nx`:B.translate(W,W,z.NEGATIVE_X),B.rotateY(W,W,-Math.PI/2);break;case`py`:B.translate(W,W,z.POSITIVE_Y),B.rotateX(W,W,-Math.PI/2);break;case`ny`:B.translate(W,W,z.NEGATIVE_Y),B.rotateX(W,W,Math.PI/2);break;case`pz`:B.translate(W,W,z.POSITIVE_Z);break;case`nz`:B.translate(W,W,z.NEGATIVE_Z),B.rotateY(W,W,Math.PI);break}return r.applyTransform(W),r}I.import(`@export clay.skybox.vertex
#define SHADER_NAME skybox
uniform mat4 world : WORLD;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
attribute vec3 position : POSITION;
varying vec3 v_WorldPosition;
void main()
{
 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end
@export clay.skybox.fragment
#define PI 3.1415926
uniform mat4 viewInverse : VIEWINVERSE;
#ifdef EQUIRECTANGULAR
uniform sampler2D environmentMap;
#else
uniform samplerCube environmentMap;
#endif
uniform float lod: 0.0;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
@import clay.util.srgb
@import clay.util.ACES
void main()
{
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
#ifdef EQUIRECTANGULAR
 float phi = acos(V.y);
 float theta = atan(-V.x, V.z) + PI * 0.5;
 vec2 uv = vec2(theta / 2.0 / PI, phi / PI);
 vec4 texel = decodeHDR(texture2D(environmentMap, fract(uv)));
#else
 #if defined(LOD) || defined(SUPPORT_TEXTURE_LOD)
 vec4 texel = decodeHDR(textureCubeLodEXT(environmentMap, V, lod));
 #else
 vec4 texel = decodeHDR(textureCube(environmentMap, V));
 #endif
#endif
#ifdef SRGB_DECODE
 texel = sRGBToLinear(texel);
#endif
#ifdef TONEMAPPING
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
#ifdef SRGB_ENCODE
 texel = linearTosRGB(texel);
#endif
 gl_FragColor = encodeHDR(vec4(texel.rgb, 1.0));
}
@end`);var At=Qe.extend(function(){var e=new Ve({shader:new I({vertex:I.source(`clay.skybox.vertex`),fragment:I.source(`clay.skybox.fragment`)}),depthMask:!1});return{scene:null,geometry:new Ot,material:e,environmentMap:null,culling:!1,_dummyCamera:new nt}},function(){var e=this.scene;e&&this.attachScene(e),this.environmentMap&&this.setEnvironmentMap(this.environmentMap)},{attachScene:function(e){this.scene&&this.detachScene(),e.skybox=this,this.scene=e,e.on(`beforerender`,this._beforeRenderScene,this)},detachScene:function(){this.scene&&(this.scene.off(`beforerender`,this._beforeRenderScene),this.scene.skybox=null),this.scene=null},dispose:function(e){this.detachScene(),this.geometry.dispose(e)},setEnvironmentMap:function(e){e.textureType===`texture2D`?(this.material.define(`EQUIRECTANGULAR`),e.minFilter=H.LINEAR):this.material.undefine(`EQUIRECTANGULAR`),this.material.set(`environmentMap`,e)},getEnvironmentMap:function(){return this.material.get(`environmentMap`)},_beforeRenderScene:function(e,t,n){this.renderSkybox(e,n)},renderSkybox:function(e,t){var n=this._dummyCamera;n.aspect=e.getViewportAspect(),n.fov=t.fov||50,n.updateProjectionMatrix(),B.invert(n.invProjectionMatrix,n.projectionMatrix),n.worldTransform.copy(t.worldTransform),n.viewMatrix.copy(t.viewMatrix),this.position.copy(t.getWorldPosition()),this.update(),e.gl.disable(e.gl.BLEND),this.material.get(`lod`)>0?this.material.define(`fragment`,`LOD`):this.material.undefine(`fragment`,`LOD`),e.renderPass([this],n)}}),jt=At,Mt=542327876,Nt=131072,Pt=512,Ft=4;function It(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}var Lt=31,Rt=It(`DXT1`),zt=It(`DXT3`),Bt=It(`DXT5`),Vt=0,Ht=1,Ut=2,Wt=3,Gt=4,Kt=7,qt=20,Jt=21,Yt=28,Xt={parse:function(e,t){var n=new Int32Array(e,0,Lt);if(n[Vt]!==Mt||!n(qt)&Ft)return null;var r=n(Jt),i=n[Gt],a=n[Wt],o=n[Yt]&Pt,s=n[Ut]&Nt,c,l;switch(r){case Rt:c=8,l=H.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case zt:c=16,l=H.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case Bt:c=16,l=H.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return null}var u=n[Ht]+4,d=o?6:1,f=1;s&&(f=Math.max(1,n[Kt]));for(var p=[],m=0;m<d;m++){var h=i,g=a;p[m]=new U({width:h,height:g,format:l});for(var _=[],v=0;v<f;v++){var y=Math.max(4,h)/4*Math.max(4,g)/4*c,b=new Uint8Array(e,u,y);u+=y,h*=.5,g*=.5,_[v]=b}p[m].pixels=_[0],s&&(p[m].mipmaps=_)}if(t)t.width=p[0].width,t.height=p[0].height,t.format=p[0].format,t.pixels=p[0].pixels,t.mipmaps=p[0].mipmaps;else return p[0]}},Zt=String.fromCharCode,Qt=8,$t=32767;function en(e,t,n,r){if(e[3]>0){var i=2**(e[3]-128-8+r);t[n+0]=e[0]*i,t[n+1]=e[1]*i,t[n+2]=e[2]*i}else t[n+0]=0,t[n+1]=0,t[n+2]=0;return t[n+3]=1,t}function tn(e,t,n){for(var r=``,i=t;i<n;i++)r+=Zt(e[i]);return r}function nn(e,t){t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3]}function rn(e,t,n,r){for(var i=0,a=0,o=r;o>0;)if(e[a][0]=t[n++],e[a][1]=t[n++],e[a][2]=t[n++],e[a][3]=t[n++],e[a][0]===1&&e[a][1]===1&&e[a][2]===1){for(var s=e[a][3]<<i>>>0;s>0;s--)nn(e[a-1],e[a]),a++,o--;i+=8}else a++,o--,i=0;return n}function an(e,t,n,r){if(r<Qt|r>$t)return rn(e,t,n,r);var i=t[n++];if(i!=2)return rn(e,t,n-1,r);if(e[0][1]=t[n++],e[0][2]=t[n++],i=t[n++],(e[0][2]<<8>>>0|i)>>>0!==r)return null;for(var i=0;i<4;i++)for(var a=0;a<r;){var o=t[n++];if(o>128){o=(o&127)>>>0;for(var s=t[n++];o--;)e[a++][i]=s}else for(;o--;)e[a++][i]=t[n++]}return n}var on={parseRGBE:function(e,t,n){n??=0;var r=new Uint8Array(e),i=r.length;if(tn(r,0,2)===`#?`){for(var a=2;a<i&&!(Zt(r[a])===`
`&&Zt(r[a+1])===`
`);a++);if(!(a>=i)){a+=2;for(var o=``;a<i;a++){var s=Zt(r[a]);if(s===`
`)break;o+=s}var c=o.split(` `),l=parseInt(c[1]),u=parseInt(c[3]);if(!(!u||!l)){for(var d=a+1,f=[],p=0;p<u;p++){f[p]=[];for(var m=0;m<4;m++)f[p][m]=0}for(var h=new Float32Array(u*l*4),g=0,_=0;_<l;_++){var d=an(f,r,d,u);if(!d)return null;for(var p=0;p<u;p++)en(f[p],h,g,n),g+=4}return t||=new U,t.width=u,t.height=l,t.pixels=h,t.type=H.FLOAT,t}}}},parseRGBEFromPNG:function(e){}},sn={loadTexture:function(e,t,n,r){var i;if(typeof t==`function`?(n=t,r=n,t={}):t||={},typeof e==`string`){if(e.match(/.hdr$/)||t.fileType===`hdr`)return i=new U({width:0,height:0,sRGB:!1}),sn._fetchTexture(e,function(e){on.parseRGBE(e,i,t.exposure),i.dirty(),n&&n(i)},r),i;e.match(/.dds$/)||t.fileType===`dds`?(i=new U({width:0,height:0}),sn._fetchTexture(e,function(e){Xt.parse(e,i),i.dirty(),n&&n(i)},r)):(i=new U,i.load(e),i.success(n),i.error(r))}else typeof e==`object`&&e.px!==void 0&&(i=new Ge,i.load(e),i.success(n),i.error(r));return i},loadPanorama:function(e,t,n,r,i,a){var o=this;typeof r==`function`?(i=r,a=i,r={}):r||={},sn.loadTexture(t,r,function(t){t.flipY=r.flipY||!1,o.panoramaToCubeMap(e,t,n,r),t.dispose(e),i&&i(n)},a)},panoramaToCubeMap:function(e,t,n,r){var i=new Dt,a=new jt({scene:new wt});return a.setEnvironmentMap(t),r||={},r.encodeRGBM&&a.material.define(`fragment`,`RGBM_ENCODE`),n.sRGB=t.sRGB,i.texture=n,i.render(e,a.scene),i.texture=null,i.dispose(e),n},heightToNormal:function(e,t){var n=document.createElement(`canvas`),r=n.width=e.width,i=n.height=e.height,a=n.getContext(`2d`);a.drawImage(e,0,0,r,i),t||=!1;for(var o=a.getImageData(0,0,r,i),s=a.createImageData(r,i),c=0;c<o.data.length;c+=4){if(t){var l=o.data[c],u=o.data[c+1],d=o.data[c+2];if(Math.abs(l-u)+Math.abs(u-d)>20)return console.warn(`Given image is not a height map`),e}var f,p,m,h;c%(r*4)==0?(f=o.data[c],m=o.data[c+4]):c%(r*4)==(r-1)*4?(f=o.data[c-4],m=o.data[c]):(f=o.data[c-4],m=o.data[c+4]),c<r*4?(p=o.data[c],h=o.data[c+r*4]):c>r*(i-1)*4?(p=o.data[c-r*4],h=o.data[c]):(p=o.data[c-r*4],h=o.data[c+r*4]),s.data[c]=f-m+127,s.data[c+1]=p-h+127,s.data[c+2]=255,s.data[c+3]=255}return a.putImageData(s,0,0),n},isHeightImage:function(e,t,n){if(!e||!e.width||!e.height)return!1;var r=document.createElement(`canvas`),i=r.getContext(`2d`),a=t||32;n||=20,r.width=r.height=a,i.drawImage(e,0,0,a,a);for(var o=i.getImageData(0,0,a,a),s=0;s<o.data.length;s+=4){var c=o.data[s],l=o.data[s+1],u=o.data[s+2];if(Math.abs(c-l)+Math.abs(l-u)>n)return!1}return!0},_fetchTexture:function(e,t,n){Ie.request.get({url:e,responseType:`arraybuffer`,onload:t,onerror:n})},createChessboard:function(e,t,n,r){e||=512,t||=64,n||=`black`,r||=`white`;var i=Math.ceil(e/t),a=document.createElement(`canvas`);a.width=e,a.height=e;var o=a.getContext(`2d`);o.fillStyle=r,o.fillRect(0,0,e,e),o.fillStyle=n;for(var s=0;s<i;s++)for(var c=0;c<i;c++)(c%2?s%2:s%2-1)&&o.fillRect(s*t,c*t,t,t);return new U({image:a,anisotropic:8})},createBlank:function(e){var t=document.createElement(`canvas`);t.width=1,t.height=1;var n=t.getContext(`2d`);return n.fillStyle=e,n.fillRect(0,0,1,1),new U({image:t})}},cn=[`mousedown`,`mouseup`,`mousemove`,`mouseover`,`mouseout`,`click`,`dblclick`,`contextmenu`];function ln(e){return`_on`+e}var un=function(e){var t=this;this._texture=new U({anisotropic:32,flipY:!1,surface:this,dispose:function(e){t.dispose(),U.prototype.dispose.call(this,e)}}),cn.forEach(function(e){this[ln(e)]=function(t){t.triangle&&this._meshes.forEach(function(n){this.dispatchEvent(e,n,t.triangle,t.point)},this)}},this),this._meshes=[],e&&this.setECharts(e),this.onupdate=null};un.prototype={constructor:un,getTexture:function(){return this._texture},setECharts:function(e){this._chart=e;var t=e.getDom();if(!(t instanceof HTMLCanvasElement))console.error(`ECharts must init on canvas if it is used as texture.`),t=document.createElement(`canvas`);else{var n=this,r=e.getZr(),i=r.__oldRefreshImmediately||r.refreshImmediately;r.refreshImmediately=function(){i.call(this),n._texture.dirty(),n.onupdate&&n.onupdate()},r.__oldRefreshImmediately=i}this._texture.image=t,this._texture.dirty(),this.onupdate&&this.onupdate()},dispatchEvent:function(){var e=new z,t=new z,n=new z,r=new Ye,i=new Ye,a=new Ye,o=new Ye,s=new z;return function(c,l,u,d){var f=l.geometry,p=f.attributes.position,m=f.attributes.texcoord0,h=z.dot,g=z.cross;p.get(u[0],e.array),p.get(u[1],t.array),p.get(u[2],n.array),m.get(u[0],r.array),m.get(u[1],i.array),m.get(u[2],a.array),g(s,t,n);var _=h(e,s),v=h(d,s)/_;g(s,n,e);var y=h(d,s)/_;g(s,e,t);var b=h(d,s)/_;Ye.scale(o,r,v),Ye.scaleAndAdd(o,o,i,y),Ye.scaleAndAdd(o,o,a,b);var x=o.x*this._chart.getWidth(),S=o.y*this._chart.getHeight();this._chart.getZr().handler.dispatch(c,{zrX:x,zrY:S})}}(),attachToMesh:function(e){this._meshes.indexOf(e)>=0||(cn.forEach(function(t){e.on(t,this[ln(t)],this)},this),this._meshes.push(e))},detachFromMesh:function(e){var t=this._meshes.indexOf(e);t>=0&&this._meshes.splice(t,1),cn.forEach(function(t){e.off(t,this[ln(t)])},this)},dispose:function(){this._meshes.forEach(function(e){this.detachFromMesh(e)},this)}};var dn=`#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform sampler2D normalDistribution;
uniform vec2 viewportSize : [512, 256];
const vec3 N = vec3(0.0, 0.0, 1.0);
const float fSampleNumber = float(SAMPLE_NUMBER);
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
float G_Smith(float roughness, float NoV, float NoL) {
 float k = roughness * roughness / 2.0;
 float G1V = NoV / (NoV * (1.0 - k) + k);
 float G1L = NoL / (NoL * (1.0 - k) + k);
 return G1L * G1V;
}
void main() {
 vec2 uv = gl_FragCoord.xy / viewportSize;
 float NoV = uv.x;
 float roughness = uv.y;
 vec3 V;
 V.x = sqrt(1.0 - NoV * NoV);
 V.y = 0.0;
 V.z = NoV;
 float A = 0.0;
 float B = 0.0;
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(L.z, 0.0, 1.0);
 float NoH = clamp(H.z, 0.0, 1.0);
 float VoH = clamp(dot(V, H), 0.0, 1.0);
 if (NoL > 0.0) {
 float G = G_Smith(roughness, NoV, NoL);
 float G_Vis = G * VoH / (NoH * NoV);
 float Fc = pow(1.0 - VoH, 5.0);
 A += (1.0 - Fc) * G_Vis;
 B += Fc * G_Vis;
 }
 }
 gl_FragColor = vec4(vec2(A, B) / fSampleNumber, 0.0, 1.0);
}
`,fn=`#define SHADER_NAME prefilter
#define SAMPLE_NUMBER 1024
#define PI 3.14159265358979
uniform mat4 viewInverse : VIEWINVERSE;
uniform samplerCube environmentMap;
uniform sampler2D normalDistribution;
uniform float roughness : 0.5;
varying vec2 v_Texcoord;
varying vec3 v_WorldPosition;
@import clay.util.rgbm
vec3 importanceSampleNormal(float i, float roughness, vec3 N) {
 vec3 H = texture2D(normalDistribution, vec2(roughness, i)).rgb;
 vec3 upVector = abs(N.y) > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
void main() {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(v_WorldPosition - eyePos);
 vec3 N = V;
 vec3 prefilteredColor = vec3(0.0);
 float totalWeight = 0.0;
 float fMaxSampleNumber = float(SAMPLE_NUMBER);
 for (int i = 0; i < SAMPLE_NUMBER; i++) {
 vec3 H = importanceSampleNormal(float(i) / fMaxSampleNumber, roughness, N);
 vec3 L = reflect(-V, H);
 float NoL = clamp(dot(N, L), 0.0, 1.0);
 if (NoL > 0.0) {
 prefilteredColor += decodeHDR(textureCube(environmentMap, L)).rgb * NoL;
 totalWeight += NoL;
 }
 }
 gl_FragColor = encodeHDR(vec4(prefilteredColor / totalWeight, 1.0));
}
`,pn={},mn=[`px`,`nx`,`py`,`ny`,`pz`,`nz`];pn.prefilterEnvironmentMap=function(e,t,n,r,i){(!i||!r)&&(r=pn.generateNormalDistribution(),i=pn.integrateBRDF(e,r)),n||={};var a=n.width||64,o=n.height||64,s=n.type||t.type,c=new Ge({width:a,height:o,type:s,flipY:!1,mipmaps:[]});c.isPowerOfTwo()||console.warn(`Width and height must be power of two to enable mipmap.`);var l=Math.log(Math.min(a,o))/Math.log(2)+1,u=new Ve({shader:new I({vertex:I.source(`clay.skybox.vertex`),fragment:fn})});u.set(`normalDistribution`,r),n.encodeRGBM&&u.define(`fragment`,`RGBM_ENCODE`),n.decodeRGBM&&u.define(`fragment`,`RGBM_DECODE`);var d=new wt,f;if(t.textureType===`texture2D`){var p=new Ge({width:a,height:o,type:s===H.FLOAT?H.HALF_FLOAT:s});sn.panoramaToCubeMap(e,t,p,{encodeRGBM:n.decodeRGBM}),t=p}f=new At({scene:d,material:u}),f.material.set(`environmentMap`,t);var m=new Dt({texture:c});n.encodeRGBM&&(s=c.type=H.UNSIGNED_BYTE);for(var h=new U({width:a,height:o,type:s}),g=new et({depthBuffer:!1}),_=Ie[s===H.UNSIGNED_BYTE?`Uint8Array`:`Float32Array`],v=0;v<l;v++){c.mipmaps[v]={pixels:{}},f.material.set(`roughness`,v/(l-1));for(var y=h.width,b=2*Math.atan(y/(y-.5))/Math.PI*180,x=0;x<mn.length;x++){var S=new _(h.width*h.height*4);g.attach(h),g.bind(e);var C=m.getCamera(mn[x]);C.fov=b,e.render(d,C),e.gl.readPixels(0,0,h.width,h.height,H.RGBA,s,S),g.unbind(e),c.mipmaps[v].pixels[mn[x]]=S}h.width/=2,h.height/=2,h.dirty()}return g.dispose(e),h.dispose(e),f.dispose(e),r.dispose(e),{environmentMap:c,brdfLookup:i,normalDistribution:r,maxMipmapLevel:l}},pn.integrateBRDF=function(e,t){t||=pn.generateNormalDistribution();var n=new et({depthBuffer:!1}),r=new tt({fragment:dn}),i=new U({width:512,height:256,type:H.HALF_FLOAT,wrapS:H.CLAMP_TO_EDGE,wrapT:H.CLAMP_TO_EDGE,minFilter:H.NEAREST,magFilter:H.NEAREST,useMipmap:!1});return r.setUniform(`normalDistribution`,t),r.setUniform(`viewportSize`,[512,256]),r.attachOutput(i),r.render(e,n),n.dispose(e),i},pn.generateNormalDistribution=function(e,t){for(var e=e||256,t=t||1024,n=new U({width:e,height:t,type:H.FLOAT,minFilter:H.NEAREST,magFilter:H.NEAREST,wrapS:H.CLAMP_TO_EDGE,wrapT:H.CLAMP_TO_EDGE,useMipmap:!1}),r=new Float32Array(t*e*4),i=[],a=0;a<e;a++){for(var o=a/e,s=o*o,c=0;c<t;c++){var l=(c<<16|c>>>16)>>>0;l=((l&1431655765)<<1|(l&2863311530)>>>1)>>>0,l=((l&858993459)<<2|(l&3435973836)>>>2)>>>0,l=((l&252645135)<<4|(l&4042322160)>>>4)>>>0,l=(((l&16711935)<<8|(l&4278255360)>>>8)>>>0)/4294967296;var u=Math.sqrt((1-l)/(1+(s*s-1)*l));i[c]=u}for(var c=0;c<t;c++){var d=(c*e+a)*4,u=i[c],f=Math.sqrt(1-u*u),p=c/t,m=2*Math.PI*p;r[d]=f*Math.cos(m),r[d+1]=u,r[d+2]=f*Math.sin(m),r[d+3]=1}}return n.pixels=r,n};var hn=vt.extend({cubemap:null,castShadow:!1,_normalDistribution:null,_brdfLookup:null},{type:`AMBIENT_CUBEMAP_LIGHT`,prefilter:function(e,t){if(!e.getGLExtension(`EXT_shader_texture_lod`)){console.warn(`Device not support textureCubeLodEXT`);return}this._brdfLookup||=(this._normalDistribution=pn.generateNormalDistribution(),pn.integrateBRDF(e,this._normalDistribution));var n=this.cubemap;if(!n.__prefiltered){var r=pn.prefilterEnvironmentMap(e,n,{encodeRGBM:!0,width:t,height:t},this._normalDistribution,this._brdfLookup);this.cubemap=r.environmentMap,this.cubemap.__prefiltered=!0,n.dispose(e)}},getBRDFLookup:function(){return this._brdfLookup},uniformTemplates:{ambientCubemapLightColor:{type:`3f`,value:function(e){var t=e.color,n=e.intensity;return[t[0]*n,t[1]*n,t[2]*n]}},ambientCubemapLightCubemap:{type:`t`,value:function(e){return e.cubemap}},ambientCubemapLightBRDFLookup:{type:`t`,value:function(e){return e._brdfLookup}}}}),gn=vt.extend({castShadow:!1,coefficients:[]},function(){this._coefficientsTmpArr=new Ie.Float32Array(27)},{type:`AMBIENT_SH_LIGHT`,uniformTemplates:{ambientSHLightColor:{type:`3f`,value:function(e){var t=e.color,n=e.intensity;return[t[0]*n,t[1]*n,t[2]*n]}},ambientSHLightCoefficients:{type:`3f`,value:function(e){for(var t=e._coefficientsTmpArr,n=0;n<e.coefficients.length;n++)t[n]=e.coefficients[n];return t}}}}),_n={},vn=[`px`,`nx`,`py`,`ny`,`pz`,`nz`];function yn(e,t){var n=e[0],r=e[1],i=e[2];return t===0?1:t===1?n:t===2?r:t===3?i:t===4?n*i:t===5?r*i:t===6?n*r:t===7?3*i*i-1:n*n-r*r}var bn={px:[2,1,0,-1,-1,1],nx:[2,1,0,1,-1,-1],py:[0,2,1,1,-1,-1],ny:[0,2,1,1,1,1],pz:[0,1,2,-1,-1,-1],nz:[0,1,2,1,-1,1]};function xn(e,t,n,r){for(var i=new Ie.Float32Array(27),a=Ne.create(),o=Ne.create(),s=Ne.create(),c=0;c<9;c++){for(var l=Ne.create(),u=0;u<vn.length;u++){for(var d=t[vn[u]],f=Ne.create(),p=0,m=0,h=bn[vn[u]],g=0;g<r;g++)for(var _=0;_<n;_++){a[0]=_/(n-1)*2-1,a[1]=g/(r-1)*2-1,a[2]=-1,Ne.normalize(a,a),s[0]=a[h[0]]*h[3],s[1]=a[h[1]]*h[4],s[2]=a[h[2]]*h[5],o[0]=d[m++]/255,o[1]=d[m++]/255,o[2]=d[m++]/255;var v=d[m++]/255*8.12;o[0]*=v,o[1]*=v,o[2]*=v,Ne.scaleAndAdd(f,f,o,yn(s,c)*-a[2]),p+=-a[2]}Ne.scaleAndAdd(l,l,f,1/p)}i[c*3]=l[0]/6,i[c*3+1]=l[1]/6,i[c*3+2]=l[2]/6}return i}_n.projectEnvironmentMap=function(e,t,n){n||={},n.lod=n.lod||0;var r,i=new wt,a=64;t.textureType===`texture2D`?r=new jt({scene:i,environmentMap:t}):(a=t.image&&t.image.px?t.image.px.width:t.width,r=new At({scene:i,environmentMap:t}));var o=Math.ceil(a/2**n.lod),s=Math.ceil(a/2**n.lod),c=new U({width:o,height:s}),l=new et;r.material.define(`fragment`,`RGBM_ENCODE`),n.decodeRGBM&&r.material.define(`fragment`,`RGBM_DECODE`),r.material.set(`lod`,n.lod);for(var u=new Dt({texture:c}),d={},f=0;f<vn.length;f++){d[vn[f]]=new Uint8Array(o*s*4);var p=u.getCamera(vn[f]);p.fov=90,l.attach(c),l.bind(e),e.render(i,p),e.gl.readPixels(0,0,o,s,H.RGBA,H.UNSIGNED_BYTE,d[vn[f]]),l.unbind(e)}return r.dispose(e),l.dispose(e),c.dispose(e),xn(e,d,o,s)};var G={firstNotNull:function(){for(var e=0,t=arguments.length;e<t;e++)if(arguments[e]!=null)return arguments[e]},queryDataIndex:function(e,t){if(t.dataIndexInside!=null)return t.dataIndexInside;if(t.dataIndex!=null)return we(t.dataIndex)?ke(t.dataIndex,function(t){return e.indexOfRawIndex(t)}):e.indexOfRawIndex(t.dataIndex);if(t.name!=null)return we(t.name)?ke(t.name,function(t){return e.indexOfName(t)}):e.indexOfName(t.name)}},Sn=V.extend({dynamic:!1,widthSegments:40,heightSegments:20,phiStart:0,phiLength:Math.PI*2,thetaStart:0,thetaLength:Math.PI,radius:1},function(){this.build()},{build:function(){var e=this.heightSegments,t=this.widthSegments,n=this.attributes.position,r=this.attributes.texcoord0,i=this.attributes.normal,a=(t+1)*(e+1);n.init(a),r.init(a),i.init(a);var o=a>65535?Uint32Array:Uint16Array,s=this.indices=new o(t*e*6),c,l,u,d,f,p,m,h=this.radius,g=this.phiStart,_=this.phiLength,v=this.thetaStart,y=this.thetaLength,h=this.radius,b=[],x=[],S=0,C=1/h;for(m=0;m<=e;m++)for(p=0;p<=t;p++)d=p/t,f=m/e,c=-h*Math.cos(g+d*_)*Math.sin(v+f*y),l=h*Math.cos(v+f*y),u=h*Math.sin(g+d*_)*Math.sin(v+f*y),b[0]=c,b[1]=l,b[2]=u,x[0]=d,x[1]=f,n.set(S,b),r.set(S,x),b[0]*=C,b[1]*=C,b[2]*=C,i.set(S,b),S++;var w,T,E,D,O=t+1,k=0;for(m=0;m<e;m++)for(p=0;p<t;p++)T=m*O+p,w=m*O+p+1,D=(m+1)*O+p+1,E=(m+1)*O+p,s[k++]=w,s[k++]=T,s[k++]=D,s[k++]=T,s[k++]=E,s[k++]=D;this.boundingBox=new at,this.boundingBox.max.set(h,h,h),this.boundingBox.min.set(-h,-h,-h)}}),Cn=vt.extend({castShadow:!1},{type:`AMBIENT_LIGHT`,uniformTemplates:{ambientLightColor:{type:`3f`,value:function(e){var t=e.color,n=e.intensity;return[t[0]*n,t[1]*n,t[2]*n]}}}}),wn=vt.extend({shadowBias:.001,shadowSlopeScale:2,shadowCascade:1,cascadeSplitLogFactor:.2},{type:`DIRECTIONAL_LIGHT`,uniformTemplates:{directionalLightDirection:{type:`3f`,value:function(e){return e.__dir=e.__dir||new z,e.__dir.copy(e.worldTransform.z).normalize().negate().array}},directionalLightColor:{type:`3f`,value:function(e){var t=e.color,n=e.intensity;return[t[0]*n,t[1]*n,t[2]*n]}}},clone:function(){var e=vt.prototype.clone.call(this);return e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),Tn=vt.extend({range:100,castShadow:!1},{type:`POINT_LIGHT`,uniformTemplates:{pointLightPosition:{type:`3f`,value:function(e){return e.getWorldPosition().array}},pointLightRange:{type:`1f`,value:function(e){return e.range}},pointLightColor:{type:`3f`,value:function(e){var t=e.color,n=e.intensity;return[t[0]*n,t[1]*n,t[2]*n]}}},clone:function(){var e=vt.prototype.clone.call(this);return e.range=this.range,e}}),En=vt.extend({range:20,umbraAngle:30,penumbraAngle:45,falloffFactor:2,shadowBias:.001,shadowSlopeScale:2},{type:`SPOT_LIGHT`,uniformTemplates:{spotLightPosition:{type:`3f`,value:function(e){return e.getWorldPosition().array}},spotLightRange:{type:`1f`,value:function(e){return e.range}},spotLightUmbraAngleCosine:{type:`1f`,value:function(e){return Math.cos(e.umbraAngle*Math.PI/180)}},spotLightPenumbraAngleCosine:{type:`1f`,value:function(e){return Math.cos(e.penumbraAngle*Math.PI/180)}},spotLightFalloffFactor:{type:`1f`,value:function(e){return e.falloffFactor}},spotLightDirection:{type:`3f`,value:function(e){return e.__dir=e.__dir||new z,e.__dir.copy(e.worldTransform.z).negate().array}},spotLightColor:{type:`3f`,value:function(e){var t=e.color,n=e.intensity;return[t[0]*n,t[1]*n,t[2]*n]}}},clone:function(){var e=vt.prototype.clone.call(this);return e.range=this.range,e.umbraAngle=this.umbraAngle,e.penumbraAngle=this.penumbraAngle,e.falloffFactor=this.falloffFactor,e.shadowBias=this.shadowBias,e.shadowSlopeScale=this.shadowSlopeScale,e}}),K=function(e,t,n,r){e||=0,t||=0,n||=0,r||=0,this.array=L.fromValues(e,t,n,r),this._dirty=!0};K.prototype={constructor:K,add:function(e){return L.add(this.array,this.array,e.array),this._dirty=!0,this},set:function(e,t,n,r){return this.array[0]=e,this.array[1]=t,this.array[2]=n,this.array[3]=r,this._dirty=!0,this},setArray:function(e){return this.array[0]=e[0],this.array[1]=e[1],this.array[2]=e[2],this.array[3]=e[3],this._dirty=!0,this},clone:function(){return new K(this.x,this.y,this.z,this.w)},copy:function(e){return L.copy(this.array,e.array),this._dirty=!0,this},dist:function(e){return L.dist(this.array,e.array)},distance:function(e){return L.distance(this.array,e.array)},div:function(e){return L.div(this.array,this.array,e.array),this._dirty=!0,this},divide:function(e){return L.divide(this.array,this.array,e.array),this._dirty=!0,this},dot:function(e){return L.dot(this.array,e.array)},len:function(){return L.len(this.array)},length:function(){return L.length(this.array)},lerp:function(e,t,n){return L.lerp(this.array,e.array,t.array,n),this._dirty=!0,this},min:function(e){return L.min(this.array,this.array,e.array),this._dirty=!0,this},max:function(e){return L.max(this.array,this.array,e.array),this._dirty=!0,this},mul:function(e){return L.mul(this.array,this.array,e.array),this._dirty=!0,this},multiply:function(e){return L.multiply(this.array,this.array,e.array),this._dirty=!0,this},negate:function(){return L.negate(this.array,this.array),this._dirty=!0,this},normalize:function(){return L.normalize(this.array,this.array),this._dirty=!0,this},random:function(e){return L.random(this.array,e),this._dirty=!0,this},scale:function(e){return L.scale(this.array,this.array,e),this._dirty=!0,this},scaleAndAdd:function(e,t){return L.scaleAndAdd(this.array,this.array,e.array,t),this._dirty=!0,this},sqrDist:function(e){return L.sqrDist(this.array,e.array)},squaredDistance:function(e){return L.squaredDistance(this.array,e.array)},sqrLen:function(){return L.sqrLen(this.array)},squaredLength:function(){return L.squaredLength(this.array)},sub:function(e){return L.sub(this.array,this.array,e.array),this._dirty=!0,this},subtract:function(e){return L.subtract(this.array,this.array,e.array),this._dirty=!0,this},transformMat4:function(e){return L.transformMat4(this.array,this.array,e.array),this._dirty=!0,this},transformQuat:function(e){return L.transformQuat(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return`[`+Array.prototype.join.call(this.array,`,`)+`]`},toArray:function(){return Array.prototype.slice.call(this.array)}};var Dn=Object.defineProperty;if(Dn){var On=K.prototype;Dn(On,`x`,{get:function(){return this.array[0]},set:function(e){this.array[0]=e,this._dirty=!0}}),Dn(On,`y`,{get:function(){return this.array[1]},set:function(e){this.array[1]=e,this._dirty=!0}}),Dn(On,`z`,{get:function(){return this.array[2]},set:function(e){this.array[2]=e,this._dirty=!0}}),Dn(On,`w`,{get:function(){return this.array[3]},set:function(e){this.array[3]=e,this._dirty=!0}})}K.add=function(e,t,n){return L.add(e.array,t.array,n.array),e._dirty=!0,e},K.set=function(e,t,n,r,i){L.set(e.array,t,n,r,i),e._dirty=!0},K.copy=function(e,t){return L.copy(e.array,t.array),e._dirty=!0,e},K.dist=function(e,t){return L.distance(e.array,t.array)},K.distance=K.dist,K.div=function(e,t,n){return L.divide(e.array,t.array,n.array),e._dirty=!0,e},K.divide=K.div,K.dot=function(e,t){return L.dot(e.array,t.array)},K.len=function(e){return L.length(e.array)},K.lerp=function(e,t,n,r){return L.lerp(e.array,t.array,n.array,r),e._dirty=!0,e},K.min=function(e,t,n){return L.min(e.array,t.array,n.array),e._dirty=!0,e},K.max=function(e,t,n){return L.max(e.array,t.array,n.array),e._dirty=!0,e},K.mul=function(e,t,n){return L.multiply(e.array,t.array,n.array),e._dirty=!0,e},K.multiply=K.mul,K.negate=function(e,t){return L.negate(e.array,t.array),e._dirty=!0,e},K.normalize=function(e,t){return L.normalize(e.array,t.array),e._dirty=!0,e},K.random=function(e,t){return L.random(e.array,t),e._dirty=!0,e},K.scale=function(e,t,n){return L.scale(e.array,t.array,n),e._dirty=!0,e},K.scaleAndAdd=function(e,t,n,r){return L.scaleAndAdd(e.array,t.array,n.array,r),e._dirty=!0,e},K.sqrDist=function(e,t){return L.sqrDist(e.array,t.array)},K.squaredDistance=K.sqrDist,K.sqrLen=function(e){return L.sqrLen(e.array)},K.squaredLength=K.sqrLen,K.sub=function(e,t,n){return L.subtract(e.array,t.array,n.array),e._dirty=!0,e},K.subtract=K.sub,K.transformMat4=function(e,t,n){return L.transformMat4(e.array,t.array,n.array),e._dirty=!0,e},K.transformQuat=function(e,t,n){return L.transformQuat(e.array,t.array,n.array),e._dirty=!0,e};var q={};q.create=function(){var e=new ze(4);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},q.clone=function(e){var t=new ze(4);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t},q.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e},q.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e},q.transpose=function(e,t){if(e===t){var n=t[1];e[1]=t[2],e[2]=n}else e[0]=t[0],e[1]=t[2],e[2]=t[1],e[3]=t[3];return e},q.invert=function(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=n*a-i*r;return o?(o=1/o,e[0]=a*o,e[1]=-r*o,e[2]=-i*o,e[3]=n*o,e):null},q.adjoint=function(e,t){var n=t[0];return e[0]=t[3],e[1]=-t[1],e[2]=-t[2],e[3]=n,e},q.determinant=function(e){return e[0]*e[3]-e[2]*e[1]},q.multiply=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1],l=n[2],u=n[3];return e[0]=r*s+a*c,e[1]=i*s+o*c,e[2]=r*l+a*u,e[3]=i*l+o*u,e},q.mul=q.multiply,q.rotate=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=Math.sin(n),c=Math.cos(n);return e[0]=r*c+a*s,e[1]=i*c+o*s,e[2]=r*-s+a*c,e[3]=i*-s+o*c,e},q.scale=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=n[0],c=n[1];return e[0]=r*s,e[1]=i*s,e[2]=a*c,e[3]=o*c,e},q.frob=function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2)},q.LDU=function(e,t,n,r){return e[2]=r[2]/r[0],n[0]=r[0],n[1]=r[1],n[3]=r[3]-e[2]*n[1],[e,t,n]};var kn=function(){this.array=q.create(),this._dirty=!0};kn.prototype={constructor:kn,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new kn().copy(this)},copy:function(e){return q.copy(this.array,e.array),this._dirty=!0,this},adjoint:function(){return q.adjoint(this.array,this.array),this._dirty=!0,this},determinant:function(){return q.determinant(this.array)},identity:function(){return q.identity(this.array),this._dirty=!0,this},invert:function(){return q.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return q.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return q.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return q.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return q.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return q.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return q.scale(this.array,this.array,e.array),this._dirty=!0,this},transpose:function(){return q.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return`[`+Array.prototype.join.call(this.array,`,`)+`]`},toArray:function(){return Array.prototype.slice.call(this.array)}},kn.adjoint=function(e,t){return q.adjoint(e.array,t.array),e._dirty=!0,e},kn.copy=function(e,t){return q.copy(e.array,t.array),e._dirty=!0,e},kn.determinant=function(e){return q.determinant(e.array)},kn.identity=function(e){return q.identity(e.array),e._dirty=!0,e},kn.invert=function(e,t){return q.invert(e.array,t.array),e._dirty=!0,e},kn.mul=function(e,t,n){return q.mul(e.array,t.array,n.array),e._dirty=!0,e},kn.multiply=kn.mul,kn.rotate=function(e,t,n){return q.rotate(e.array,t.array,n),e._dirty=!0,e},kn.scale=function(e,t,n){return q.scale(e.array,t.array,n.array),e._dirty=!0,e},kn.transpose=function(e,t){return q.transpose(e.array,t.array),e._dirty=!0,e};var J={};J.create=function(){var e=new ze(6);return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},J.clone=function(e){var t=new ze(6);return t[0]=e[0],t[1]=e[1],t[2]=e[2],t[3]=e[3],t[4]=e[4],t[5]=e[5],t},J.copy=function(e,t){return e[0]=t[0],e[1]=t[1],e[2]=t[2],e[3]=t[3],e[4]=t[4],e[5]=t[5],e},J.identity=function(e){return e[0]=1,e[1]=0,e[2]=0,e[3]=1,e[4]=0,e[5]=0,e},J.invert=function(e,t){var n=t[0],r=t[1],i=t[2],a=t[3],o=t[4],s=t[5],c=n*a-r*i;return c?(c=1/c,e[0]=a*c,e[1]=-r*c,e[2]=-i*c,e[3]=n*c,e[4]=(i*s-a*o)*c,e[5]=(r*o-n*s)*c,e):null},J.determinant=function(e){return e[0]*e[3]-e[1]*e[2]},J.multiply=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=n[0],u=n[1],d=n[2],f=n[3],p=n[4],m=n[5];return e[0]=r*l+a*u,e[1]=i*l+o*u,e[2]=r*d+a*f,e[3]=i*d+o*f,e[4]=r*p+a*m+s,e[5]=i*p+o*m+c,e},J.mul=J.multiply,J.rotate=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=Math.sin(n),u=Math.cos(n);return e[0]=r*u+a*l,e[1]=i*u+o*l,e[2]=r*-l+a*u,e[3]=i*-l+o*u,e[4]=s,e[5]=c,e},J.scale=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=n[0],u=n[1];return e[0]=r*l,e[1]=i*l,e[2]=a*u,e[3]=o*u,e[4]=s,e[5]=c,e},J.translate=function(e,t,n){var r=t[0],i=t[1],a=t[2],o=t[3],s=t[4],c=t[5],l=n[0],u=n[1];return e[0]=r,e[1]=i,e[2]=a,e[3]=o,e[4]=r*l+a*u+s,e[5]=i*l+o*u+c,e},J.frob=function(e){return Math.sqrt(e[0]**2+e[1]**2+e[2]**2+e[3]**2+e[4]**2+e[5]**2+1)};var An=function(){this.array=J.create(),this._dirty=!0};An.prototype={constructor:An,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},clone:function(){return new An().copy(this)},copy:function(e){return J.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return J.determinant(this.array)},identity:function(){return J.identity(this.array),this._dirty=!0,this},invert:function(){return J.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return J.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return J.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return J.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return J.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return J.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return J.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return J.translate(this.array,this.array,e.array),this._dirty=!0,this},toString:function(){return`[`+Array.prototype.join.call(this.array,`,`)+`]`},toArray:function(){return Array.prototype.slice.call(this.array)}},An.copy=function(e,t){return J.copy(e.array,t.array),e._dirty=!0,e},An.determinant=function(e){return J.determinant(e.array)},An.identity=function(e){return J.identity(e.array),e._dirty=!0,e},An.invert=function(e,t){return J.invert(e.array,t.array),e._dirty=!0,e},An.mul=function(e,t,n){return J.mul(e.array,t.array,n.array),e._dirty=!0,e},An.multiply=An.mul,An.rotate=function(e,t,n){return J.rotate(e.array,t.array,n),e._dirty=!0,e},An.scale=function(e,t,n){return J.scale(e.array,t.array,n.array),e._dirty=!0,e},An.translate=function(e,t,n){return J.translate(e.array,t.array,n.array),e._dirty=!0,e};var jn=function(){this.array=R.create(),this._dirty=!0};jn.prototype={constructor:jn,setArray:function(e){for(var t=0;t<this.array.length;t++)this.array[t]=e[t];return this._dirty=!0,this},adjoint:function(){return R.adjoint(this.array,this.array),this._dirty=!0,this},clone:function(){return new jn().copy(this)},copy:function(e){return R.copy(this.array,e.array),this._dirty=!0,this},determinant:function(){return R.determinant(this.array)},fromMat2d:function(e){return R.fromMat2d(this.array,e.array),this._dirty=!0,this},fromMat4:function(e){return R.fromMat4(this.array,e.array),this._dirty=!0,this},fromQuat:function(e){return R.fromQuat(this.array,e.array),this._dirty=!0,this},identity:function(){return R.identity(this.array),this._dirty=!0,this},invert:function(){return R.invert(this.array,this.array),this._dirty=!0,this},mul:function(e){return R.mul(this.array,this.array,e.array),this._dirty=!0,this},mulLeft:function(e){return R.mul(this.array,e.array,this.array),this._dirty=!0,this},multiply:function(e){return R.multiply(this.array,this.array,e.array),this._dirty=!0,this},multiplyLeft:function(e){return R.multiply(this.array,e.array,this.array),this._dirty=!0,this},rotate:function(e){return R.rotate(this.array,this.array,e),this._dirty=!0,this},scale:function(e){return R.scale(this.array,this.array,e.array),this._dirty=!0,this},translate:function(e){return R.translate(this.array,this.array,e.array),this._dirty=!0,this},normalFromMat4:function(e){return R.normalFromMat4(this.array,e.array),this._dirty=!0,this},transpose:function(){return R.transpose(this.array,this.array),this._dirty=!0,this},toString:function(){return`[`+Array.prototype.join.call(this.array,`,`)+`]`},toArray:function(){return Array.prototype.slice.call(this.array)}},jn.adjoint=function(e,t){return R.adjoint(e.array,t.array),e._dirty=!0,e},jn.copy=function(e,t){return R.copy(e.array,t.array),e._dirty=!0,e},jn.determinant=function(e){return R.determinant(e.array)},jn.identity=function(e){return R.identity(e.array),e._dirty=!0,e},jn.invert=function(e,t){return R.invert(e.array,t.array),e},jn.mul=function(e,t,n){return R.mul(e.array,t.array,n.array),e._dirty=!0,e},jn.multiply=jn.mul,jn.fromMat2d=function(e,t){return R.fromMat2d(e.array,t.array),e._dirty=!0,e},jn.fromMat4=function(e,t){return R.fromMat4(e.array,t.array),e._dirty=!0,e},jn.fromQuat=function(e,t){return R.fromQuat(e.array,t.array),e._dirty=!0,e},jn.normalFromMat4=function(e,t){return R.normalFromMat4(e.array,t.array),e._dirty=!0,e},jn.rotate=function(e,t,n){return R.rotate(e.array,t.array,n),e._dirty=!0,e},jn.scale=function(e,t,n){return R.scale(e.array,t.array,n.array),e._dirty=!0,e},jn.transpose=function(e,t){return R.transpose(e.array,t.array),e._dirty=!0,e},jn.translate=function(e,t,n){return R.translate(e.array,t.array,n.array),e._dirty=!0,e};var Mn={_animators:null,getAnimators:function(){return this._animators=this._animators||[],this._animators},animate:function(e,t){this._animators=this._animators||[];var n=this,r;if(e){for(var i=e.split(`.`),a=n,o=0,s=i.length;o<s;o++)a&&=a[i[o]];a&&(r=a)}else r=n;if(r==null)throw Error(`Target `+e+` not exists`);var c=this._animators,l=new be(r,t),u=this;return l.during(function(){u.__zr&&u.__zr.refresh()}).done(function(){var e=c.indexOf(l);e>=0&&c.splice(e,1)}),c.push(l),this.__zr&&this.__zr.animation.addAnimator(l),l},stopAnimation:function(e){this._animators=this._animators||[];for(var t=this._animators,n=t.length,r=0;r<n;r++)t[r].stop(e);return t.length=0,this},addAnimatorsToZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.addAnimator(this._animators[t])},removeAnimatorsFromZr:function(e){if(this._animators)for(var t=0;t<this._animators.length;t++)e.animation.removeAnimator(this._animators[t])}},Nn=`
@export clay.util.rand
highp float rand(vec2 uv) {
 const highp float a = 12.9898, b = 78.233, c = 43758.5453;
 highp float dt = dot(uv.xy, vec2(a,b)), sn = mod(dt, 3.141592653589793);
 return fract(sin(sn) * c);
}
@end
@export clay.util.calculate_attenuation
uniform float attenuationFactor : 5.0;
float lightAttenuation(float dist, float range)
{
 float attenuation = 1.0;
 attenuation = dist*dist/(range*range+1.0);
 float att_s = attenuationFactor;
 attenuation = 1.0/(attenuation*att_s+1.0);
 att_s = 1.0/(att_s+1.0);
 attenuation = attenuation - att_s;
 attenuation /= 1.0 - att_s;
 return clamp(attenuation, 0.0, 1.0);
}
@end
@export clay.util.edge_factor
#ifdef SUPPORT_STANDARD_DERIVATIVES
float edgeFactor(float width)
{
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * width, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#else
float edgeFactor(float width)
{
 return 1.0;
}
#endif
@end
@export clay.util.encode_float
vec4 encodeFloat(const in float depth)
{
 const vec4 bitShifts = vec4(256.0*256.0*256.0, 256.0*256.0, 256.0, 1.0);
 const vec4 bit_mask = vec4(0.0, 1.0/256.0, 1.0/256.0, 1.0/256.0);
 vec4 res = fract(depth * bitShifts);
 res -= res.xxyz * bit_mask;
 return res;
}
@end
@export clay.util.decode_float
float decodeFloat(const in vec4 color)
{
 const vec4 bitShifts = vec4(1.0/(256.0*256.0*256.0), 1.0/(256.0*256.0), 1.0/256.0, 1.0);
 return dot(color, bitShifts);
}
@end
@export clay.util.float
@import clay.util.encode_float
@import clay.util.decode_float
@end
@export clay.util.rgbm_decode
vec3 RGBMDecode(vec4 rgbm, float range) {
 return range * rgbm.rgb * rgbm.a;
}
@end
@export clay.util.rgbm_encode
vec4 RGBMEncode(vec3 color, float range) {
 if (dot(color, color) == 0.0) {
 return vec4(0.0);
 }
 vec4 rgbm;
 color /= range;
 rgbm.a = clamp(max(max(color.r, color.g), max(color.b, 1e-6)), 0.0, 1.0);
 rgbm.a = ceil(rgbm.a * 255.0) / 255.0;
 rgbm.rgb = color / rgbm.a;
 return rgbm;
}
@end
@export clay.util.rgbm
@import clay.util.rgbm_decode
@import clay.util.rgbm_encode
vec4 decodeHDR(vec4 color)
{
#if defined(RGBM_DECODE) || defined(RGBM)
 return vec4(RGBMDecode(color, 8.12), 1.0);
#else
 return color;
#endif
}
vec4 encodeHDR(vec4 color)
{
#if defined(RGBM_ENCODE) || defined(RGBM)
 return RGBMEncode(color.xyz, 8.12);
#else
 return color;
#endif
}
@end
@export clay.util.srgb
vec4 sRGBToLinear(in vec4 value) {
 return vec4(mix(pow(value.rgb * 0.9478672986 + vec3(0.0521327014), vec3(2.4)), value.rgb * 0.0773993808, vec3(lessThanEqual(value.rgb, vec3(0.04045)))), value.w);
}
vec4 linearTosRGB(in vec4 value) {
 return vec4(mix(pow(value.rgb, vec3(0.41666)) * 1.055 - vec3(0.055), value.rgb * 12.92, vec3(lessThanEqual(value.rgb, vec3(0.0031308)))), value.w);
}
@end
@export clay.chunk.skinning_header
#ifdef SKINNING
attribute vec3 weight : WEIGHT;
attribute vec4 joint : JOINT;
#ifdef USE_SKIN_MATRICES_TEXTURE
uniform sampler2D skinMatricesTexture : ignore;
uniform float skinMatricesTextureSize: ignore;
mat4 getSkinMatrix(sampler2D tex, float idx) {
 float j = idx * 4.0;
 float x = mod(j, skinMatricesTextureSize);
 float y = floor(j / skinMatricesTextureSize) + 0.5;
 vec2 scale = vec2(skinMatricesTextureSize);
 return mat4(
 texture2D(tex, vec2(x + 0.5, y) / scale),
 texture2D(tex, vec2(x + 1.5, y) / scale),
 texture2D(tex, vec2(x + 2.5, y) / scale),
 texture2D(tex, vec2(x + 3.5, y) / scale)
 );
}
mat4 getSkinMatrix(float idx) {
 return getSkinMatrix(skinMatricesTexture, idx);
}
#else
uniform mat4 skinMatrix[JOINT_COUNT] : SKIN_MATRIX;
mat4 getSkinMatrix(float idx) {
 return skinMatrix[int(idx)];
}
#endif
#endif
@end
@export clay.chunk.skin_matrix
mat4 skinMatrixWS = getSkinMatrix(joint.x) * weight.x;
if (weight.y > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.y) * weight.y;
}
if (weight.z > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.z) * weight.z;
}
float weightW = 1.0-weight.x-weight.y-weight.z;
if (weightW > 1e-4)
{
 skinMatrixWS += getSkinMatrix(joint.w) * weightW;
}
@end
@export clay.chunk.instancing_header
#ifdef INSTANCING
attribute vec4 instanceMat1;
attribute vec4 instanceMat2;
attribute vec4 instanceMat3;
#endif
@end
@export clay.chunk.instancing_matrix
mat4 instanceMat = mat4(
 vec4(instanceMat1.xyz, 0.0),
 vec4(instanceMat2.xyz, 0.0),
 vec4(instanceMat3.xyz, 0.0),
 vec4(instanceMat1.w, instanceMat2.w, instanceMat3.w, 1.0)
);
@end
@export clay.util.parallax_correct
vec3 parallaxCorrect(in vec3 dir, in vec3 pos, in vec3 boxMin, in vec3 boxMax) {
 vec3 first = (boxMax - pos) / dir;
 vec3 second = (boxMin - pos) / dir;
 vec3 further = max(first, second);
 float dist = min(further.x, min(further.y, further.z));
 vec3 fixedPos = pos + dir * dist;
 vec3 boxCenter = (boxMax + boxMin) * 0.5;
 return normalize(fixedPos - boxCenter);
}
@end
@export clay.util.clamp_sample
vec4 clampSample(const in sampler2D texture, const in vec2 coord)
{
#ifdef STEREO
 float eye = step(0.5, coord.x) * 0.5;
 vec2 coordClamped = clamp(coord, vec2(eye, 0.0), vec2(0.5 + eye, 1.0));
#else
 vec2 coordClamped = clamp(coord, vec2(0.0), vec2(1.0));
#endif
 return texture2D(texture, coordClamped);
}
@end
@export clay.util.ACES
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
@end`;Object.assign(Ue.prototype,Mn),I.import(Nn),I.import(Xe),I.import(`
@export ecgl.common.transformUniforms
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
uniform mat4 world : WORLD;
@end

@export ecgl.common.attributes
attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 normal : NORMAL;
@end

@export ecgl.common.uv.header
uniform vec2 uvRepeat : [1.0, 1.0];
uniform vec2 uvOffset : [0.0, 0.0];
uniform vec2 detailUvRepeat : [1.0, 1.0];
uniform vec2 detailUvOffset : [0.0, 0.0];

varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end

@export ecgl.common.uv.main
v_Texcoord = texcoord * uvRepeat + uvOffset;
v_DetailTexcoord = texcoord * detailUvRepeat + detailUvOffset;
@end

@export ecgl.common.uv.fragmentHeader
varying vec2 v_Texcoord;
varying vec2 v_DetailTexcoord;
@end


@export ecgl.common.albedo.main

 vec4 albedoTexel = vec4(1.0);
#ifdef DIFFUSEMAP_ENABLED
 albedoTexel = texture2D(diffuseMap, v_Texcoord);
 #ifdef SRGB_DECODE
 albedoTexel = sRGBToLinear(albedoTexel);
 #endif
#endif

#ifdef DETAILMAP_ENABLED
 vec4 detailTexel = texture2D(detailMap, v_DetailTexcoord);
 #ifdef SRGB_DECODE
 detailTexel = sRGBToLinear(detailTexel);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, detailTexel.rgb, detailTexel.a);
 albedoTexel.a = detailTexel.a + (1.0 - detailTexel.a) * albedoTexel.a;
#endif

@end

@export ecgl.common.wireframe.vertexHeader

#ifdef WIREFRAME_QUAD
attribute vec4 barycentric;
varying vec4 v_Barycentric;
#elif defined(WIREFRAME_TRIANGLE)
attribute vec3 barycentric;
varying vec3 v_Barycentric;
#endif

@end

@export ecgl.common.wireframe.vertexMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 v_Barycentric = barycentric;
#endif

@end


@export ecgl.common.wireframe.fragmentHeader

uniform float wireframeLineWidth : 1;
uniform vec4 wireframeLineColor: [0, 0, 0, 0.5];

#ifdef WIREFRAME_QUAD
varying vec4 v_Barycentric;
float edgeFactor () {
 vec4 d = fwidth(v_Barycentric);
 vec4 a4 = smoothstep(vec4(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(min(a4.x, a4.y), a4.z), a4.w);
}
#elif defined(WIREFRAME_TRIANGLE)
varying vec3 v_Barycentric;
float edgeFactor () {
 vec3 d = fwidth(v_Barycentric);
 vec3 a3 = smoothstep(vec3(0.0), d * wireframeLineWidth, v_Barycentric);
 return min(min(a3.x, a3.y), a3.z);
}
#endif

@end


@export ecgl.common.wireframe.fragmentMain

#if defined(WIREFRAME_QUAD) || defined(WIREFRAME_TRIANGLE)
 if (wireframeLineWidth > 0.) {
 vec4 lineColor = wireframeLineColor;
#ifdef SRGB_DECODE
 lineColor = sRGBToLinear(lineColor);
#endif

 gl_FragColor.rgb = mix(gl_FragColor.rgb, lineColor.rgb, (1.0 - edgeFactor()) * lineColor.a);
 }
#endif
@end




@export ecgl.common.bumpMap.header

#ifdef BUMPMAP_ENABLED
uniform sampler2D bumpMap;
uniform float bumpScale : 1.0;


vec3 bumpNormal(vec3 surfPos, vec3 surfNormal, vec3 baseNormal)
{
 vec2 dSTdx = dFdx(v_Texcoord);
 vec2 dSTdy = dFdy(v_Texcoord);

 float Hll = bumpScale * texture2D(bumpMap, v_Texcoord).x;
 float dHx = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdx).x - Hll;
 float dHy = bumpScale * texture2D(bumpMap, v_Texcoord + dSTdy).x - Hll;

 vec3 vSigmaX = dFdx(surfPos);
 vec3 vSigmaY = dFdy(surfPos);
 vec3 vN = surfNormal;

 vec3 R1 = cross(vSigmaY, vN);
 vec3 R2 = cross(vN, vSigmaX);

 float fDet = dot(vSigmaX, R1);

 vec3 vGrad = sign(fDet) * (dHx * R1 + dHy * R2);
 return normalize(abs(fDet) * baseNormal - vGrad);

}
#endif

@end

@export ecgl.common.normalMap.vertexHeader

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.vertexMain

#ifdef NORMALMAP_ENABLED
 if (dot(tangent, tangent) > 0.0) {
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
 }
#endif

@end


@export ecgl.common.normalMap.fragmentHeader

#ifdef NORMALMAP_ENABLED
uniform sampler2D normalMap;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@end

@export ecgl.common.normalMap.fragmentMain
#ifdef NORMALMAP_ENABLED
 if (dot(v_Tangent, v_Tangent) > 0.0) {
 vec3 normalTexel = texture2D(normalMap, v_DetailTexcoord).xyz;
 if (dot(normalTexel, normalTexel) > 0.0) { N = normalTexel * 2.0 - 1.0;
 mat3 tbn = mat3(v_Tangent, v_Bitangent, v_Normal);
 N = normalize(tbn * N);
 }
 }
#endif
@end



@export ecgl.common.vertexAnimation.header

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevNormal;
uniform float percent;
#endif

@end

@export ecgl.common.vertexAnimation.main

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 vec3 norm = mix(prevNormal, normal, percent);
#else
 vec3 pos = position;
 vec3 norm = normal;
#endif

@end


@export ecgl.common.ssaoMap.header
#ifdef SSAOMAP_ENABLED
uniform sampler2D ssaoMap;
uniform vec4 viewport : VIEWPORT;
#endif
@end

@export ecgl.common.ssaoMap.main
 float ao = 1.0;
#ifdef SSAOMAP_ENABLED
 ao = texture2D(ssaoMap, (gl_FragCoord.xy - viewport.xy) / viewport.zw).r;
#endif
@end




@export ecgl.common.diffuseLayer.header

#if (LAYER_DIFFUSEMAP_COUNT > 0)
uniform float layerDiffuseIntensity[LAYER_DIFFUSEMAP_COUNT];
uniform sampler2D layerDiffuseMap[LAYER_DIFFUSEMAP_COUNT];
#endif

@end

@export ecgl.common.emissiveLayer.header

#if (LAYER_EMISSIVEMAP_COUNT > 0)
uniform float layerEmissionIntensity[LAYER_EMISSIVEMAP_COUNT];
uniform sampler2D layerEmissiveMap[LAYER_EMISSIVEMAP_COUNT];
#endif

@end

@export ecgl.common.layers.header
@import ecgl.common.diffuseLayer.header
@import ecgl.common.emissiveLayer.header
@end

@export ecgl.common.diffuseLayer.main

#if (LAYER_DIFFUSEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_DIFFUSEMAP_COUNT; _idx_++) {{
 float intensity = layerDiffuseIntensity[_idx_];
 vec4 texel2 = texture2D(layerDiffuseMap[_idx_], v_Texcoord);
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 albedoTexel.rgb = mix(albedoTexel.rgb, texel2.rgb * intensity, texel2.a);
 albedoTexel.a = texel2.a + (1.0 - texel2.a) * albedoTexel.a;
 }}
#endif

@end

@export ecgl.common.emissiveLayer.main

#if (LAYER_EMISSIVEMAP_COUNT > 0)
 for (int _idx_ = 0; _idx_ < LAYER_EMISSIVEMAP_COUNT; _idx_++)
 {{
 vec4 texel2 = texture2D(layerEmissiveMap[_idx_], v_Texcoord) * layerEmissionIntensity[_idx_];
 #ifdef SRGB_DECODE
 texel2 = sRGBToLinear(texel2);
 #endif
 float intensity = layerEmissionIntensity[_idx_];
 gl_FragColor.rgb += texel2.rgb * texel2.a * intensity;
 }}
#endif

@end
`),I.import(`@export ecgl.color.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

@import ecgl.common.uv.header

attribute vec2 texcoord : TEXCOORD_0;
attribute vec3 position: POSITION;

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

#ifdef ATMOSPHERE_ENABLED
attribute vec3 normal: NORMAL;
uniform mat4 worldInverseTranspose : WORLDINVERSETRANSPOSE;
varying vec3 v_Normal;
#endif

void main()
{
#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 @import ecgl.common.uv.main

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef ATMOSPHERE_ENABLED
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end

@export ecgl.color.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
varying vec3 v_Normal;
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.layers.header

@import ecgl.common.uv.fragmentHeader

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain

}
@end`),I.import(`/**
 * http: */

@export ecgl.lambert.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header


@import ecgl.common.attributes

@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif


@import ecgl.common.vertexAnimation.header


varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{
 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main


 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

 @import ecgl.common.wireframe.vertexMain
}

@end


@export ecgl.lambert.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;
uniform sampler2D detailMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color);
#else
 gl_FragColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 gl_FragColor *= sRGBToLinear(v_Color);
 #else
 gl_FragColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 gl_FragColor *= albedoTexel;

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseColor = vec3(0.0, 0.0, 0.0);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 diffuseColor += ambientLightColor[i] * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseColor += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 vec3 lightColor = directionalLightColor[i];

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 diffuseColor += lightColor * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor.rgb *= diffuseColor;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`),I.import(`@export ecgl.realistic.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes


@import ecgl.common.wireframe.vertexHeader

#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

#ifdef NORMALMAP_ENABLED
attribute vec4 tangent : TANGENT;
varying vec3 v_Tangent;
varying vec3 v_Bitangent;
#endif

@import ecgl.common.vertexAnimation.header

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

void main()
{

 @import ecgl.common.uv.main

 @import ecgl.common.vertexAnimation.main

 gl_Position = worldViewProjection * vec4(pos, 1.0);

 v_Normal = normalize((worldInverseTranspose * vec4(norm, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif

#ifdef NORMALMAP_ENABLED
 v_Tangent = normalize((worldInverseTranspose * vec4(tangent.xyz, 0.0)).xyz);
 v_Bitangent = normalize(cross(v_Normal, v_Tangent) * tangent.w);
#endif

 @import ecgl.common.wireframe.vertexMain

}

@end



@export ecgl.realistic.fragment

#define LAYER_DIFFUSEMAP_COUNT 0
#define LAYER_EMISSIVEMAP_COUNT 0
#define PI 3.14159265358979
#define ROUGHNESS_CHANEL 0
#define METALNESS_CHANEL 1

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform sampler2D diffuseMap;

uniform sampler2D detailMap;
uniform sampler2D metalnessMap;
uniform sampler2D roughnessMap;

@import ecgl.common.layers.header

uniform float emissionIntensity: 1.0;

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

uniform float metalness : 0.0;
uniform float roughness : 0.5;

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef ATMOSPHERE_ENABLED
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform vec3 glowColor;
uniform float glowPower;
#endif

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
@import clay.header.ambient_cubemap_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.normalMap.fragmentHeader

@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import clay.util.rgbm

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}

float D_Phong(float g, float ndh) {
 float a = pow(8192.0, g);
 return (a + 2.0) / 8.0 * pow(ndh, a);
}

void main()
{
 vec4 albedoColor = color;

 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);
#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 albedoColor *= sRGBToLinear(v_Color);
 #else
 albedoColor *= v_Color;
 #endif
#endif

 @import ecgl.common.albedo.main

 @import ecgl.common.diffuseLayer.main

 albedoColor *= albedoTexel;

 float m = metalness;

#ifdef METALNESSMAP_ENABLED
 float m2 = texture2D(metalnessMap, v_DetailTexcoord)[METALNESS_CHANEL];
 m = clamp(m2 + (m - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 baseColor = albedoColor.rgb;
 albedoColor.rgb = baseColor * (1.0 - m);
 vec3 specFactor = mix(vec3(0.04), baseColor, m);

 float g = 1.0 - roughness;

#ifdef ROUGHNESSMAP_ENABLED
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
#endif

 vec3 N = v_Normal;

#ifdef DOUBLE_SIDED
 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

@import ecgl.common.normalMap.fragmentMain

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 vec3 diffuseTerm = vec3(0.0);
 vec3 specularTerm = vec3(0.0);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 vec3 fresnelTerm = F_Schlick(ndv, specFactor);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += ambientLightColor[_idx_] * ambientFactor * ao;
 }}
#endif

#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 diffuseTerm += calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_] * ao;
 }}
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int _idx_ = 0; _idx_ < DIRECTIONAL_LIGHT_COUNT; _idx_++)
 {{
 vec3 L = -directionalLightDirection[_idx_];
 vec3 lc = directionalLightColor[_idx_];

 vec3 H = normalize(L + V);
 float ndl = clamp(dot(N, normalize(L)), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[_idx_];
 }
#endif

 vec3 li = lc * ndl * shadowContrib;

 diffuseTerm += li;
 specularTerm += li * fresnelTerm * D_Phong(g, ndh);
 }}
#endif


#ifdef AMBIENT_CUBEMAP_LIGHT_COUNT
 vec3 L = reflect(-V, N);
 L = vec3(L.x, L[NORMAL_UP_AXIS], L[NORMAL_FRONT_AXIS]);
 float rough2 = clamp(1.0 - g, 0.0, 1.0);
 float bias2 = rough2 * 5.0;
 vec2 brdfParam2 = texture2D(ambientCubemapLightBRDFLookup[0], vec2(rough2, ndv)).xy;
 vec3 envWeight2 = specFactor * brdfParam2.x + brdfParam2.y;
 vec3 envTexel2;
 for(int _idx_ = 0; _idx_ < AMBIENT_CUBEMAP_LIGHT_COUNT; _idx_++)
 {{
 envTexel2 = RGBMDecode(textureCubeLodEXT(ambientCubemapLightCubemap[_idx_], L, bias2), 8.12);
 specularTerm += ambientCubemapLightColor[_idx_] * envTexel2 * envWeight2 * ao;
 }}
#endif

 gl_FragColor.rgb = albedoColor.rgb * diffuseTerm + specularTerm;
 gl_FragColor.a = albedoColor.a;

#ifdef ATMOSPHERE_ENABLED
 float atmoIntensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor.rgb += glowColor * atmoIntensity;
#endif

#ifdef SRGB_ENCODE
 gl_FragColor = linearTosRGB(gl_FragColor);
#endif

 @import ecgl.common.emissiveLayer.main

 @import ecgl.common.wireframe.fragmentMain
}

@end`),I.import(`@export ecgl.hatching.vertex

@import ecgl.realistic.vertex

@end


@export ecgl.hatching.fragment

#define NORMAL_UP_AXIS 1
#define NORMAL_FRONT_AXIS 2

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform vec4 color : [0.0, 0.0, 0.0, 1.0];
uniform vec4 paperColor : [1.0, 1.0, 1.0, 1.0];

uniform mat4 viewInverse : VIEWINVERSE;

#ifdef AMBIENT_LIGHT_COUNT
@import clay.header.ambient_light
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
@import clay.header.ambient_sh_light
#endif

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif


@import ecgl.common.ssaoMap.header

@import ecgl.common.bumpMap.header

@import clay.util.srgb

@import ecgl.common.wireframe.fragmentHeader

@import clay.plugin.compute_shadow_map

uniform sampler2D hatch1;
uniform sampler2D hatch2;
uniform sampler2D hatch3;
uniform sampler2D hatch4;
uniform sampler2D hatch5;
uniform sampler2D hatch6;

float shade(in float tone) {
 vec4 c = vec4(1. ,1., 1., 1.);
 float step = 1. / 6.;
 vec2 uv = v_DetailTexcoord;
 if (tone <= step / 2.0) {
 c = mix(vec4(0.), texture2D(hatch6, uv), 12. * tone);
 }
 else if (tone <= step) {
 c = mix(texture2D(hatch6, uv), texture2D(hatch5, uv), 6. * tone);
 }
 if(tone > step && tone <= 2. * step){
 c = mix(texture2D(hatch5, uv), texture2D(hatch4, uv) , 6. * (tone - step));
 }
 if(tone > 2. * step && tone <= 3. * step){
 c = mix(texture2D(hatch4, uv), texture2D(hatch3, uv), 6. * (tone - 2. * step));
 }
 if(tone > 3. * step && tone <= 4. * step){
 c = mix(texture2D(hatch3, uv), texture2D(hatch2, uv), 6. * (tone - 3. * step));
 }
 if(tone > 4. * step && tone <= 5. * step){
 c = mix(texture2D(hatch2, uv), texture2D(hatch1, uv), 6. * (tone - 4. * step));
 }
 if(tone > 5. * step){
 c = mix(texture2D(hatch1, uv), vec4(1.), 6. * (tone - 5. * step));
 }

 return c.r;
}

const vec3 w = vec3(0.2125, 0.7154, 0.0721);

void main()
{
#ifdef SRGB_DECODE
 vec4 inkColor = sRGBToLinear(color);
#else
 vec4 inkColor = color;
#endif

#ifdef VERTEX_COLOR
 #ifdef SRGB_DECODE
 inkColor *= sRGBToLinear(v_Color);
 #else
 inkColor *= v_Color;
 #endif
#endif

 vec3 N = v_Normal;
#ifdef DOUBLE_SIDED
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 N = -N;
 }
#endif

 float tone = 0.0;

 float ambientFactor = 1.0;

#ifdef BUMPMAP_ENABLED
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 ambientFactor = dot(v_Normal, N);
#endif

 vec3 N2 = vec3(N.x, N[NORMAL_UP_AXIS], N[NORMAL_FRONT_AXIS]);

 @import ecgl.common.ssaoMap.main

#ifdef AMBIENT_LIGHT_COUNT
 for(int i = 0; i < AMBIENT_LIGHT_COUNT; i++)
 {
 tone += dot(ambientLightColor[i], w) * ambientFactor * ao;
 }
#endif
#ifdef AMBIENT_SH_LIGHT_COUNT
 for(int _idx_ = 0; _idx_ < AMBIENT_SH_LIGHT_COUNT; _idx_++)
 {{
 tone += dot(calcAmbientSHLight(_idx_, N2) * ambientSHLightColor[_idx_], w) * ao;
 }}
#endif
#ifdef DIRECTIONAL_LIGHT_COUNT
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
#endif
 for(int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++)
 {
 vec3 lightDirection = -directionalLightDirection[i];
 float lightTone = dot(directionalLightColor[i], w);

 float shadowContrib = 1.0;
#if defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 if (shadowEnabled)
 {
 shadowContrib = shadowContribsDir[i];
 }
#endif

 float ndl = dot(N, normalize(lightDirection)) * shadowContrib;

 tone += lightTone * clamp(ndl, 0.0, 1.0);
 }
#endif

 gl_FragColor = mix(inkColor, paperColor, shade(clamp(tone, 0.0, 1.0)));
 }
@end
`),I.import(`@export ecgl.sm.depth.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position : POSITION;
attribute vec2 texcoord : TEXCOORD_0;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
uniform float percent : 1.0;
#endif

varying vec4 v_ViewPosition;
varying vec2 v_Texcoord;

void main(){

#ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
#else
 vec3 pos = position;
#endif

 v_ViewPosition = worldViewProjection * vec4(pos, 1.0);
 gl_Position = v_ViewPosition;

 v_Texcoord = texcoord;

}
@end



@export ecgl.sm.depth.fragment

@import clay.sm.depth.fragment

@end`);function Pn(e){return!e||e===`none`}function Fn(e){return e instanceof HTMLCanvasElement||e instanceof HTMLImageElement||e instanceof Image}function In(e){return e.getZr&&e.setOption}var Ln=wt.prototype.addToScene,Rn=wt.prototype.removeFromScene;wt.prototype.addToScene=function(e){if(Ln.call(this,e),this.__zr){var t=this.__zr;e.traverse(function(e){e.__zr=t,e.addAnimatorsToZr&&e.addAnimatorsToZr(t)})}},wt.prototype.removeFromScene=function(e){Rn.call(this,e),e.traverse(function(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)})},Ve.prototype.setTextureImage=function(e,t,n,r){if(this.shader){var i=n.getZr(),a=this,o;return a.autoUpdateTextureStatus=!1,a.disableTexture(e),Pn(t)||(o=Y.loadTexture(t,n,r,function(t){a.enableTexture(e),i&&i.refresh()}),a.set(e,o)),o}};var Y={};Y.Renderer=Pe,Y.Node=Ue,Y.Mesh=Qe,Y.Shader=I,Y.Material=Ve,Y.Texture=H,Y.Texture2D=U,Y.Geometry=V,Y.SphereGeometry=Sn,Y.PlaneGeometry=We,Y.CubeGeometry=Ot,Y.AmbientLight=Cn,Y.DirectionalLight=wn,Y.PointLight=Tn,Y.SpotLight=En,Y.PerspectiveCamera=nt,Y.OrthographicCamera=Je,Y.Vector2=Ye,Y.Vector3=z,Y.Vector4=K,Y.Quaternion=ct,Y.Matrix2=kn,Y.Matrix2d=An,Y.Matrix3=jn,Y.Matrix4=B,Y.Plane=Ke,Y.Ray=ot,Y.BoundingBox=at,Y.Frustum=it;var zn=null;function Bn(){return zn===null&&(zn=sn.createBlank(`rgba(255,255,255,0)`).image),zn}function Vn(e){return 2**Math.round(Math.log(e)/Math.LN2)}function Hn(e){if((e.wrapS===H.REPEAT||e.wrapT===H.REPEAT)&&e.image){var t=Vn(e.width),n=Vn(e.height);if(t!==e.width||n!==e.height){var r=document.createElement(`canvas`);r.width=t,r.height=n,r.getContext(`2d`).drawImage(e.image,0,0,t,n),e.image=r}}}Y.loadTexture=function(e,t,n,r){typeof n==`function`&&(r=n,n={}),n||={};for(var i=Object.keys(n).sort(),a=``,o=0;o<i.length;o++)a+=i[o]+`_`+n[i[o]]+`_`;var s=t.__textureCache=t.__textureCache||new pe(20);if(In(e)){var c=e.__textureid__,l=s.get(a+c);if(l)l.texture.surface.setECharts(e),r&&r(l.texture);else{var u=new un(e);u.onupdate=function(){t.getZr().refresh()},l={texture:u.getTexture()};for(var o=0;o<i.length;o++)l.texture[i[o]]=n[i[o]];c=e.__textureid__||`__ecgl_ec__`+l.texture.__uid__,e.__textureid__=c,s.put(a+c,l),r&&r(l.texture)}return l.texture}else if(Fn(e)){var c=e.__textureid__,l=s.get(a+c);if(!l){l={texture:new Y.Texture2D({image:e})};for(var o=0;o<i.length;o++)l.texture[i[o]]=n[i[o]];c=e.__textureid__||`__ecgl_image__`+l.texture.__uid__,e.__textureid__=c,s.put(a+c,l),Hn(l.texture),r&&r(l.texture)}return l.texture}else{var l=s.get(a+e);if(l)l.callbacks?l.callbacks.push(r):r&&r(l.texture);else if(e.match(/.hdr$|^data:application\/octet-stream/)){l={callbacks:[r]};var d=sn.loadTexture(e,{exposure:n.exposure,fileType:`hdr`},function(){d.dirty(),l.callbacks.forEach(function(e){e&&e(d)}),l.callbacks=null});l.texture=d,s.put(a+e,l)}else{for(var d=new Y.Texture2D({image:new Image}),o=0;o<i.length;o++)d[i[o]]=n[i[o]];l={texture:d,callbacks:[r]};var f=d.image;f.onload=function(){d.image=f,Hn(d),d.dirty(),l.callbacks.forEach(function(e){e&&e(d)}),l.callbacks=null},f.crossOrigin=`Anonymous`,f.src=e,d.image=Bn(),s.put(a+e,l)}return l.texture}},Y.createAmbientCubemap=function(e,t,n,r){e||={};var i=e.texture,a=G.firstNotNull(e.exposure,1),o=new hn({intensity:G.firstNotNull(e.specularIntensity,1)}),s=new gn({intensity:G.firstNotNull(e.diffuseIntensity,1),coefficients:[.844,.712,.691,-.037,.083,.167,.343,.288,.299,-.041,-.021,-.009,-.003,-.041,-.064,-.011,-.007,-.004,-.031,.034,.081,-.06,-.049,-.06,.046,.056,.05]});return o.cubemap=Y.loadTexture(i,n,{exposure:a},function(){o.cubemap.flipY=!1,o.prefilter(t,32),s.coefficients=_n.projectEnvironmentMap(t,o.cubemap,{lod:1}),r&&r()}),{specular:o,diffuse:s}},Y.createBlankTexture=sn.createBlank,Y.isImage=Fn,Y.additiveBlend=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.SRC_ALPHA,e.ONE)},Y.parseColor=function(e,t){return e instanceof Array?(t||=[],t[0]=e[0],t[1]=e[1],t[2]=e[2],e.length>3?t[3]=e[3]:t[3]=1,t):(t=_e(e||`#000`,t)||[0,0,0,0],t[0]/=255,t[1]/=255,t[2]/=255,t)},Y.directionFromAlphaBeta=function(e,t){var n=e/180*Math.PI+Math.PI/2,r=-t/180*Math.PI+Math.PI/2,i=[],a=Math.sin(n);return i[0]=a*Math.cos(r),i[1]=-Math.cos(n),i[2]=a*Math.sin(r),i},Y.getShadowResolution=function(e){var t=1024;switch(e){case`low`:t=512;break;case`medium`:break;case`high`:t=2048;break;case`ultra`:t=4096;break}return t},Y.COMMON_SHADERS=[`lambert`,`color`,`realistic`,`hatching`,`shadow`],Y.createShader=function(e){e===`ecgl.shadow`&&(e=`ecgl.displayShadow`);var t=I.source(e+`.vertex`),n=I.source(e+`.fragment`);t||console.error(`Vertex shader of '%s' not exits`,e),n||console.error(`Fragment shader of '%s' not exits`,e);var r=new I(t,n);return r.name=e,r},Y.createMaterial=function(e,t){t instanceof Array||(t=[t]);var n=new Ve({shader:Y.createShader(e)});return t.forEach(function(e){typeof e==`string`&&n.define(e)}),n},Y.setMaterialFromModel=function(e,t,n,r){t.autoUpdateTextureStatus=!1;var i=n.getModel(e+`Material`),a=i.get(`detailTexture`),o=G.firstNotNull(i.get(`textureTiling`),1),s=G.firstNotNull(i.get(`textureOffset`),0);typeof o==`number`&&(o=[o,o]),typeof s==`number`&&(s=[s,s]);var c=o[0]>1||o[1]>1?Y.Texture.REPEAT:Y.Texture.CLAMP_TO_EDGE,l={anisotropic:8,wrapS:c,wrapT:c};if(e===`realistic`){var u=i.get(`roughness`),d=i.get(`metalness`);d==null?d=0:isNaN(d)&&(t.setTextureImage(`metalnessMap`,d,r,l),d=G.firstNotNull(i.get(`metalnessAdjust`),.5)),u==null?u=.5:isNaN(u)&&(t.setTextureImage(`roughnessMap`,u,r,l),u=G.firstNotNull(i.get(`roughnessAdjust`),.5));var f=i.get(`normalTexture`);t.setTextureImage(`detailMap`,a,r,l),t.setTextureImage(`normalMap`,f,r,l),t.set({roughness:u,metalness:d,detailUvRepeat:o,detailUvOffset:s})}else if(e===`lambert`)t.setTextureImage(`detailMap`,a,r,l),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e===`color`)t.setTextureImage(`detailMap`,a,r,l),t.set({detailUvRepeat:o,detailUvOffset:s});else if(e===`hatching`){var p=i.get(`hatchingTextures`)||[];p.length;for(var m=0;m<6;m++)t.setTextureImage(`hatch`+(m+1),p[m],r,{anisotropic:8,wrapS:Y.Texture.REPEAT,wrapT:Y.Texture.REPEAT});t.set({detailUvRepeat:o,detailUvOffset:s})}},Y.updateVertexAnimation=function(e,t,n,r){var i=r.get(`animation`),a=r.get(`animationDurationUpdate`),o=r.get(`animationEasingUpdate`),s=n.shadowDepthMaterial;if(i&&t&&a>0&&t.geometry.vertexCount===n.geometry.vertexCount){n.material.define(`vertex`,`VERTEX_ANIMATION`),n.ignorePreZ=!0,s&&s.define(`vertex`,`VERTEX_ANIMATION`);for(var c=0;c<e.length;c++)n.geometry.attributes[e[c][0]].value=t.geometry.attributes[e[c][1]].value;n.geometry.dirty(),n.__percent=0,n.material.set(`percent`,0),n.stopAnimation(),n.animate().when(a,{__percent:1}).during(function(){n.material.set(`percent`,n.__percent),s&&s.set(`percent`,n.__percent)}).done(function(){n.ignorePreZ=!1,n.material.undefine(`vertex`,`VERTEX_ANIMATION`),s&&s.undefine(`vertex`,`VERTEX_ANIMATION`)}).start(o)}else n.material.undefine(`vertex`,`VERTEX_ANIMATION`),s&&s.undefine(`vertex`,`VERTEX_ANIMATION`)};var X=function(e,n){this.id=e,this.zr=n;try{this.renderer=new Pe({clearBit:0,devicePixelRatio:n.painter.dpr,preserveDrawingBuffer:!0,premultipliedAlpha:!0}),this.renderer.resize(n.painter.getWidth(),n.painter.getHeight())}catch(e){this.renderer=null,this.dom=document.createElement(`div`),this.dom.style.cssText=`position:absolute; left: 0; top: 0; right: 0; bottom: 0;`,this.dom.className=`ecgl-nowebgl`,this.dom.innerHTML=`Sorry, your browser does not support WebGL`,console.error(e);return}this.onglobalout=this.onglobalout.bind(this),n.on(`globalout`,this.onglobalout),this.dom=this.renderer.canvas;var r=this.dom.style;r.position=`absolute`,r.left=`0`,r.top=`0`,this.views=[],this._picking=new ut({renderer:this.renderer}),this._viewsToDispose=[],this._accumulatingId=0,this._zrEventProxy=new t({shape:{x:-1,y:-1,width:2,height:2},__isGLToZRProxy:!0}),this._backgroundColor=null,this._disposed=!1};X.prototype.setUnpainted=function(){},X.prototype.addView=function(e){if(e.layer!==this){var t=this._viewsToDispose.indexOf(e);t>=0&&this._viewsToDispose.splice(t,1),this.views.push(e),e.layer=this;var n=this.zr;e.scene.traverse(function(e){e.__zr=n,e.addAnimatorsToZr&&e.addAnimatorsToZr(n)})}};function Un(e){var t=e.__zr;e.__zr=null,t&&e.removeAnimatorsFromZr&&e.removeAnimatorsFromZr(t)}X.prototype.removeView=function(e){if(e.layer===this){var t=this.views.indexOf(e);t>=0&&(this.views.splice(t,1),e.scene.traverse(Un,this),e.layer=null,this._viewsToDispose.push(e))}},X.prototype.removeViewsAll=function(){this.views.forEach(function(e){e.scene.traverse(Un,this),e.layer=null,this._viewsToDispose.push(e)},this),this.views.length=0},X.prototype.resize=function(e,t){this.renderer.resize(e,t)},X.prototype.clear=function(){var e=this.renderer.gl,t=this._backgroundColor||[0,0,0,0];e.clearColor(t[0],t[1],t[2],t[3]),e.depthMask(!0),e.colorMask(!0,!0,!0,!0),e.clear(e.DEPTH_BUFFER_BIT|e.COLOR_BUFFER_BIT)},X.prototype.clearDepth=function(){var e=this.renderer.gl;e.clear(e.DEPTH_BUFFER_BIT)},X.prototype.clearColor=function(){var e=this.renderer.gl;e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT)},X.prototype.needsRefresh=function(){this.zr.refresh()},X.prototype.refresh=function(e){this._backgroundColor=e?Y.parseColor(e):[0,0,0,0],this.renderer.clearColor=this._backgroundColor;for(var t=0;t<this.views.length;t++)this.views[t].prepareRender(this.renderer);this._doRender(!1),this._trackAndClean();for(var t=0;t<this._viewsToDispose.length;t++)this._viewsToDispose[t].dispose(this.renderer);this._viewsToDispose.length=0,this._startAccumulating()},X.prototype.renderToCanvas=function(e){this._startAccumulating(!0),e.drawImage(this.dom,0,0,e.canvas.width,e.canvas.height)},X.prototype._doRender=function(e){this.clear(),this.renderer.saveViewport();for(var t=0;t<this.views.length;t++)this.views[t].render(this.renderer,e);this.renderer.restoreViewport()},X.prototype._stopAccumulating=function(){this._accumulatingId=0,clearTimeout(this._accumulatingTimeout)};var Wn=1;X.prototype._startAccumulating=function(e){var t=this;this._stopAccumulating();for(var n=!1,r=0;r<this.views.length;r++)n=this.views[r].needsAccumulate()||n;if(!n)return;function i(r){if(!(!t._accumulatingId||r!==t._accumulatingId)){for(var a=!0,o=0;o<t.views.length;o++)a=t.views[o].isAccumulateFinished()&&n;a||(t._doRender(!0),e?i(r):se(function(){i(r)}))}}this._accumulatingId=Wn++,e?i(t._accumulatingId):this._accumulatingTimeout=setTimeout(function(){i(t._accumulatingId)},50)},X.prototype._trackAndClean=function(){var e=[],t=[];this._textureList&&(Gn(this._textureList),Gn(this._geometriesList));for(var n=0;n<this.views.length;n++)Jn(this.views[n].scene,e,t);this._textureList&&(Kn(this.renderer,this._textureList),Kn(this.renderer,this._geometriesList)),this._textureList=e,this._geometriesList=t};function Gn(e){for(var t=0;t<e.length;t++)e[t].__used__=0}function Kn(e,t){for(var n=0;n<t.length;n++)t[n].__used__||t[n].dispose(e)}function qn(e,t){e.__used__=e.__used__||0,e.__used__++,e.__used__===1&&t.push(e)}function Jn(e,t,n){var r,i;e.traverse(function(e){if(e.isRenderable()){var a=e.geometry,o=e.material;if(o!==r)for(var s=o.getTextureUniforms(),c=0;c<s.length;c++){var l=s[c],u=o.uniforms[l].value;if(u){if(u instanceof H)qn(u,t);else if(u instanceof Array)for(var d=0;d<u.length;d++)u[d]instanceof H&&qn(u[d],t)}}a!==i&&qn(a,n),r=o,i=a}});for(var a=0;a<e.lights.length;a++)e.lights[a].cubemap&&qn(e.lights[a].cubemap,t)}X.prototype.dispose=function(){this._disposed||=(this._stopAccumulating(),this._textureList&&(Gn(this._textureList),Gn(this._geometriesList),Kn(this.renderer,this._textureList),Kn(this.renderer,this._geometriesList)),this.zr.off(`globalout`,this.onglobalout),!0)},X.prototype.onmousedown=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent(`mousedown`,e,t),this._dispatchDataEvent(`mousedown`,e,t)),this._downX=e.offsetX,this._downY=e.offsetY}},X.prototype.onmousemove=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY),n=t&&t.target,r=this._hovered;this._hovered=t,r&&n!==r.target&&(r.relatedTarget=n,this._dispatchEvent(`mouseout`,e,r),this.zr.setCursorStyle(`default`)),this._dispatchEvent(`mousemove`,e,t),t&&(this.zr.setCursorStyle(`pointer`),(!r||n!==r.target)&&this._dispatchEvent(`mouseover`,e,t)),this._dispatchDataEvent(`mousemove`,e,t)}},X.prototype.onmouseup=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){e=e.event;var t=this.pickObject(e.offsetX,e.offsetY);t&&(this._dispatchEvent(`mouseup`,e,t),this._dispatchDataEvent(`mouseup`,e,t)),this._upX=e.offsetX,this._upY=e.offsetY}},X.prototype.onclick=X.prototype.dblclick=function(e){if(!(e.target&&e.target.__isGLToZRProxy)){var t=this._upX-this._downX,n=this._upY-this._downY;if(!(Math.sqrt(t*t+n*n)>20)){e=e.event;var r=this.pickObject(e.offsetX,e.offsetY);r&&(this._dispatchEvent(e.type,e,r),this._dispatchDataEvent(e.type,e,r));var i=this._clickToSetFocusPoint(e);i&&i.view.setDOFFocusOnPoint(i.distance)&&this.zr.refresh()}}},X.prototype._clickToSetFocusPoint=function(e){for(var t=this.renderer,n=t.viewport,r=this.views.length-1;r>=0;r--){var i=this.views[r];if(i.hasDOF()&&i.containPoint(e.offsetX,e.offsetY)){this._picking.scene=i.scene,this._picking.camera=i.camera,t.viewport=i.viewport;var a=this._picking.pick(e.offsetX,e.offsetY,!0);if(a)return a.view=i,a}}t.viewport=n},X.prototype.onglobalout=function(e){var t=this._hovered;t&&this._dispatchEvent(`mouseout`,e,{target:t.target})},X.prototype.pickObject=function(e,t){for(var n=[],r=this.renderer,i=r.viewport,a=0;a<this.views.length;a++){var o=this.views[a];o.containPoint(e,t)&&(this._picking.scene=o.scene,this._picking.camera=o.camera,r.viewport=o.viewport,this._picking.pickAll(e,t,n))}return r.viewport=i,n.sort(function(e,t){return e.distance-t.distance}),n[0]},X.prototype._dispatchEvent=function(e,t,n){n||={};var r=n.target;for(n.cancelBubble=!1,n.event=t,n.type=e,n.offsetX=t.offsetX,n.offsetY=t.offsetY;r&&(r.trigger(e,n),r=r.getParent(),!n.cancelBubble););this._dispatchToView(e,n)},X.prototype._dispatchDataEvent=function(e,t,n){var r=n&&n.target,i=r&&r.dataIndex,a=r&&r.seriesIndex,o=r&&r.eventData,s=!1,l=this._zrEventProxy;l.x=t.offsetX,l.y=t.offsetY,l.update();var u={target:l};let d=c(l);e===`mousemove`&&(i==null?o!=null&&o!==this._lastEventData&&(this._lastEventData!=null&&(d.eventData=this._lastEventData,this.zr.handler.dispatchToElement(u,`mouseout`,t)),s=!0):i!==this._lastDataIndex&&(parseInt(this._lastDataIndex,10)>=0&&(d.dataIndex=this._lastDataIndex,d.seriesIndex=this._lastSeriesIndex,this.zr.handler.dispatchToElement(u,`mouseout`,t)),s=!0),this._lastEventData=o,this._lastDataIndex=i,this._lastSeriesIndex=a),d.eventData=o,d.dataIndex=i,d.seriesIndex=a,(o!=null||parseInt(i,10)>=0&&parseInt(a,10)>=0)&&(this.zr.handler.dispatchToElement(u,e,t),s&&this.zr.handler.dispatchToElement(u,`mouseover`,t))},X.prototype._dispatchToView=function(e,t){for(var n=0;n<this.views.length;n++)this.views[n].containPoint(t.offsetX,t.offsetY)&&this.views[n].trigger(e,t)},Object.assign(X.prototype,Me);var Yn=[`bar3D`,`line3D`,`map3D`,`scatter3D`,`surface`,`lines3D`,`scatterGL`,`scatter3D`];function Xn(e,t){if(e&&e[t]&&(e[t].normal||e[t].emphasis)){var n=e[t].normal,r=e[t].emphasis;n&&(e[t]=n),r&&(e.emphasis=e.emphasis||{},e.emphasis[t]=r)}}function Zn(e){Xn(e,`itemStyle`),Xn(e,`lineStyle`),Xn(e,`areaStyle`),Xn(e,`label`)}function Qn(e){e&&(e instanceof Array||(e=[e]),ve(e,function(e){if(e.axisLabel){var t=e.axisLabel;Object.assign(t,t.textStyle),t.textStyle=null}}))}function $n(e){ve(e.series,function(t){Ee(Yn,t.type)>=0&&(Zn(t),t.coordinateSystem===`mapbox`&&(t.coordinateSystem=`mapbox3D`,e.mapbox3D=e.mapbox))}),Qn(e.xAxis3D),Qn(e.yAxis3D),Qn(e.zAxis3D),Qn(e.grid3D),Xn(e.geo3D)}function er(e){this._layers={},this._zr=e}er.prototype.update=function(e,t){var n=this,r=t.getZr();if(!r.getWidth()||!r.getHeight()){console.warn(`Dom has no width or height`);return}function i(e){r.setSleepAfterStill(0);var t=(e.coordinateSystem&&e.coordinateSystem.model,e.get(`zlevel`)),i=n._layers,a=i[t];if(!a){if(a=i[t]=new X(`gl-`+t,r),r.painter.isSingleCanvas()){a.virtual=!0;var o=new k({z:1e4,style:{image:a.renderer.canvas},silent:!0});a.__hostImage=o,r.add(o)}r.painter.insertLayer(t,a)}return a.__hostImage&&a.__hostImage.setStyle({width:a.renderer.getWidth(),height:a.renderer.getHeight()}),a}function a(e,t){e&&e.traverse(function(e){e.isRenderable&&e.isRenderable()&&(e.ignorePicking=e.$ignorePicking==null?t:e.$ignorePicking)})}for(var o in this._layers)this._layers[o].removeViewsAll();e.eachComponent(function(n,r){if(n!==`series`){var o=t.getViewOfComponentModel(r),s=r.coordinateSystem;if(o.__ecgl__){var c;if(s){if(!s.viewGL){console.error(`Can't find viewGL in coordinateSystem of component `+r.id);return}c=s.viewGL}else{if(!r.viewGL){console.error(`Can't find viewGL of component `+r.id);return}c=s.viewGL}var c=s.viewGL,l=i(r);l.addView(c),o.afterRender&&o.afterRender(r,e,t,l),a(o.groupGL,r.get(`silent`))}}}),e.eachSeries(function(n){var r=t.getViewOfSeriesModel(n),o=n.coordinateSystem;if(r.__ecgl__){if(o&&!o.viewGL&&!r.viewGL){console.error(`Can't find viewGL of series `+r.id);return}var s=o&&o.viewGL||r.viewGL,c=i(n);c.addView(s),r.afterRender&&r.afterRender(n,e,t,c),a(r.groupGL,n.get(`silent`))}})},O(function(e){var t=e.getZr(),n=t.painter.dispose;t.painter.dispose=function(){typeof this.eachOtherLayer==`function`&&this.eachOtherLayer(function(e){e instanceof X&&e.dispose()}),n.call(this)},t.painter.getRenderedCanvas=function(e){if(e||={},this._singleCanvas)return this._layers[0].dom;var t=document.createElement(`canvas`),n=e.pixelRatio||this.dpr;t.width=this.getWidth()*n,t.height=this.getHeight()*n;var r=t.getContext(`2d`);r.dpr=n,r.clearRect(0,0,t.width,t.height),e.backgroundColor&&(r.fillStyle=e.backgroundColor,r.fillRect(0,0,t.width,t.height));var i=this.storage.getDisplayList(!0),a={},o,s=this;function c(e,t){var n=s._zlevelList;e??=-1/0;for(var i,a=0;a<n.length;a++){var o=n[a],c=s._layers[o];if(!c.__builtin__&&o>e&&o<t){i=c;break}}i&&i.renderToCanvas&&(r.save(),i.renderToCanvas(r),r.restore())}for(var l={ctx:r},u=0;u<i.length;u++){var d=i[u];d.zlevel!==o&&(c(o,d.zlevel),o=d.zlevel),this._doPaintEl(d,l,!0,null,a)}return c(o,1/0),t}}),ee(function(e,t){var n=t.getZr();(n.__egl=n.__egl||new er(n)).update(e,t)}),ae($n);var tr={defaultOption:{viewControl:{projection:`perspective`,autoRotate:!1,autoRotateDirection:`cw`,autoRotateSpeed:10,autoRotateAfterStill:3,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:`middle`,rotateMouseButton:`left`,distance:150,minDistance:40,maxDistance:400,orthographicSize:150,maxOrthographicSize:400,minOrthographicSize:20,center:[0,0,0],alpha:0,beta:0,minAlpha:-90,maxAlpha:90}},setView:function(e){e||={},this.option.viewControl=this.option.viewControl||{},e.alpha!=null&&(this.option.viewControl.alpha=e.alpha),e.beta!=null&&(this.option.viewControl.beta=e.beta),e.distance!=null&&(this.option.viewControl.distance=e.distance),e.center!=null&&(this.option.viewControl.center=e.center)}},nr={defaultOption:{postEffect:{enable:!1,bloom:{enable:!0,intensity:.1},depthOfField:{enable:!1,focalRange:20,focalDistance:50,blurRadius:10,fstop:2.8,quality:`medium`},screenSpaceAmbientOcclusion:{enable:!1,radius:2,quality:`medium`,intensity:1},screenSpaceReflection:{enable:!1,quality:`medium`,maxRoughness:.8},colorCorrection:{enable:!0,exposure:0,brightness:0,contrast:1,saturation:1,lookupTexture:``},edge:{enable:!1},FXAA:{enable:!1}},temporalSuperSampling:{enable:`auto`}}},rr={defaultOption:{light:{main:{shadow:!1,shadowQuality:`high`,color:`#fff`,intensity:1,alpha:0,beta:0},ambient:{color:`#fff`,intensity:.2},ambientCubemap:{texture:null,exposure:1,diffuseIntensity:.5,specularIntensity:.5}}}},ir=D.extend({type:`grid3D`,dependencies:[`xAxis3D`,`yAxis3D`,`zAxis3D`],defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:`100%`,height:`100%`,environment:`auto`,boxWidth:100,boxHeight:100,boxDepth:100,axisPointer:{show:!0,lineStyle:{color:`rgba(0, 0, 0, 0.8)`,width:1},label:{show:!0,formatter:null,margin:8,textStyle:{fontSize:14,color:`#fff`,backgroundColor:`rgba(0,0,0,0.5)`,padding:3,borderRadius:3}}},axisLine:{show:!0,lineStyle:{color:`#333`,width:2,type:`solid`}},axisTick:{show:!0,inside:!1,length:3,lineStyle:{width:1}},axisLabel:{show:!0,inside:!1,rotate:0,margin:8,textStyle:{fontSize:12}},splitLine:{show:!0,lineStyle:{color:[`#ccc`],width:1,type:`solid`}},splitArea:{show:!1,areaStyle:{color:[`rgba(250,250,250,0.3)`,`rgba(200,200,200,0.3)`]}},light:{main:{alpha:30,beta:40},ambient:{intensity:.4}},viewControl:{alpha:20,beta:40,autoRotate:!1,distance:200,minDistance:40,maxDistance:400}}});F(ir.prototype,tr),F(ir.prototype,nr),F(ir.prototype,rr);var ar=G.firstNotNull,or={left:0,middle:1,right:2};function sr(e){return e instanceof Array||(e=[e,e]),e}var cr=He.extend(function(){return{zr:null,viewGL:null,_center:new z,minDistance:.5,maxDistance:1.5,maxOrthographicSize:300,minOrthographicSize:30,minAlpha:-90,maxAlpha:90,minBeta:-1/0,maxBeta:1/0,autoRotateAfterStill:0,autoRotateDirection:`cw`,autoRotateSpeed:60,damping:.8,rotateSensitivity:1,zoomSensitivity:1,panSensitivity:1,panMouseButton:`middle`,rotateMouseButton:`left`,_mode:`rotate`,_camera:null,_needsUpdate:!1,_rotating:!1,_phi:0,_theta:0,_mouseX:0,_mouseY:0,_rotateVelocity:new Ye,_panVelocity:new Ye,_distance:500,_zoomSpeed:0,_stillTimeout:0,_animators:[]}},function(){[`_mouseDownHandler`,`_mouseWheelHandler`,`_mouseMoveHandler`,`_mouseUpHandler`,`_pinchHandler`,`_contextMenuHandler`,`_update`].forEach(function(e){this[e]=this[e].bind(this)},this)},{init:function(){var e=this.zr;e&&(e.on(`mousedown`,this._mouseDownHandler),e.on(`globalout`,this._mouseUpHandler),e.on(`mousewheel`,this._mouseWheelHandler),e.on(`pinch`,this._pinchHandler),e.animation.on(`frame`,this._update),e.dom.addEventListener(`contextmenu`,this._contextMenuHandler))},dispose:function(){var e=this.zr;e&&(e.off(`mousedown`,this._mouseDownHandler),e.off(`mousemove`,this._mouseMoveHandler),e.off(`mouseup`,this._mouseUpHandler),e.off(`mousewheel`,this._mouseWheelHandler),e.off(`pinch`,this._pinchHandler),e.off(`globalout`,this._mouseUpHandler),e.dom.removeEventListener(`contextmenu`,this._contextMenuHandler),e.animation.off(`frame`,this._update)),this.stopAllAnimation()},getDistance:function(){return this._distance},setDistance:function(e){this._distance=e,this._needsUpdate=!0},getOrthographicSize:function(){return this._orthoSize},setOrthographicSize:function(e){this._orthoSize=e,this._needsUpdate=!0},getAlpha:function(){return this._theta/Math.PI*180},getBeta:function(){return-this._phi/Math.PI*180},getCenter:function(){return this._center.toArray()},setAlpha:function(e){e=Math.max(Math.min(this.maxAlpha,e),this.minAlpha),this._theta=e/180*Math.PI,this._needsUpdate=!0},setBeta:function(e){e=Math.max(Math.min(this.maxBeta,e),this.minBeta),this._phi=-e/180*Math.PI,this._needsUpdate=!0},setCenter:function(e){this._center.setArray(e)},setViewGL:function(e){this.viewGL=e},getCamera:function(){return this.viewGL.camera},setFromViewControlModel:function(e,t){t||={};var n=t.baseDistance||0,r=t.baseOrthoSize||1,i=e.get(`projection`);i!==`perspective`&&i!==`orthographic`&&i!==`isometric`&&(i=`perspective`),this._projection=i,this.viewGL.setProjection(i);var a=e.get(`distance`)+n,o=e.get(`orthographicSize`)+r;[[`damping`,.8],[`autoRotate`,!1],[`autoRotateAfterStill`,3],[`autoRotateDirection`,`cw`],[`autoRotateSpeed`,10],[`minDistance`,30],[`maxDistance`,400],[`minOrthographicSize`,30],[`maxOrthographicSize`,300],[`minAlpha`,-90],[`maxAlpha`,90],[`minBeta`,-1/0],[`maxBeta`,1/0],[`rotateSensitivity`,1],[`zoomSensitivity`,1],[`panSensitivity`,1],[`panMouseButton`,`left`],[`rotateMouseButton`,`middle`]].forEach(function(t){this[t[0]]=ar(e.get(t[0]),t[1])},this),this.minDistance+=n,this.maxDistance+=n,this.minOrthographicSize+=r,this.maxOrthographicSize+=r;var s=e.ecModel,c={};[`animation`,`animationDurationUpdate`,`animationEasingUpdate`].forEach(function(t){c[t]=ar(e.get(t),s&&s.get(t))});var l=ar(t.alpha,e.get(`alpha`))||0,u=ar(t.beta,e.get(`beta`))||0,d=ar(t.center,e.get(`center`))||[0,0,0];c.animation&&c.animationDurationUpdate>0&&this._notFirst?this.animateTo({alpha:l,beta:u,center:d,distance:a,orthographicSize:o,easing:c.animationEasingUpdate,duration:c.animationDurationUpdate}):(this.setDistance(a),this.setAlpha(l),this.setBeta(u),this.setCenter(d),this.setOrthographicSize(o)),this._notFirst=!0,this._validateProperties()},_validateProperties:function(){},animateTo:function(e){var t=this.zr,n=this,r={},i={};return e.distance!=null&&(r.distance=this.getDistance(),i.distance=e.distance),e.orthographicSize!=null&&(r.orthographicSize=this.getOrthographicSize(),i.orthographicSize=e.orthographicSize),e.alpha!=null&&(r.alpha=this.getAlpha(),i.alpha=e.alpha),e.beta!=null&&(r.beta=this.getBeta(),i.beta=e.beta),e.center!=null&&(r.center=this.getCenter(),i.center=e.center),this._addAnimator(t.animation.animate(r).when(e.duration||1e3,i).during(function(){r.alpha!=null&&n.setAlpha(r.alpha),r.beta!=null&&n.setBeta(r.beta),r.distance!=null&&n.setDistance(r.distance),r.center!=null&&n.setCenter(r.center),r.orthographicSize!=null&&n.setOrthographicSize(r.orthographicSize),n._needsUpdate=!0})).start(e.easing||`linear`)},stopAllAnimation:function(){for(var e=0;e<this._animators.length;e++)this._animators[e].stop();this._animators.length=0},update:function(){this._needsUpdate=!0,this._update(20)},_isAnimating:function(){return this._animators.length>0},_update:function(e){if(this._rotating){var t=(this.autoRotateDirection===`cw`?1:-1)*this.autoRotateSpeed/180*Math.PI;this._phi-=t*e/1e3,this._needsUpdate=!0}else this._rotateVelocity.len()>0&&(this._needsUpdate=!0);(Math.abs(this._zoomSpeed)>.1||this._panVelocity.len()>0)&&(this._needsUpdate=!0),this._needsUpdate&&=(e=Math.min(e,50),this._updateDistanceOrSize(e),this._updatePan(e),this._updateRotate(e),this._updateTransform(),this.getCamera().update(),this.zr&&this.zr.refresh(),this.trigger(`update`),!1)},_updateRotate:function(e){var t=this._rotateVelocity;this._phi=t.y*e/20+this._phi,this._theta=t.x*e/20+this._theta,this.setAlpha(this.getAlpha()),this.setBeta(this.getBeta()),this._vectorDamping(t,this.damping**(e/16))},_updateDistanceOrSize:function(e){this._projection===`perspective`?this._setDistance(this._distance+this._zoomSpeed*e/20):this._setOrthoSize(this._orthoSize+this._zoomSpeed*e/20),this._zoomSpeed*=this.damping**(e/16)},_setDistance:function(e){this._distance=Math.max(Math.min(e,this.maxDistance),this.minDistance)},_setOrthoSize:function(e){this._orthoSize=Math.max(Math.min(e,this.maxOrthographicSize),this.minOrthographicSize);var t=this.getCamera(),n=this._orthoSize,r=n/this.viewGL.viewport.height*this.viewGL.viewport.width;t.left=-r/2,t.right=r/2,t.top=n/2,t.bottom=-n/2},_updatePan:function(e){var t=this._panVelocity,n=this._distance,r=this.getCamera(),i=r.worldTransform.y,a=r.worldTransform.x;this._center.scaleAndAdd(a,-t.x*n/200).scaleAndAdd(i,-t.y*n/200),this._vectorDamping(t,0)},_updateTransform:function(){var e=this.getCamera(),t=new z,n=this._theta+Math.PI/2,r=this._phi+Math.PI/2,i=Math.sin(n);t.x=i*Math.cos(r),t.y=-Math.cos(n),t.z=i*Math.sin(r),e.position.copy(this._center).scaleAndAdd(t,this._distance),e.rotation.identity().rotateY(-this._phi).rotateX(-this._theta)},_startCountingStill:function(){clearTimeout(this._stillTimeout);var e=this.autoRotateAfterStill,t=this;!isNaN(e)&&e>0&&(this._stillTimeout=setTimeout(function(){t._rotating=!0},e*1e3))},_vectorDamping:function(e,t){var n=e.len();n*=t,n<1e-4&&(n=0),e.normalize().scale(n)},_decomposeTransform:function(){if(this.getCamera()){this.getCamera().updateWorldTransform();var e=this.getCamera().worldTransform.z,t=Math.asin(e.y),n=Math.atan2(e.x,e.z);this._theta=t,this._phi=-n,this.setBeta(this.getBeta()),this.setAlpha(this.getAlpha()),this.getCamera().aspect?this._setDistance(this.getCamera().position.dist(this._center)):this._setOrthoSize(this.getCamera().top-this.getCamera().bottom)}},_mouseDownHandler:function(e){if(!e.target&&!this._isAnimating()){var t=e.offsetX,n=e.offsetY;this.viewGL&&!this.viewGL.containPoint(t,n)||(this.zr.on(`mousemove`,this._mouseMoveHandler),this.zr.on(`mouseup`,this._mouseUpHandler),e.event.targetTouches?e.event.targetTouches.length===1&&(this._mode=`rotate`):e.event.button===or[this.rotateMouseButton]?this._mode=`rotate`:e.event.button===or[this.panMouseButton]?this._mode=`pan`:this._mode=``,this._rotateVelocity.set(0,0),this._rotating=!1,this.autoRotate&&this._startCountingStill(),this._mouseX=e.offsetX,this._mouseY=e.offsetY)}},_mouseMoveHandler:function(e){if(!(e.target&&e.target.__isGLToZRProxy)&&!this._isAnimating()){var t=sr(this.panSensitivity),n=sr(this.rotateSensitivity);this._mode===`rotate`?(this._rotateVelocity.y=(e.offsetX-this._mouseX)/this.zr.getHeight()*2*n[0],this._rotateVelocity.x=(e.offsetY-this._mouseY)/this.zr.getWidth()*2*n[1]):this._mode===`pan`&&(this._panVelocity.x=(e.offsetX-this._mouseX)/this.zr.getWidth()*t[0]*400,this._panVelocity.y=(-e.offsetY+this._mouseY)/this.zr.getHeight()*t[1]*400),this._mouseX=e.offsetX,this._mouseY=e.offsetY,e.event.preventDefault()}},_mouseWheelHandler:function(e){if(!this._isAnimating()){var t=e.event.wheelDelta||-e.event.detail;this._zoomHandler(e,t)}},_pinchHandler:function(e){this._isAnimating()||(this._zoomHandler(e,e.pinchScale>1?1:-1),this._mode=``)},_zoomHandler:function(e,t){if(t!==0){var n=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(n,r))){var i=this._projection===`perspective`?Math.max(Math.max(Math.min(this._distance-this.minDistance,this.maxDistance-this._distance))/20,.5):Math.max(Math.max(Math.min(this._orthoSize-this.minOrthographicSize,this.maxOrthographicSize-this._orthoSize))/20,.5);this._zoomSpeed=(t>0?-1:1)*i*this.zoomSensitivity,this._rotating=!1,this.autoRotate&&this._mode===`rotate`&&this._startCountingStill(),e.event.preventDefault()}}},_mouseUpHandler:function(){this.zr.off(`mousemove`,this._mouseMoveHandler),this.zr.off(`mouseup`,this._mouseUpHandler)},_isRightMouseButtonUsed:function(){return this.rotateMouseButton===`right`||this.panMouseButton===`right`},_contextMenuHandler:function(e){this._isRightMouseButtonUsed()&&e.preventDefault()},_addAnimator:function(e){var t=this._animators;return t.push(e),e.done(function(){var n=t.indexOf(e);n>=0&&t.splice(n,1)}),e}});Object.defineProperty(cr.prototype,`autoRotate`,{get:function(e){return this._autoRotate},set:function(e){this._autoRotate=e,this._rotating=e}});var lr={convertToDynamicArray:function(e){e&&this.resetOffset();var t=this.attributes;for(var n in t)e||!t[n].value?t[n].value=[]:t[n].value=Array.prototype.slice.call(t[n].value);e||!this.indices?this.indices=[]:this.indices=Array.prototype.slice.call(this.indices)},convertToTypedArray:function(){var e=this.attributes;for(var t in e)e[t].value&&e[t].value.length>0?e[t].value=new Float32Array(e[t].value):e[t].value=null;this.indices&&this.indices.length>0&&(this.indices=this.vertexCount>65535?new Uint32Array(this.indices):new Uint16Array(this.indices)),this.dirty()}},ur={vec2:Re,vec3:Ne,vec4:L,mat2:q,mat2d:J,mat3:R,mat4:Be,quat:st},dr=ur.vec3,fr=[[0,0],[1,1]],pr=V.extend(function(){return{segmentScale:1,dynamic:!0,useNativeLine:!0,attributes:{position:new V.Attribute(`position`,`float`,3,`POSITION`),positionPrev:new V.Attribute(`positionPrev`,`float`,3),positionNext:new V.Attribute(`positionNext`,`float`,3),prevPositionPrev:new V.Attribute(`prevPositionPrev`,`float`,3),prevPosition:new V.Attribute(`prevPosition`,`float`,3),prevPositionNext:new V.Attribute(`prevPositionNext`,`float`,3),offset:new V.Attribute(`offset`,`float`,1),color:new V.Attribute(`color`,`float`,4,`COLOR`)}}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.positionPrev.init(e),t.positionNext.init(e),t.offset.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,n,r){return 1/(dr.dist(e,t)+dr.dist(n,t)+dr.dist(r,n)+1)*this.segmentScale},getCubicCurveVertexCount:function(e,t,n,r){var i=this._getCubicCurveApproxStep(e,t,n,r),a=Math.ceil(1/i);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,n,r){var i=this._getCubicCurveApproxStep(e,t,n,r),a=Math.ceil(1/i);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(fr)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(fr)},getPolylineVertexCount:function(e){var t=typeof e==`number`?e:typeof e[0]==`number`?e.length/3:e.length;return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t=typeof e==`number`?e:typeof e[0]==`number`?e.length/3:e.length;return this.useNativeLine?0:Math.max(t-1,0)*2},addCubicCurve:function(e,t,n,r,i,a){a??=1;for(var o=e[0],s=e[1],c=e[2],l=t[0],u=t[1],d=t[2],f=n[0],p=n[1],m=n[2],h=r[0],g=r[1],_=r[2],v=this._getCubicCurveApproxStep(e,t,n,r),y=v*v,b=y*v,x=3*v,S=3*y,C=6*y,w=6*b,T=o-l*2+f,E=s-u*2+p,D=c-d*2+m,O=(l-f)*3-o+h,k=(u-p)*3-s+g,A=(d-m)*3-c+_,j=o,ee=s,M=c,te=(l-o)*x+T*S+O*b,ne=(u-s)*x+E*S+k*b,N=(d-c)*x+D*S+A*b,re=T*C+O*w,ie=E*C+k*w,ae=D*C+A*w,oe=O*w,P=k*w,se=A*w,ce=0,le=0,ue=Math.ceil(1/v),de=new Float32Array((ue+1)*3),de=[],fe=0,le=0;le<ue+1;le++)de[fe++]=j,de[fe++]=ee,de[fe++]=M,j+=te,ee+=ne,M+=N,te+=re,ne+=ie,N+=ae,re+=oe,ie+=P,ae+=se,ce+=v,ce>1&&(j=te>0?Math.min(j,h):Math.max(j,h),ee=ne>0?Math.min(ee,g):Math.max(ee,g),M=N>0?Math.min(M,_):Math.max(M,_));return this.addPolyline(de,i,a)},addLine:function(e,t,n,r){return this.addPolyline([e,t],n,r)},addPolyline:function(e,t,n,r,i){if(e.length){var a=typeof e[0]!=`number`;if(i??=a?e.length:e.length/3,!(i<2)){r??=0,n??=1,this._itemVertexOffsets.push(this._vertexOffset);var a=typeof e[0]!=`number`,o=a?typeof t[0]!=`number`:t.length/4===i,s=this.attributes.position,c=this.attributes.positionPrev,l=this.attributes.positionNext,u=this.attributes.color,d=this.attributes.offset,f=this.indices,p=this._vertexOffset,m,h;n=Math.max(n,.01);for(var g=r;g<i;g++){if(a)m=e[g],h=o?t[g]:t;else{var _=g*3;if(m||=[],m[0]=e[_],m[1]=e[_+1],m[2]=e[_+2],o){var v=g*4;h||=[],h[0]=t[v],h[1]=t[v+1],h[2]=t[v+2],h[3]=t[v+3]}else h=t}if(this.useNativeLine?g>1&&(s.copy(p,p-1),u.copy(p,p-1),p++):(g<i-1&&(c.set(p+2,m),c.set(p+3,m)),g>0&&(l.set(p-2,m),l.set(p-1,m)),s.set(p,m),s.set(p+1,m),u.set(p,h),u.set(p+1,h),d.set(p,n/2),d.set(p+1,-n/2),p+=2),this.useNativeLine)u.set(p,h),s.set(p,m),p++;else if(g>0){var y=this._triangleOffset*3,f=this.indices;f[y]=p-4,f[y+1]=p-3,f[y+2]=p-2,f[y+3]=p-3,f[y+4]=p-1,f[y+5]=p-2,this._triangleOffset+=2}}if(!this.useNativeLine){var b=this._vertexOffset,x=this._vertexOffset+i*2;c.copy(b,b+2),c.copy(b+1,b+3),l.copy(x-1,x-3),l.copy(x-2,x-4)}return this._vertexOffset=p,this._vertexOffset}}},setItemColor:function(e,t){for(var n=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,i=n;i<r;i++)this.attributes.color.set(i,t);this.dirty(`color`)},currentTriangleOffset:function(){return this._triangleOffset},currentVertexOffset:function(){return this._vertexOffset}});De(pr.prototype,lr);function mr(e,t,n,r,i,a,o){this._zr=e,this._x=0,this._y=0,this._rowHeight=0,this.width=r,this.height=i,this.offsetX=t,this.offsetY=n,this.dpr=o,this.gap=a}mr.prototype={constructor:mr,clear:function(){this._x=0,this._y=0,this._rowHeight=0},add:function(e,t,n){var r=e.getBoundingRect();t??=r.width,n??=r.height,t*=this.dpr,n*=this.dpr,this._fitElement(e,t,n);var i=this._x,a=this._y,o=this.width*this.dpr,s=this.height*this.dpr,c=this.gap;if(i+t+c>o&&(i=this._x=0,a+=this._rowHeight+c,this._y=a,this._rowHeight=0),this._x+=t+c,this._rowHeight=Math.max(this._rowHeight,n),a+n+c>s)return null;e.x+=this.offsetX*this.dpr+i,e.y+=this.offsetY*this.dpr+a,this._zr.add(e);var l=[this.offsetX/this.width,this.offsetY/this.height];return[[i/o+l[0],a/s+l[1]],[(i+t)/o+l[0],(a+n)/s+l[1]]]},_fitElement:function(e,t,n){var r=e.getBoundingRect(),i=t/r.width,a=n/r.height;e.x=-r.x*i,e.y=-r.y*a,e.scaleX=i,e.scaleY=a,e.update()}};function hr(e){e||={},e.width=e.width||512,e.height=e.height||512,e.devicePixelRatio=e.devicePixelRatio||1,e.gap=e.gap==null?2:e.gap;var t=document.createElement(`canvas`);t.width=e.width*e.devicePixelRatio,t.height=e.height*e.devicePixelRatio,this._canvas=t,this._texture=new U({image:t,flipY:!1});var n=this;this._zr=j(t);var r=this._zr.refreshImmediately;this._zr.refreshImmediately=function(){r.call(this),n._texture.dirty(),n.onupdate&&n.onupdate()},this._dpr=e.devicePixelRatio,this._coords={},this.onupdate=e.onupdate,this._gap=e.gap,this._textureAtlasNodes=[new mr(this._zr,0,0,e.width,e.height,this._gap,this._dpr)],this._nodeWidth=e.width,this._nodeHeight=e.height,this._currentNodeIdx=0}hr.prototype={clear:function(){for(var e=0;e<this._textureAtlasNodes.length;e++)this._textureAtlasNodes[e].clear();this._currentNodeIdx=0,this._zr.clear(),this._coords={}},getWidth:function(){return this._width},getHeight:function(){return this._height},getTexture:function(){return this._texture},getDevicePixelRatio:function(){return this._dpr},getZr:function(){return this._zr},_getCurrentNode:function(){return this._textureAtlasNodes[this._currentNodeIdx]},_expand:function(){if(this._currentNodeIdx++,this._textureAtlasNodes[this._currentNodeIdx])return this._textureAtlasNodes[this._currentNodeIdx];var e=4096/this._dpr,t=this._textureAtlasNodes.length,n=t*this._nodeWidth%e,r=Math.floor(t*this._nodeWidth/e)*this._nodeHeight;if(!(r>=e)){var i=(n+this._nodeWidth)*this._dpr,a=(r+this._nodeHeight)*this._dpr;try{this._zr.resize({width:i,height:a})}catch{this._canvas.width=i,this._canvas.height=a}var o=new mr(this._zr,n,r,this._nodeWidth,this._nodeHeight,this._gap,this._dpr);return this._textureAtlasNodes.push(o),o}},add:function(e,t,n){if(this._coords[e.id])return this._coords[e.id];var r=this._getCurrentNode().add(e,t,n);if(!r){var i=this._expand();if(!i)return;r=i.add(e,t,n)}return this._coords[e.id]=r,r},getCoordsScale:function(){var e=this._dpr;return[this._nodeWidth/this._canvas.width*e,this._nodeHeight/this._canvas.height*e]},getCoords:function(e){return this._coords[e]},dispose:function(){this._zr.dispose()}};function gr(){}gr.prototype={constructor:gr,setScene:function(e){this._scene=e,this._skybox&&this._skybox.attachScene(this._scene)},initLight:function(e){this._lightRoot=e,this.mainLight=new Y.DirectionalLight({shadowBias:.005}),this.ambientLight=new Y.AmbientLight,e.add(this.mainLight),e.add(this.ambientLight)},dispose:function(){this._lightRoot&&(this._lightRoot.remove(this.mainLight),this._lightRoot.remove(this.ambientLight))},updateLight:function(e){var t=this.mainLight,n=this.ambientLight,r=e.getModel(`light`),i=r.getModel(`main`),a=r.getModel(`ambient`);t.intensity=i.get(`intensity`),n.intensity=a.get(`intensity`),t.color=Y.parseColor(i.get(`color`)).slice(0,3),n.color=Y.parseColor(a.get(`color`)).slice(0,3);var o=i.get(`alpha`)||0,s=i.get(`beta`)||0;t.position.setArray(Y.directionFromAlphaBeta(o,s)),t.lookAt(Y.Vector3.ZERO),t.castShadow=i.get(`shadow`),t.shadowResolution=Y.getShadowResolution(i.get(`shadowQuality`))},updateAmbientCubemap:function(e,t,n){var r=t.getModel(`light.ambientCubemap`),i=r.get(`texture`);if(i){this._cubemapLightsCache=this._cubemapLightsCache||{};var a=this._cubemapLightsCache[i];if(!a){var o=this;a=this._cubemapLightsCache[i]=Y.createAmbientCubemap(r.option,e,n,function(){o._isSkyboxFromAmbientCubemap&&o._skybox.setEnvironmentMap(a.specular.cubemap),n.getZr().refresh()})}this._lightRoot.add(a.diffuse),this._lightRoot.add(a.specular),this._currentCubemapLights=a}else this._currentCubemapLights&&=(this._lightRoot.remove(this._currentCubemapLights.diffuse),this._lightRoot.remove(this._currentCubemapLights.specular),null)},updateSkybox:function(e,n,r){var i=n.get(`environment`),a=this;function o(){return a._skybox=a._skybox||new At,a._skybox}var s=o();if(i&&i!==`none`)if(i===`auto`)if(this._isSkyboxFromAmbientCubemap=!0,this._currentCubemapLights){var c=this._currentCubemapLights.specular.cubemap;s.setEnvironmentMap(c),this._scene&&s.attachScene(this._scene),s.material.set(`lod`,3)}else this._skybox&&this._skybox.detachScene();else if(typeof i==`object`&&i.colorStops||typeof i==`string`&&_e(i)){this._isSkyboxFromAmbientCubemap=!1;var l=new Y.Texture2D({anisotropic:8,flipY:!1});s.setEnvironmentMap(l);var u=l.image=document.createElement(`canvas`);u.width=u.height=16,m(u.getContext(`2d`),new t({shape:{x:0,y:0,width:16,height:16},style:{fill:i}})),s.attachScene(this._scene)}else{this._isSkyboxFromAmbientCubemap=!1;var l=Y.loadTexture(i,r,{anisotropic:8,flipY:!1});s.setEnvironmentMap(l),s.attachScene(this._scene)}else this._skybox&&this._skybox.detachScene(this._scene),this._skybox=null;var d=n.coordinateSystem;if(this._skybox)if(d&&d.viewGL&&i!==`auto`&&!(i.match&&i.match(/.hdr$/))){var f=d.viewGL.isLinearSpace()?`define`:`undefine`;this._skybox.material[f](`fragment`,`SRGB_DECODE`)}else this._skybox.material.undefine(`fragment`,`SRGB_DECODE`)}};var _r=ur.vec3,vr=V.extend(function(){return{segmentScale:1,useNativeLine:!0,attributes:{position:new V.Attribute(`position`,`float`,3,`POSITION`),normal:new V.Attribute(`normal`,`float`,3,`NORMAL`),color:new V.Attribute(`color`,`float`,4,`COLOR`)}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setQuadCount:function(e){var t=this.attributes,n=this.getQuadVertexCount()*e,r=this.getQuadTriangleCount()*e;this.vertexCount!==n&&(t.position.init(n),t.normal.init(n),t.color.init(n)),this.triangleCount!==r&&(this.indices=n>65535?new Uint32Array(r*3):new Uint16Array(r*3))},getQuadVertexCount:function(){return 4},getQuadTriangleCount:function(){return 2},addQuad:function(){var e=_r.create(),t=_r.create(),n=_r.create(),r=[0,3,1,3,2,1];return function(i,a){var o=this.attributes.position,s=this.attributes.normal,c=this.attributes.color;_r.sub(e,i[1],i[0]),_r.sub(t,i[2],i[1]),_r.cross(n,e,t),_r.normalize(n,n);for(var l=0;l<4;l++)o.set(this._vertexOffset+l,i[l]),c.set(this._vertexOffset+l,a),s.set(this._vertexOffset+l,n);for(var u=this._faceOffset*3,l=0;l<6;l++)this.indices[u+l]=r[l]+this._vertexOffset;this._vertexOffset+=4,this._faceOffset+=2}}()});De(vr.prototype,lr);var yr=G.firstNotNull,br={x:0,y:2,z:1};function xr(e,t,n,r){var i=[0,0,0],a=r<0?n.getExtentMin():n.getExtentMax();i[br[n.dim]]=a,e.position.setArray(i),e.rotation.identity(),t.distance=-Math.abs(a),t.normal.set(0,0,0),n.dim===`x`?(e.rotation.rotateY(r*Math.PI/2),t.normal.x=-r):n.dim===`z`?(e.rotation.rotateX(-r*Math.PI/2),t.normal.y=-r):(r>0&&e.rotation.rotateY(Math.PI),t.normal.z=-r)}function Sr(e,t,n){this.rootNode=new Y.Node;var r=new Y.Mesh({geometry:new pr({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:1}),i=new Y.Mesh({geometry:new vr,material:n,castShadow:!1,culling:!1,ignorePicking:!0,$ignorePicking:!0,renderOrder:0});this.rootNode.add(i),this.rootNode.add(r),this.faceInfo=e,this.plane=new Y.Plane,this.linesMesh=r,this.quadsMesh=i}Sr.prototype.update=function(e,t,n){var r=e.coordinateSystem,i=[r.getAxis(this.faceInfo[0]),r.getAxis(this.faceInfo[1])],a=this.linesMesh.geometry,o=this.quadsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0),this._updateSplitLines(a,i,e,n),this._udpateSplitAreas(o,i,e,n),a.convertToTypedArray(),o.convertToTypedArray();var s=r.getAxis(this.faceInfo[2]);xr(this.rootNode,this.plane,s,this.faceInfo[3])},Sr.prototype._updateSplitLines=function(e,t,n,r){var i=r.getDevicePixelRatio();t.forEach(function(r,a){var o=r.model,s=t[1-a].getExtent();if(!r.scale.isBlank()){var c=o.getModel(`splitLine`,n.getModel(`splitLine`));if(c.get(`show`)){var l=c.getModel(`lineStyle`),u=l.get(`color`),d=yr(l.get(`opacity`),1),f=yr(l.get(`width`),1);u=we(u)?u:[u];for(var p=r.getTicksCoords({tickModel:c}),m=0,h=0;h<p.length;h++){var g=p[h].coord,_=Y.parseColor(u[m%u.length]);_[3]*=d;var v=[0,0,0],y=[0,0,0];v[a]=y[a]=g,v[1-a]=s[0],y[1-a]=s[1],e.addLine(v,y,_,f*i),m++}}}})},Sr.prototype._udpateSplitAreas=function(e,t,n,r){t.forEach(function(r,i){var a=r.model,o=t[1-i].getExtent();if(!r.scale.isBlank()){var s=a.getModel(`splitArea`,n.getModel(`splitArea`));if(s.get(`show`)){var c=s.getModel(`areaStyle`),l=c.get(`color`),u=yr(c.get(`opacity`),1);l=we(l)?l:[l];for(var d=r.getTicksCoords({tickModel:s,clamp:!0}),f=0,p=[0,0,0],m=[0,0,0],h=0;h<d.length;h++){var g=d[h].coord,_=[0,0,0],v=[0,0,0];if(_[i]=v[i]=g,_[1-i]=o[0],v[1-i]=o[1],h===0){p=_,m=v;continue}var y=Y.parseColor(l[f%l.length]);y[3]*=u,e.addQuad([p,_,v,m],y),p=_,m=v,f++}}}})};var Cr=[0,1,2,0,2,3],wr=V.extend(function(){return{attributes:{position:new V.Attribute(`position`,`float`,3,`POSITION`),texcoord:new V.Attribute(`texcoord`,`float`,2,`TEXCOORD_0`),offset:new V.Attribute(`offset`,`float`,2),color:new V.Attribute(`color`,`float`,4,`COLOR`)}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setSpriteCount:function(e){this._spriteCount=e;var t=e*4,n=e*2;this.vertexCount!==t&&(this.attributes.position.init(t),this.attributes.offset.init(t),this.attributes.color.init(t)),this.triangleCount!==n&&(this.indices=t>65535?new Uint32Array(n*3):new Uint16Array(n*3))},setSpriteAlign:function(e,t,n,r,i){n??=`left`,r??=`top`;var a,o,s,c;switch(i||=0,n){case`left`:a=i,s=t[0]+i;break;case`center`:case`middle`:a=-t[0]/2,s=t[0]/2;break;case`right`:a=-t[0]-i,s=-i;break}switch(r){case`bottom`:o=i,c=t[1]+i;break;case`middle`:o=-t[1]/2,c=t[1]/2;break;case`top`:o=-t[1]-i,c=-i;break}var l=e*4,u=this.attributes.offset;u.set(l,[a,c]),u.set(l+1,[s,c]),u.set(l+2,[s,o]),u.set(l+3,[a,o])},addSprite:function(e,t,n,r,i,a){var o=this._vertexOffset;this.setSprite(this._vertexOffset/4,e,t,n,r,i,a);for(var s=0;s<Cr.length;s++)this.indices[this._faceOffset*3+s]=Cr[s]+o;return this._faceOffset+=2,this._vertexOffset+=4,o/4},setSprite:function(e,t,n,r,i,a,o){for(var s=e*4,c=this.attributes,l=0;l<4;l++)c.position.set(s+l,t);var u=c.texcoord;u.set(s,[r[0][0],r[0][1]]),u.set(s+1,[r[1][0],r[0][1]]),u.set(s+2,[r[1][0],r[1][1]]),u.set(s+3,[r[0][0],r[1][1]]),this.setSpriteAlign(e,n,i,a,o)}});De(wr.prototype,lr),Y.Shader.import(`@export ecgl.labels.vertex

attribute vec3 position: POSITION;
attribute vec2 texcoord: TEXCOORD_0;
attribute vec2 offset;
#ifdef VERTEX_COLOR
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec2 v_Texcoord;

void main()
{
 vec4 proj = worldViewProjection * vec4(position, 1.0);

 vec2 screen = (proj.xy / abs(proj.w) + 1.0) * 0.5 * viewport.zw;

 screen += offset;

 proj.xy = (screen / viewport.zw - 0.5) * 2.0 * abs(proj.w);
 gl_Position = proj;
#ifdef VERTEX_COLOR
 v_Color = a_Color;
#endif
 v_Texcoord = texcoord;
}
@end


@export ecgl.labels.fragment

uniform vec3 color : [1.0, 1.0, 1.0];
uniform float alpha : 1.0;
uniform sampler2D textureAtlas;
uniform vec2 uvScale: [1.0, 1.0];

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif
varying float v_Miter;

varying vec2 v_Texcoord;

void main()
{
 gl_FragColor = vec4(color, alpha) * texture2D(textureAtlas, v_Texcoord * uvScale);
#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
#endif
}

@end`);var Tr=Y.Mesh.extend(function(){return{geometry:new wr({dynamic:!0}),material:new Y.Material({shader:Y.createShader(`ecgl.labels`),transparent:!0,depthMask:!1}),culling:!1,castShadow:!1,ignorePicking:!0}}),Er=G.firstNotNull,Dr={x:0,y:2,z:1};function Or(e,t){var n=new Y.Mesh({geometry:new pr({useNativeLine:!1}),material:t,castShadow:!1,ignorePicking:!0,renderOrder:2}),r=new Tr;r.material.depthMask=!1;var i=new Y.Node;i.add(n),i.add(r),this.rootNode=i,this.dim=e,this.linesMesh=n,this.labelsMesh=r,this.axisLineCoords=null,this.labelElements=[]}var kr={x:`y`,y:`x`,z:`y`};Or.prototype.update=function(e,t,n){var i=e.coordinateSystem.getAxis(this.dim),a=this.linesMesh.geometry,o=this.labelsMesh.geometry;a.convertToDynamicArray(!0),o.convertToDynamicArray(!0);var s=i.model,c=i.getExtent(),l=n.getDevicePixelRatio(),u=s.getModel(`axisLine`,e.getModel(`axisLine`)),d=s.getModel(`axisTick`,e.getModel(`axisTick`)),f=s.getModel(`axisLabel`,e.getModel(`axisLabel`)),m=u.get(`lineStyle.color`);if(u.get(`show`)){var h=u.getModel(`lineStyle`),g=[0,0,0],_=[0,0,0],v=Dr[i.dim];g[v]=c[0],_[v]=c[1],this.axisLineCoords=[g,_];var y=Y.parseColor(m),b=Er(h.get(`width`),1),S=Er(h.get(`opacity`),1);y[3]*=S,a.addLine(g,_,y,b*l)}if(d.get(`show`)){var C=d.getModel(`lineStyle`),w=Y.parseColor(Er(C.get(`color`),m)),b=Er(C.get(`width`),1);w[3]*=Er(C.get(`opacity`),1);for(var T=i.getTicksCoords(),E=d.get(`length`),D=0;D<T.length;D++){var O=T[D].coord,g=[0,0,0],_=[0,0,0],v=Dr[i.dim],k=Dr[kr[i.dim]];g[v]=_[v]=O,_[k]=E,a.addLine(g,_,w,b*l)}}this.labelElements=[];var l=n.getDevicePixelRatio();if(f.get(`show`))for(var T=i.getTicksCoords(),A=s.get(`data`),j=f.get(`margin`),ee=i.getViewLabels(),D=0;D<ee.length;D++){var M=ee[D].tickValue,te=ee[D].formattedLabel,ne=ee[D].rawLabel,O=i.dataToCoord(M),N=[0,0,0],v=Dr[i.dim],k=Dr[kr[i.dim]];N[v]=N[v]=O,N[k]=j;var re=f;A&&A[M]&&A[M].textStyle&&(re=new r(A[M].textStyle,f,s.ecModel));var ie=Er(re.get(`color`),m),ae=new x({style:p(re,{text:te,fill:typeof ie==`function`?ie(i.type===`category`?ne:i.type===`value`?M+``:M,D):ie,verticalAlign:`top`,align:`left`})}),oe=t.add(ae),P=ae.getBoundingRect();o.addSprite(N,[P.width*l,P.height*l],oe),this.labelElements.push(ae)}if(s.get(`name`)){var se=s.getModel(`nameTextStyle`),N=[0,0,0],v=Dr[i.dim],k=Dr[kr[i.dim]],ce=Er(se.get(`color`),m),le=se.get(`borderColor`),b=se.get(`borderWidth`);N[v]=N[v]=(c[0]+c[1])/2,N[k]=s.get(`nameGap`);var ae=new x({style:p(se,{text:s.get(`name`),fill:ce,stroke:le,lineWidth:b})}),oe=t.add(ae),P=ae.getBoundingRect();o.addSprite(N,[P.width*l,P.height*l],oe),ae.__idx=this.labelElements.length,this.nameLabelElement=ae}this.labelsMesh.material.set(`textureAtlas`,t.getTexture()),this.labelsMesh.material.set(`uvScale`,t.getCoordsScale()),a.convertToTypedArray(),o.convertToTypedArray()},Or.prototype.setSpriteAlign=function(e,t,n){for(var r=n.getDevicePixelRatio(),i=this.labelsMesh.geometry,a=0;a<this.labelElements.length;a++){var o=this.labelElements[a].getBoundingRect();i.setSpriteAlign(a,[o.width*r,o.height*r],e,t)}var s=this.nameLabelElement;if(s){var o=s.getBoundingRect();i.setSpriteAlign(s.__idx,[o.width*r,o.height*r],e,t),i.dirty()}this.textAlign=e,this.textVerticalAlign=t};var Ar=`@export ecgl.lines3D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec3 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

void main()
{
 gl_Position = worldViewProjection * vec4(position, 1.0);
 v_Color = a_Color;
}

@end

@export ecgl.lines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif
}
@end



@export ecgl.lines3D.clipNear

vec4 clipNear(vec4 p1, vec4 p2) {
 float n = (p1.w - near) / (p1.w - p2.w);
 return vec4(mix(p1.xy, p2.xy, n), -near, near);
}

@end

@export ecgl.lines3D.expandLine
#ifdef VERTEX_ANIMATION
 vec4 prevProj = worldViewProjection * vec4(mix(prevPositionPrev, positionPrev, percent), 1.0);
 vec4 currProj = worldViewProjection * vec4(mix(prevPosition, position, percent), 1.0);
 vec4 nextProj = worldViewProjection * vec4(mix(prevPositionNext, positionNext, percent), 1.0);
#else
 vec4 prevProj = worldViewProjection * vec4(positionPrev, 1.0);
 vec4 currProj = worldViewProjection * vec4(position, 1.0);
 vec4 nextProj = worldViewProjection * vec4(positionNext, 1.0);
#endif

 if (currProj.w < 0.0) {
 if (nextProj.w > 0.0) {
 currProj = clipNear(currProj, nextProj);
 }
 else if (prevProj.w > 0.0) {
 currProj = clipNear(currProj, prevProj);
 }
 }

 vec2 prevScreen = (prevProj.xy / abs(prevProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 currScreen = (currProj.xy / abs(currProj.w) + 1.0) * 0.5 * viewport.zw;
 vec2 nextScreen = (nextProj.xy / abs(nextProj.w) + 1.0) * 0.5 * viewport.zw;

 vec2 dir;
 float len = offset;
 if (position == positionPrev) {
 dir = normalize(nextScreen - currScreen);
 }
 else if (position == positionNext) {
 dir = normalize(currScreen - prevScreen);
 }
 else {
 vec2 dirA = normalize(currScreen - prevScreen);
 vec2 dirB = normalize(nextScreen - currScreen);

 vec2 tanget = normalize(dirA + dirB);

 float miter = 1.0 / max(dot(tanget, dirA), 0.5);
 len *= miter;
 dir = tanget;
 }

 dir = vec2(-dir.y, dir.x) * len;
 currScreen += dir;

 currProj.xy = (currScreen / viewport.zw - 0.5) * 2.0 * abs(currProj.w);
@end


@export ecgl.meshLines3D.vertex

attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute vec4 a_Color : COLOR;

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute vec3 prevPositionPrev;
attribute vec3 prevPositionNext;
uniform float percent : 1.0;
#endif

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

varying vec4 v_Color;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain
}
@end


@export ecgl.meshLines3D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain
}

@end`,jr=G.firstNotNull;Y.Shader.import(Ar);var Mr={x:0,y:2,z:1},Nr=ue.extend({type:`grid3D`,__ecgl__:!0,init:function(e,t){var n=[[`y`,`z`,`x`,-1,`left`],[`y`,`z`,`x`,1,`right`],[`x`,`y`,`z`,-1,`bottom`],[`x`,`y`,`z`,1,`top`],[`x`,`z`,`y`,-1,`far`],[`x`,`z`,`y`,1,`near`]],r=[`x`,`y`,`z`],i=new Y.Material({shader:Y.createShader(`ecgl.color`),depthMask:!1,transparent:!0}),a=new Y.Material({shader:Y.createShader(`ecgl.meshLines3D`),depthMask:!1,transparent:!0});i.define(`fragment`,`DOUBLE_SIDED`),i.define(`both`,`VERTEX_COLOR`),this.groupGL=new Y.Node,this._control=new cr({zr:t.getZr()}),this._control.init(),this._faces=n.map(function(e){var t=new Sr(e,a,i);return this.groupGL.add(t.rootNode),t},this),this._axes=r.map(function(e){var t=new Or(e,a);return this.groupGL.add(t.rootNode),t},this);var o=t.getDevicePixelRatio();this._axisLabelSurface=new hr({width:256,height:256,devicePixelRatio:o}),this._axisLabelSurface.onupdate=function(){t.getZr().refresh()},this._axisPointerLineMesh=new Y.Mesh({geometry:new pr({useNativeLine:!1}),material:a,castShadow:!1,ignorePicking:!0,renderOrder:3}),this.groupGL.add(this._axisPointerLineMesh),this._axisPointerLabelsSurface=new hr({width:128,height:128,devicePixelRatio:o}),this._axisPointerLabelsMesh=new Tr({ignorePicking:!0,renderOrder:4,castShadow:!1}),this._axisPointerLabelsMesh.material.set(`textureAtlas`,this._axisPointerLabelsSurface.getTexture()),this.groupGL.add(this._axisPointerLabelsMesh),this._lightRoot=new Y.Node,this._sceneHelper=new gr,this._sceneHelper.initLight(this._lightRoot)},render:function(e,t,n){this._model=e,this._api=n;var r=e.coordinateSystem;r.viewGL.add(this._lightRoot),e.get(`show`)?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL);var i=this._control;i.setViewGL(r.viewGL);var a=e.getModel(`viewControl`);i.setFromViewControlModel(a,0),this._axisLabelSurface.clear(),i.off(`update`),e.get(`show`)&&(this._faces.forEach(function(r){r.update(e,t,n)},this),this._axes.forEach(function(t){t.update(e,this._axisLabelSurface,n)},this)),i.on(`update`,this._onCameraChange.bind(this,e,n),this),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel(`postEffect`),n),r.viewGL.setTemporalSuperSampling(e.getModel(`temporalSuperSampling`)),this._initMouseHandler(e)},afterRender:function(e,t,n,r){var i=r.renderer;this._sceneHelper.updateAmbientCubemap(i,e,n),this._sceneHelper.updateSkybox(i,e,n)},showAxisPointer:function(e,t,n,r){this._doShowAxisPointer(),this._updateAxisPointer(r.value)},hideAxisPointer:function(e,t,n,r){this._doHideAxisPointer()},_initMouseHandler:function(e){var t=e.coordinateSystem.viewGL;e.get(`show`)&&e.get(`axisPointer.show`)?t.on(`mousemove`,this._updateAxisPointerOnMousePosition,this):t.off(`mousemove`,this._updateAxisPointerOnMousePosition)},_updateAxisPointerOnMousePosition:function(e){if(!e.target){for(var t=this._model.coordinateSystem,n=t.viewGL,r=n.castRay(e.offsetX,e.offsetY,new Y.Ray),i,a=0;a<this._faces.length;a++){var o=this._faces[a];if(!o.rootNode.invisible){o.plane.normal.dot(n.camera.worldTransform.z)<0&&o.plane.normal.negate();var s=r.intersectPlane(o.plane);if(s){var c=t.getAxis(o.faceInfo[0]),l=t.getAxis(o.faceInfo[1]),u=Mr[o.faceInfo[0]],d=Mr[o.faceInfo[1]];c.contain(s.array[u])&&l.contain(s.array[d])&&(i=s)}}}if(i){var f=t.pointToData(i.array,[],!0);this._updateAxisPointer(f),this._doShowAxisPointer()}else this._doHideAxisPointer()}},_onCameraChange:function(e,t){e.get(`show`)&&(this._updateFaceVisibility(),this._updateAxisLinePosition());var n=this._control;t.dispatchAction({type:`grid3DChangeCamera`,alpha:n.getAlpha(),beta:n.getBeta(),distance:n.getDistance(),center:n.getCenter(),from:this.uid,grid3DId:e.id})},_updateFaceVisibility:function(){var e=this._control.getCamera(),t=new Y.Vector3;e.update();for(var n=0;n<this._faces.length/2;n++){for(var r=[],i=0;i<2;i++)this._faces[n*2+i].rootNode.getWorldPosition(t),t.transformMat4(e.viewMatrix),r[i]=t.z;var a=r[0]>r[1]?0:1,o=this._faces[n*2+a],s=this._faces[n*2+1-a];o.rootNode.invisible=!0,s.rootNode.invisible=!1}},_updateAxisLinePosition:function(){var e=this._model.coordinateSystem,t=e.getAxis(`x`),n=e.getAxis(`y`),r=e.getAxis(`z`),i=r.getExtentMax(),a=r.getExtentMin(),o=t.getExtentMin(),s=t.getExtentMax(),c=n.getExtentMax(),l=n.getExtentMin(),u=this._axes[0].rootNode,d=this._axes[1].rootNode,f=this._axes[2].rootNode,p=this._faces,m=p[4].rootNode.invisible?l:c,h=p[2].rootNode.invisible?i:a,g=p[0].rootNode.invisible?o:s,_=p[2].rootNode.invisible?i:a,v=p[0].rootNode.invisible?s:o,y=p[4].rootNode.invisible?l:c;u.rotation.identity(),d.rotation.identity(),f.rotation.identity(),p[4].rootNode.invisible&&(this._axes[0].flipped=!0,u.rotation.rotateX(Math.PI)),p[0].rootNode.invisible&&(this._axes[1].flipped=!0,d.rotation.rotateZ(Math.PI)),p[4].rootNode.invisible&&(this._axes[2].flipped=!0,f.rotation.rotateY(Math.PI)),u.position.set(0,h,m),d.position.set(g,_,0),f.position.set(v,0,y),u.update(),d.update(),f.update(),this._updateAxisLabelAlign()},_updateAxisLabelAlign:function(){var e=this._control.getCamera(),t=[new Y.Vector4,new Y.Vector4],n=new Y.Vector4;this.groupGL.getWorldPosition(n),n.w=1,n.transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),n.x/=n.w,n.y/=n.w,this._axes.forEach(function(r){var i=r.axisLineCoords;r.labelsMesh.geometry;for(var a=0;a<t.length;a++)t[a].setArray(i[a]),t[a].w=1,t[a].transformMat4(r.rootNode.worldTransform).transformMat4(e.viewMatrix).transformMat4(e.projectionMatrix),t[a].x/=t[a].w,t[a].y/=t[a].w;var o=t[1].x-t[0].x,s=t[1].y-t[0].y,c=(t[1].x+t[0].x)/2,l=(t[1].y+t[0].y)/2,u,d;Math.abs(s/o)<.5?(u=`center`,d=l>n.y?`bottom`:`top`):(d=`middle`,u=c>n.x?`left`:`right`),r.setSpriteAlign(u,d,this._api)},this)},_doShowAxisPointer:function(){this._axisPointerLineMesh.invisible&&(this._axisPointerLineMesh.invisible=!1,this._axisPointerLabelsMesh.invisible=!1,this._api.getZr().refresh())},_doHideAxisPointer:function(){this._axisPointerLineMesh.invisible||(this._axisPointerLineMesh.invisible=!0,this._axisPointerLabelsMesh.invisible=!0,this._api.getZr().refresh())},_updateAxisPointer:function(e){var t=this._model.coordinateSystem,n=t.dataToPoint(e),r=this._axisPointerLineMesh.geometry,i=this._model.getModel(`axisPointer`),a=this._api.getDevicePixelRatio();r.convertToDynamicArray(!0);function o(e){return G.firstNotNull(e.model.get(`axisPointer.show`),i.get(`show`))}function s(e){var t=e.model.getModel(`axisPointer`,i).getModel(`lineStyle`),n=Y.parseColor(t.get(`color`)),r=jr(t.get(`width`),1),a=jr(t.get(`opacity`),1);return n[3]*=a,{color:n,lineWidth:r}}for(var c=0;c<this._faces.length;c++){var l=this._faces[c];if(!l.rootNode.invisible){for(var u=l.faceInfo,d=u[3]<0?t.getAxis(u[2]).getExtentMin():t.getAxis(u[2]).getExtentMax(),f=Mr[u[2]],p=0;p<2;p++){var m=u[p],h=u[1-p],g=t.getAxis(m),_=t.getAxis(h);if(o(g)){var v=[0,0,0],y=[0,0,0],b=Mr[m],x=Mr[h];v[b]=y[b]=n[b],v[f]=y[f]=d,v[x]=_.getExtentMin(),y[x]=_.getExtentMax();var S=s(g);r.addLine(v,y,S.color,S.lineWidth*a)}}if(o(t.getAxis(u[2]))){var v=n.slice(),y=n.slice();y[f]=d;var S=s(t.getAxis(u[2]));r.addLine(v,y,S.color,S.lineWidth*a)}}}r.convertToTypedArray(),this._updateAxisPointerLabelsMesh(e),this._api.getZr().refresh()},_updateAxisPointerLabelsMesh:function(e){var t=this._model,n=this._axisPointerLabelsMesh,r=this._axisPointerLabelsSurface,i=t.coordinateSystem,a=t.getModel(`axisPointer`);n.geometry.convertToDynamicArray(!0),r.clear();var o={x:`y`,y:`x`,z:`y`};this._axes.forEach(function(t,s){var c=i.getAxis(t.dim),l=c.model.getModel(`axisPointer`,a),u=l.getModel(`label`),d=l.get(`lineStyle.color`);if(!(!u.get(`show`)||!l.get(`show`))){var f=e[s],m=u.get(`formatter`),h=c.scale.getLabel({value:f});if(m!=null)h=m(h,e);else if(c.scale.type===`interval`||c.scale.type===`log`){var g=de(c.scale.getTicks()[0]);h=f.toFixed(g+2)}var _=u.get(`color`),v=new x({style:p(u,{text:h,fill:_||d,align:`left`,verticalAlign:`top`})}),y=r.add(v),b=v.getBoundingRect(),S=this._api.getDevicePixelRatio(),C=t.rootNode.position.toArray(),w=Mr[o[t.dim]];C[w]+=(t.flipped?-1:1)*u.get(`margin`),C[Mr[t.dim]]=c.dataToCoord(e[s]),n.geometry.addSprite(C,[b.width*S,b.height*S],y,t.textAlign,t.textVerticalAlign)}},this),r.getZr().refreshImmediately(),n.material.set(`uvScale`,r.getCoordsScale()),n.geometry.convertToTypedArray()},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._axisLabelSurface.dispose(),this._axisPointerLabelsSurface.dispose()}});function Pr(e){d.call(this,e),this.type=`cartesian3D`,this.dimensions=[`x`,`y`,`z`],this.size=[0,0,0]}Pr.prototype={constructor:Pr,model:null,containPoint:function(e){return this.getAxis(`x`).contain(e[0])&&this.getAxis(`y`).contain(e[2])&&this.getAxis(`z`).contain(e[1])},containData:function(e){return this.getAxis(`x`).containData(e[0])&&this.getAxis(`y`).containData(e[1])&&this.getAxis(`z`).containData(e[2])},dataToPoint:function(e,t,n){return t||=[],t[0]=this.getAxis(`x`).dataToCoord(e[0],n),t[2]=this.getAxis(`y`).dataToCoord(e[1],n),t[1]=this.getAxis(`z`).dataToCoord(e[2],n),t},pointToData:function(e,t,n){return t||=[],t[0]=this.getAxis(`x`).coordToData(e[0],n),t[1]=this.getAxis(`y`).coordToData(e[2],n),t[2]=this.getAxis(`z`).coordToData(e[1],n),t}},Oe(Pr,d);function Fr(e,t,n){T.call(this,e,t,n)}Fr.prototype={constructor:Fr,getExtentMin:function(){var e=this._extent;return Math.min(e[0],e[1])},getExtentMax:function(){var e=this._extent;return Math.max(e[0],e[1])},calculateCategoryInterval:function(){return Math.floor(this.scale.count()/8)}},Oe(Fr,T);var Ir=He.extend(function(){return{name:``,inputLinks:{},outputLinks:{},_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},{updateParameter:function(e,t){var n=this.outputs[e],r=n.parameters,i=n._parametersCopy;if(i||=n._parametersCopy={},r)for(var a in r)a!==`width`&&a!==`height`&&(i[a]=r[a]);var o=r.width instanceof Function?r.width.call(this,t):r.width,s=r.height instanceof Function?r.height.call(this,t):r.height;return(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t.gl),i.width=o,i.height=s,i},setParameter:function(e,t){},getParameter:function(e){},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},render:function(){},getOutput:function(e,t){if(t==null)return t=e,this._outputTextures[t];var n=this.outputs[t];if(n)return this._rendered?n.outputLastFrame?this._prevOutputTextures[t]:this._outputTextures[t]:this._rendering?(this._prevOutputTextures[t]||(this._prevOutputTextures[t]=this._compositor.allocateTexture(n.parameters||{})),this._prevOutputTextures[t]):(this.render(e),this._outputTextures[t])},removeReference:function(e){this._outputReferences[e]--,this._outputReferences[e]===0&&(this.outputs[e].keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e]))},link:function(e,t,n){this.inputLinks[e]={node:t,pin:n},t.outputLinks[n]||(t.outputLinks[n]=[]),t.outputLinks[n].push({node:this,pin:e}),this.pass.material.enableTexture(e)},clear:function(){this.inputLinks={},this.outputLinks={}},updateReference:function(e){if(!this._rendering){for(var t in this._rendering=!0,this.inputLinks){var n=this.inputLinks[t];n.node.updateReference(n.pin)}this._rendering=!1}e&&this._outputReferences[e]++},beforeFrame:function(){for(var e in this._rendered=!1,this.outputLinks)this._outputReferences[e]=0},afterFrame:function(){for(var e in this.outputLinks)this._outputReferences[e]>0&&(this.outputs[e].keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e]))}}),Lr=He.extend(function(){return{nodes:[]}},{dirty:function(){this._dirty=!0},addNode:function(e){this.nodes.indexOf(e)>=0||(this.nodes.push(e),this._dirty=!0)},removeNode:function(e){typeof e==`string`&&(e=this.getNodeByName(e));var t=this.nodes.indexOf(e);t>=0&&(this.nodes.splice(t,1),this._dirty=!0)},getNodeByName:function(e){for(var t=0;t<this.nodes.length;t++)if(this.nodes[t].name===e)return this.nodes[t]},update:function(){for(var e=0;e<this.nodes.length;e++)this.nodes[e].clear();for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];if(t.inputs){for(var n in t.inputs)if(t.inputs[n]){if(t.pass&&!t.pass.material.isUniformEnabled(n)){console.warn(`Pin `+t.name+`.`+n+` not used.`);continue}var r=t.inputs[n],i=this.findPin(r);i?t.link(n,i.node,i.pin):console.warn(typeof r==`string`?`Node `+r+` not exist`:`Pin of `+r.node+`.`+r.pin+` not exist`)}}}},findPin:function(e){var t;if((typeof e==`string`||e instanceof Ir)&&(e={node:e}),typeof e.node==`string`)for(var n=0;n<this.nodes.length;n++){var r=this.nodes[n];r.name===e.node&&(t=r)}else t=e.node;if(t){var i=e.pin;if(i||t.outputs&&(i=Object.keys(t.outputs)[0]),t.outputs[i])return{node:t,pin:i}}}}),Rr=Lr.extend(function(){return{_outputs:[],_texturePool:new $e,_frameBuffer:new et({depthBuffer:!1})}},{addNode:function(e){Lr.prototype.addNode.call(this,e),e._compositor=this},render:function(e,t){if(this._dirty){this.update(),this._dirty=!1,this._outputs.length=0;for(var n=0;n<this.nodes.length;n++)this.nodes[n].outputs||this._outputs.push(this.nodes[n])}for(var n=0;n<this.nodes.length;n++)this.nodes[n].beforeFrame();for(var n=0;n<this._outputs.length;n++)this._outputs[n].updateReference();for(var n=0;n<this._outputs.length;n++)this._outputs[n].render(e,t);for(var n=0;n<this.nodes.length;n++)this.nodes[n].afterFrame()},allocateTexture:function(e){return this._texturePool.get(e)},releaseTexture:function(e){this._texturePool.put(e)},getFrameBuffer:function(){return this._frameBuffer},dispose:function(e){this._texturePool.clear(e)}}),zr=Ir.extend({name:`scene`,scene:null,camera:null,autoUpdateScene:!0,preZ:!1},function(){this.frameBuffer=new et},{render:function(e){this._rendering=!0;var t=e.gl;this.trigger(`beforerender`);var n;if(!this.outputs)n=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ);else{var r=this.frameBuffer;for(var i in this.outputs){var a=this.updateParameter(i,e),o=this.outputs[i],s=this._compositor.allocateTexture(a);this._outputTextures[i]=s;var c=o.attachment||t.COLOR_ATTACHMENT0;typeof c==`string`&&(c=t[c]),r.attach(s,c)}r.bind(e);var l=e.getGLExtension(`EXT_draw_buffers`);if(l){var u=[];for(var c in this.outputs)c=parseInt(c),c>=t.COLOR_ATTACHMENT0&&c<=t.COLOR_ATTACHMENT0+8&&u.push(c);l.drawBuffersEXT(u)}e.saveClear(),e.clearBit=Le.DEPTH_BUFFER_BIT|Le.COLOR_BUFFER_BIT,n=e.render(this.scene,this.camera,!this.autoUpdateScene,this.preZ),e.restoreClear(),r.unbind(e)}this.trigger(`afterrender`,n),this._rendering=!1,this._rendered=!0}}),Br=Ir.extend(function(){return{texture:null,outputs:{color:{}}}},function(){},{getOutput:function(e,t){return this.texture},beforeFrame:function(){},afterFrame:function(){}}),Vr=Ir.extend(function(){return{name:``,inputs:{},outputs:null,shader:``,inputLinks:{},outputLinks:{},pass:null,_prevOutputTextures:{},_outputTextures:{},_outputReferences:{},_rendering:!1,_rendered:!1,_compositor:null}},function(){var e=new tt({fragment:this.shader});this.pass=e},{render:function(e,t){this.trigger(`beforerender`,e),this._rendering=!0;var n=e.gl;for(var r in this.inputLinks){var i=this.inputLinks[r],a=i.node.getOutput(e,i.pin);this.pass.setUniform(r,a)}if(!this.outputs)this.pass.outputs=null,this._compositor.getFrameBuffer().unbind(e),this.pass.render(e,t);else{this.pass.outputs={};var o={};for(var s in this.outputs){var c=this.updateParameter(s,e);isNaN(c.width)&&this.updateParameter(s,e);var l=this.outputs[s],u=this._compositor.allocateTexture(c);this._outputTextures[s]=u;var d=l.attachment||n.COLOR_ATTACHMENT0;typeof d==`string`&&(d=n[d]),o[d]=u}for(var d in this._compositor.getFrameBuffer().bind(e),o)this._compositor.getFrameBuffer().attach(o[d],d);this.pass.render(e),this._compositor.getFrameBuffer().updateMipmap(e)}for(var r in this.inputLinks){var i=this.inputLinks[r];i.node.removeReference(i.pin)}this._rendering=!1,this._rendered=!0,this.trigger(`afterrender`,e)},updateParameter:function(e,t){var n=this.outputs[e],r=n.parameters,i=n._parametersCopy;if(i||=n._parametersCopy={},r)for(var a in r)a!==`width`&&a!==`height`&&(i[a]=r[a]);var o=typeof r.width==`function`?r.width.call(this,t):r.width,s=typeof r.height==`function`?r.height.call(this,t):r.height;return o=Math.ceil(o),s=Math.ceil(s),(i.width!==o||i.height!==s)&&this._outputTextures[e]&&this._outputTextures[e].dispose(t),i.width=o,i.height=s,i},setParameter:function(e,t){this.pass.setUniform(e,t)},getParameter:function(e){return this.pass.getUniform(e)},setParameters:function(e){for(var t in e)this.setParameter(t,e[t])},define:function(e,t){this.pass.material.define(`fragment`,e,t)},undefine:function(e){this.pass.material.undefine(`fragment`,e)},removeReference:function(e){this._outputReferences[e]--,this._outputReferences[e]===0&&(this.outputs[e].keepLastFrame?(this._prevOutputTextures[e]&&this._compositor.releaseTexture(this._prevOutputTextures[e]),this._prevOutputTextures[e]=this._outputTextures[e]):this._compositor.releaseTexture(this._outputTextures[e]))},clear:function(){Ir.prototype.clear.call(this),this.pass.material.disableTexturesAll()}}),Hr=`@export clay.compositor.coloradjust
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float exposure : 0.0;
uniform float gamma : 1.0;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = clamp(tex.rgb + vec3(brightness), 0.0, 1.0);
 color = clamp( (color-vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 color = clamp( color * pow(2.0, exposure), 0.0, 1.0);
 color = clamp( pow(color, vec3(gamma)), 0.0, 1.0);
 float luminance = dot( color, w );
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.brightness
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float brightness : 0.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = tex.rgb + vec3(brightness);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.contrast
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float contrast : 1.0;
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord);
 vec3 color = (tex.rgb-vec3(0.5))*contrast+vec3(0.5);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.exposure
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float exposure : 0.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb * pow(2.0, exposure);
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.gamma
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float gamma : 1.0;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = pow(tex.rgb, vec3(gamma));
 gl_FragColor = vec4(color, tex.a);
}
@end
@export clay.compositor.saturation
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float saturation : 1.0;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 vec3 color = tex.rgb;
 float luminance = dot(color, w);
 color = mix(vec3(luminance), color, saturation);
 gl_FragColor = vec4(color, tex.a);
}
@end`,Ur=`@export clay.compositor.kernel.gaussian_9
float gaussianKernel[9];
gaussianKernel[0] = 0.07;
gaussianKernel[1] = 0.09;
gaussianKernel[2] = 0.12;
gaussianKernel[3] = 0.14;
gaussianKernel[4] = 0.16;
gaussianKernel[5] = 0.14;
gaussianKernel[6] = 0.12;
gaussianKernel[7] = 0.09;
gaussianKernel[8] = 0.07;
@end
@export clay.compositor.kernel.gaussian_13
float gaussianKernel[13];
gaussianKernel[0] = 0.02;
gaussianKernel[1] = 0.03;
gaussianKernel[2] = 0.06;
gaussianKernel[3] = 0.08;
gaussianKernel[4] = 0.11;
gaussianKernel[5] = 0.13;
gaussianKernel[6] = 0.14;
gaussianKernel[7] = 0.13;
gaussianKernel[8] = 0.11;
gaussianKernel[9] = 0.08;
gaussianKernel[10] = 0.06;
gaussianKernel[11] = 0.03;
gaussianKernel[12] = 0.02;
@end
@export clay.compositor.gaussian_blur
#define SHADER_NAME gaussian_blur
uniform sampler2D texture;varying vec2 v_Texcoord;
uniform float blurSize : 2.0;
uniform vec2 textureSize : [512.0, 512.0];
uniform float blurDir : 0.0;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main (void)
{
 @import clay.compositor.kernel.gaussian_9
 vec2 off = blurSize / textureSize;
 off *= vec2(1.0 - blurDir, blurDir);
 vec4 sum = vec4(0.0);
 float weightAll = 0.0;
 for (int i = 0; i < 9; i++) {
 float w = gaussianKernel[i];
 vec4 texel = decodeHDR(clampSample(texture, v_Texcoord + float(i - 4) * off));
 sum += texel * w;
 weightAll += w;
 }
 gl_FragColor = encodeHDR(sum / max(weightAll, 0.01));
}
@end
`,Wr=`@export clay.compositor.hdr.log_lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 float luminance = dot(tex.rgb, w);
 luminance = log(luminance + 0.001);
 gl_FragColor = encodeHDR(vec4(vec3(luminance), 1.0));
}
@end
@export clay.compositor.hdr.lum_adaption
varying vec2 v_Texcoord;
uniform sampler2D adaptedLum;
uniform sampler2D currentLum;
uniform float frameTime : 0.02;
@import clay.util.rgbm
void main()
{
 float fAdaptedLum = decodeHDR(texture2D(adaptedLum, vec2(0.5, 0.5))).r;
 float fCurrentLum = exp(encodeHDR(texture2D(currentLum, vec2(0.5, 0.5))).r);
 fAdaptedLum += (fCurrentLum - fAdaptedLum) * (1.0 - pow(0.98, 30.0 * frameTime));
 gl_FragColor = encodeHDR(vec4(vec3(fAdaptedLum), 1.0));
}
@end
@export clay.compositor.lum
varying vec2 v_Texcoord;
uniform sampler2D texture;
const vec3 w = vec3(0.2125, 0.7154, 0.0721);
void main()
{
 vec4 tex = texture2D( texture, v_Texcoord );
 float luminance = dot(tex.rgb, w);
 gl_FragColor = vec4(vec3(luminance), 1.0);
}
@end`,Gr=`
@export clay.compositor.lut
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform sampler2D lookup;
void main()
{
 vec4 tex = texture2D(texture, v_Texcoord);
 float blueColor = tex.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * tex.g);
 vec4 newColor1 = texture2D(lookup, texPos1);
 vec4 newColor2 = texture2D(lookup, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 gl_FragColor = vec4(newColor.rgb, tex.w);
}
@end`,Kr=`@export clay.compositor.vignette
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
uniform float darkness: 1;
uniform float offset: 1;
@import clay.util.rgbm
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = texel.rgb;
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(offset);
 gl_FragColor = encodeHDR(vec4(mix(texel.rgb, vec3(1.0 - darkness), dot(uv, uv)), texel.a));
}
@end`,qr=`@export clay.compositor.output
#define OUTPUT_ALPHA
varying vec2 v_Texcoord;
uniform sampler2D texture;
@import clay.util.rgbm
void main()
{
 vec4 tex = decodeHDR(texture2D(texture, v_Texcoord));
 gl_FragColor.rgb = tex.rgb;
#ifdef OUTPUT_ALPHA
 gl_FragColor.a = tex.a;
#else
 gl_FragColor.a = 1.0;
#endif
 gl_FragColor = encodeHDR(gl_FragColor);
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Jr=`@export clay.compositor.bright
uniform sampler2D texture;
uniform float threshold : 1;
uniform float scale : 1.0;
uniform vec2 textureSize: [512, 512];
varying vec2 v_Texcoord;
const vec3 lumWeight = vec3(0.2125, 0.7154, 0.0721);
@import clay.util.rgbm
vec4 median(vec4 a, vec4 b, vec4 c)
{
 return a + b + c - min(min(a, b), c) - max(max(a, b), c);
}
void main()
{
 vec4 texel = decodeHDR(texture2D(texture, v_Texcoord));
#ifdef ANTI_FLICKER
 vec3 d = 1.0 / textureSize.xyx * vec3(1.0, 1.0, 0.0);
 vec4 s1 = decodeHDR(texture2D(texture, v_Texcoord - d.xz));
 vec4 s2 = decodeHDR(texture2D(texture, v_Texcoord + d.xz));
 vec4 s3 = decodeHDR(texture2D(texture, v_Texcoord - d.zy));
 vec4 s4 = decodeHDR(texture2D(texture, v_Texcoord + d.zy));
 texel = median(median(texel, s1, s2), s3, s4);
#endif
 float lum = dot(texel.rgb , lumWeight);
 vec4 color;
 if (lum > threshold && texel.a > 0.0)
 {
 color = vec4(texel.rgb * scale, texel.a * scale);
 }
 else
 {
 color = vec4(0.0);
 }
 gl_FragColor = encodeHDR(color);
}
@end
`,Yr=`@export clay.compositor.downsample
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
varying vec2 v_Texcoord;
@import clay.util.rgbm
float brightness(vec3 c)
{
 return max(max(c.r, c.g), c.b);
}
@import clay.util.clamp_sample
void main()
{
 vec4 d = vec4(-1.0, -1.0, 1.0, 1.0) / textureSize.xyxy;
#ifdef ANTI_FLICKER
 vec3 s1 = decodeHDR(clampSample(texture, v_Texcoord + d.xy)).rgb;
 vec3 s2 = decodeHDR(clampSample(texture, v_Texcoord + d.zy)).rgb;
 vec3 s3 = decodeHDR(clampSample(texture, v_Texcoord + d.xw)).rgb;
 vec3 s4 = decodeHDR(clampSample(texture, v_Texcoord + d.zw)).rgb;
 float s1w = 1.0 / (brightness(s1) + 1.0);
 float s2w = 1.0 / (brightness(s2) + 1.0);
 float s3w = 1.0 / (brightness(s3) + 1.0);
 float s4w = 1.0 / (brightness(s4) + 1.0);
 float oneDivideSum = 1.0 / (s1w + s2w + s3w + s4w);
 vec4 color = vec4(
 (s1 * s1w + s2 * s2w + s3 * s3w + s4 * s4w) * oneDivideSum,
 1.0
 );
#else
 vec4 color = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 color += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 color *= 0.25;
#endif
 gl_FragColor = encodeHDR(color);
}
@end`,Xr=`
@export clay.compositor.upsample
#define HIGH_QUALITY
uniform sampler2D texture;
uniform vec2 textureSize : [512, 512];
uniform float sampleScale: 0.5;
varying vec2 v_Texcoord;
@import clay.util.rgbm
@import clay.util.clamp_sample
void main()
{
#ifdef HIGH_QUALITY
 vec4 d = vec4(1.0, 1.0, -1.0, 0.0) / textureSize.xyxy * sampleScale;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord - d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord - d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord - d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord )) * 4.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.wy)) * 2.0;
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 gl_FragColor = encodeHDR(s / 16.0);
#else
 vec4 d = vec4(-1.0, -1.0, +1.0, +1.0) / textureSize.xyxy;
 vec4 s;
 s = decodeHDR(clampSample(texture, v_Texcoord + d.xy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zy));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.xw));
 s += decodeHDR(clampSample(texture, v_Texcoord + d.zw));
 gl_FragColor = encodeHDR(s / 4.0);
#endif
}
@end`,Zr=`@export clay.compositor.hdr.composite
#define TONEMAPPING
uniform sampler2D texture;
#ifdef BLOOM_ENABLED
uniform sampler2D bloom;
#endif
#ifdef LENSFLARE_ENABLED
uniform sampler2D lensflare;
uniform sampler2D lensdirt;
#endif
#ifdef LUM_ENABLED
uniform sampler2D lum;
#endif
#ifdef LUT_ENABLED
uniform sampler2D lut;
#endif
#ifdef COLOR_CORRECTION
uniform float brightness : 0.0;
uniform float contrast : 1.0;
uniform float saturation : 1.0;
#endif
#ifdef VIGNETTE
uniform float vignetteDarkness: 1.0;
uniform float vignetteOffset: 1.0;
#endif
uniform float exposure : 1.0;
uniform float bloomIntensity : 0.25;
uniform float lensflareIntensity : 1;
varying vec2 v_Texcoord;
@import clay.util.srgb
vec3 ACESToneMapping(vec3 color)
{
 const float A = 2.51;
 const float B = 0.03;
 const float C = 2.43;
 const float D = 0.59;
 const float E = 0.14;
 return (color * (A * color + B)) / (color * (C * color + D) + E);
}
float eyeAdaption(float fLum)
{
 return mix(0.2, fLum, 0.5);
}
#ifdef LUT_ENABLED
vec3 lutTransform(vec3 color) {
 float blueColor = color.b * 63.0;
 vec2 quad1;
 quad1.y = floor(floor(blueColor) / 8.0);
 quad1.x = floor(blueColor) - (quad1.y * 8.0);
 vec2 quad2;
 quad2.y = floor(ceil(blueColor) / 8.0);
 quad2.x = ceil(blueColor) - (quad2.y * 8.0);
 vec2 texPos1;
 texPos1.x = (quad1.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos1.y = (quad1.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec2 texPos2;
 texPos2.x = (quad2.x * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.r);
 texPos2.y = (quad2.y * 0.125) + 0.5/512.0 + ((0.125 - 1.0/512.0) * color.g);
 vec4 newColor1 = texture2D(lut, texPos1);
 vec4 newColor2 = texture2D(lut, texPos2);
 vec4 newColor = mix(newColor1, newColor2, fract(blueColor));
 return newColor.rgb;
}
#endif
@import clay.util.rgbm
void main()
{
 vec4 texel = vec4(0.0);
 vec4 originalTexel = vec4(0.0);
#ifdef TEXTURE_ENABLED
 texel = decodeHDR(texture2D(texture, v_Texcoord));
 originalTexel = texel;
#endif
#ifdef BLOOM_ENABLED
 vec4 bloomTexel = decodeHDR(texture2D(bloom, v_Texcoord));
 texel.rgb += bloomTexel.rgb * bloomIntensity;
 texel.a += bloomTexel.a * bloomIntensity;
#endif
#ifdef LENSFLARE_ENABLED
 texel += decodeHDR(texture2D(lensflare, v_Texcoord)) * texture2D(lensdirt, v_Texcoord) * lensflareIntensity;
#endif
 texel.a = min(texel.a, 1.0);
#ifdef LUM_ENABLED
 float fLum = texture2D(lum, vec2(0.5, 0.5)).r;
 float adaptedLumDest = 3.0 / (max(0.1, 1.0 + 10.0*eyeAdaption(fLum)));
 float exposureBias = adaptedLumDest * exposure;
#else
 float exposureBias = exposure;
#endif
#ifdef TONEMAPPING
 texel.rgb *= exposureBias;
 texel.rgb = ACESToneMapping(texel.rgb);
#endif
 texel = linearTosRGB(texel);
#ifdef LUT_ENABLED
 texel.rgb = lutTransform(clamp(texel.rgb,vec3(0.0),vec3(1.0)));
#endif
#ifdef COLOR_CORRECTION
 texel.rgb = clamp(texel.rgb + vec3(brightness), 0.0, 1.0);
 texel.rgb = clamp((texel.rgb - vec3(0.5))*contrast+vec3(0.5), 0.0, 1.0);
 float lum = dot(texel.rgb, vec3(0.2125, 0.7154, 0.0721));
 texel.rgb = mix(vec3(lum), texel.rgb, saturation);
#endif
#ifdef VIGNETTE
 vec2 uv = (v_Texcoord - vec2(0.5)) * vec2(vignetteOffset);
 texel.rgb = mix(texel.rgb, vec3(1.0 - vignetteDarkness), dot(uv, uv));
#endif
 gl_FragColor = encodeHDR(texel);
#ifdef DEBUG
 #if DEBUG == 1
 gl_FragColor = encodeHDR(decodeHDR(texture2D(texture, v_Texcoord)));
 #elif DEBUG == 2
 gl_FragColor = encodeHDR(decodeHDR(texture2D(bloom, v_Texcoord)) * bloomIntensity);
 #elif DEBUG == 3
 gl_FragColor = encodeHDR(decodeHDR(texture2D(lensflare, v_Texcoord) * lensflareIntensity));
 #endif
#endif
 if (originalTexel.a <= 0.01 && gl_FragColor.a > 1e-5) {
 gl_FragColor.a = dot(gl_FragColor.rgb, vec3(0.2125, 0.7154, 0.0721));
 }
#ifdef PREMULTIPLY_ALPHA
 gl_FragColor.rgb *= gl_FragColor.a;
#endif
}
@end`,Qr=`@export clay.compositor.lensflare
#define SAMPLE_NUMBER 8
uniform sampler2D texture;
uniform sampler2D lenscolor;
uniform vec2 textureSize : [512, 512];
uniform float dispersal : 0.3;
uniform float haloWidth : 0.4;
uniform float distortion : 1.0;
varying vec2 v_Texcoord;
@import clay.util.rgbm
vec4 textureDistorted(
 in vec2 texcoord,
 in vec2 direction,
 in vec3 distortion
) {
 return vec4(
 decodeHDR(texture2D(texture, texcoord + direction * distortion.r)).r,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.g)).g,
 decodeHDR(texture2D(texture, texcoord + direction * distortion.b)).b,
 1.0
 );
}
void main()
{
 vec2 texcoord = -v_Texcoord + vec2(1.0); vec2 textureOffset = 1.0 / textureSize;
 vec2 ghostVec = (vec2(0.5) - texcoord) * dispersal;
 vec2 haloVec = normalize(ghostVec) * haloWidth;
 vec3 distortion = vec3(-textureOffset.x * distortion, 0.0, textureOffset.x * distortion);
 vec4 result = vec4(0.0);
 for (int i = 0; i < SAMPLE_NUMBER; i++)
 {
 vec2 offset = fract(texcoord + ghostVec * float(i));
 float weight = length(vec2(0.5) - offset) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 }
 result *= texture2D(lenscolor, vec2(length(vec2(0.5) - texcoord)) / length(vec2(0.5)));
 float weight = length(vec2(0.5) - fract(texcoord + haloVec)) / length(vec2(0.5));
 weight = pow(1.0 - weight, 10.0);
 vec2 offset = fract(texcoord + haloVec);
 result += textureDistorted(offset, normalize(ghostVec), distortion) * weight;
 gl_FragColor = result;
}
@end`,$r=`@export clay.compositor.blend
#define SHADER_NAME blend
#ifdef TEXTURE1_ENABLED
uniform sampler2D texture1;
uniform float weight1 : 1.0;
#endif
#ifdef TEXTURE2_ENABLED
uniform sampler2D texture2;
uniform float weight2 : 1.0;
#endif
#ifdef TEXTURE3_ENABLED
uniform sampler2D texture3;
uniform float weight3 : 1.0;
#endif
#ifdef TEXTURE4_ENABLED
uniform sampler2D texture4;
uniform float weight4 : 1.0;
#endif
#ifdef TEXTURE5_ENABLED
uniform sampler2D texture5;
uniform float weight5 : 1.0;
#endif
#ifdef TEXTURE6_ENABLED
uniform sampler2D texture6;
uniform float weight6 : 1.0;
#endif
varying vec2 v_Texcoord;
@import clay.util.rgbm
void main()
{
 vec4 tex = vec4(0.0);
#ifdef TEXTURE1_ENABLED
 tex += decodeHDR(texture2D(texture1, v_Texcoord)) * weight1;
#endif
#ifdef TEXTURE2_ENABLED
 tex += decodeHDR(texture2D(texture2, v_Texcoord)) * weight2;
#endif
#ifdef TEXTURE3_ENABLED
 tex += decodeHDR(texture2D(texture3, v_Texcoord)) * weight3;
#endif
#ifdef TEXTURE4_ENABLED
 tex += decodeHDR(texture2D(texture4, v_Texcoord)) * weight4;
#endif
#ifdef TEXTURE5_ENABLED
 tex += decodeHDR(texture2D(texture5, v_Texcoord)) * weight5;
#endif
#ifdef TEXTURE6_ENABLED
 tex += decodeHDR(texture2D(texture6, v_Texcoord)) * weight6;
#endif
 gl_FragColor = encodeHDR(tex);
}
@end`,ei=`@export clay.compositor.fxaa
uniform sampler2D texture;
uniform vec4 viewport : VIEWPORT;
varying vec2 v_Texcoord;
#define FXAA_REDUCE_MIN (1.0/128.0)
#define FXAA_REDUCE_MUL (1.0/8.0)
#define FXAA_SPAN_MAX 8.0
@import clay.util.rgbm
void main()
{
 vec2 resolution = 1.0 / viewport.zw;
 vec3 rgbNW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbNE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, -1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSW = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( -1.0, 1.0 ) ) * resolution ) ).xyz;
 vec3 rgbSE = decodeHDR( texture2D( texture, ( gl_FragCoord.xy + vec2( 1.0, 1.0 ) ) * resolution ) ).xyz;
 vec4 rgbaM = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution ) );
 vec3 rgbM = rgbaM.xyz;
 float opacity = rgbaM.w;
 vec3 luma = vec3( 0.299, 0.587, 0.114 );
 float lumaNW = dot( rgbNW, luma );
 float lumaNE = dot( rgbNE, luma );
 float lumaSW = dot( rgbSW, luma );
 float lumaSE = dot( rgbSE, luma );
 float lumaM = dot( rgbM, luma );
 float lumaMin = min( lumaM, min( min( lumaNW, lumaNE ), min( lumaSW, lumaSE ) ) );
 float lumaMax = max( lumaM, max( max( lumaNW, lumaNE) , max( lumaSW, lumaSE ) ) );
 vec2 dir;
 dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
 dir.y = ((lumaNW + lumaSW) - (lumaNE + lumaSE));
 float dirReduce = max( ( lumaNW + lumaNE + lumaSW + lumaSE ) * ( 0.25 * FXAA_REDUCE_MUL ), FXAA_REDUCE_MIN );
 float rcpDirMin = 1.0 / ( min( abs( dir.x ), abs( dir.y ) ) + dirReduce );
 dir = min( vec2( FXAA_SPAN_MAX, FXAA_SPAN_MAX),
 max( vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
 dir * rcpDirMin)) * resolution;
 vec3 rgbA = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 1.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * ( 2.0 / 3.0 - 0.5 ) ) ).xyz;
 rgbA *= 0.5;
 vec3 rgbB = decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * -0.5 ) ).xyz;
 rgbB += decodeHDR( texture2D( texture, gl_FragCoord.xy * resolution + dir * 0.5 ) ).xyz;
 rgbB *= 0.25;
 rgbB += rgbA * 0.5;
 float lumaB = dot( rgbB, luma );
 if ( ( lumaB < lumaMin ) || ( lumaB > lumaMax ) )
 {
 gl_FragColor = vec4( rgbA, opacity );
 }
 else {
 gl_FragColor = vec4( rgbB, opacity );
 }
}
@end`;function ti(e){e.import(Hr),e.import(Ur),e.import(Wr),e.import(Gr),e.import(Kr),e.import(qr),e.import(Jr),e.import(Yr),e.import(Xr),e.import(Zr),e.import(Qr),e.import($r),e.import(ei)}ti(I);var ni=/^#source\((.*?)\)/;function ri(e,t){var n=new Rr;t||={};var r={textures:{},parameters:{}},i=function(i,a){for(var o=0;o<e.nodes.length;o++){var s=e.nodes[o],c=ii(s,r,t);c&&n.addNode(c)}};for(var a in e.parameters){var o=e.parameters[a];r.parameters[a]=si(o)}return ci(e,r,t,function(e){r.textures=e,i()}),n}function ii(e,t,n){var r=e.type||`filter`,i,a,o;if(r===`filter`){var s=e.shader.trim(),c=ni.exec(s);if(c?i=I.source(c[1].trim()):s.charAt(0)===`#`&&(i=t.shaders[s.substr(1)]),i||=s,!i)return}if(e.inputs)for(var l in a={},e.inputs)typeof e.inputs[l]==`string`?a[l]=e.inputs[l]:a[l]={node:e.inputs[l].node,pin:e.inputs[l].pin};if(e.outputs)for(var l in o={},e.outputs){var u=e.outputs[l];o[l]={},u.attachment!=null&&(o[l].attachment=u.attachment),u.keepLastFrame!=null&&(o[l].keepLastFrame=u.keepLastFrame),u.outputLastFrame!=null&&(o[l].outputLastFrame=u.outputLastFrame),u.parameters&&(o[l].parameters=si(u.parameters))}var d=r===`scene`?new zr({name:e.name,scene:n.scene,camera:n.camera,outputs:o}):r===`texture`?new Br({name:e.name,outputs:o}):new Vr({name:e.name,shader:i,inputs:a,outputs:o});if(d){if(e.parameters)for(var l in e.parameters){var f=e.parameters[l];typeof f==`string`?(f=f.trim(),f.charAt(0)===`#`?f=t.textures[f.substr(1)]:d.on(`beforerender`,li(l,di(f)))):typeof f==`function`&&d.on(`beforerender`,f),d.setParameter(l,f)}if(e.defines&&d.pass)for(var l in e.defines){var f=e.defines[l];d.pass.material.define(`fragment`,l,f)}}return d}function ai(e,t){return e}function oi(e,t){return t}function si(e){var t={};if(!e)return t;[`type`,`minFilter`,`magFilter`,`wrapS`,`wrapT`,`flipY`,`useMipmap`].forEach(function(n){var r=e[n];r!=null&&(typeof r==`string`&&(r=H[r]),t[n]=r)});var n=e.scale||1;return[`width`,`height`].forEach(function(r){if(e[r]!=null){var i=e[r];typeof i==`string`?(i=i.trim(),t[r]=ui(r,di(i),n)):t[r]=i}}),t.width||=ai,t.height||=oi,e.useMipmap!=null&&(t.useMipmap=e.useMipmap),t}function ci(e,t,n,r){if(!e.textures){r({});return}var i={},a=0,o=!1,s=n.textureRootPath;lt.each(e.textures,function(e,t){var n,c=e.path,l=si(e.parameters);if(Array.isArray(c)&&c.length===6)s&&(c=c.map(function(e){return lt.relative2absolute(e,s)})),n=new Ge(l);else if(typeof c==`string`)s&&(c=lt.relative2absolute(c,s)),n=new U(l);else return;n.load(c),a++,n.once(`success`,function(){i[t]=n,a--,a===0&&(r(i),o=!0)})}),a===0&&!o&&r(i)}function li(e,t){return function(n){var r=n.getDevicePixelRatio(),i=t(n.getWidth(),n.getHeight(),r);this.setParameter(e,i)}}function ui(e,t,n){return n||=1,function(e){var r=e.getDevicePixelRatio();return t(e.getWidth()*n,e.getHeight()*n,r)}}function di(e){var t=/^expr\((.*)\)$/.exec(e);if(t)try{var n=Function(`width`,`height`,`dpr`,`return `+t[1]);return n(1,1),n}catch{throw Error(`Invalid expression.`)}}var fi=ri;function pi(e,t){for(var n=0,r=1/t,i=e;i>0;)n+=i%t*r,i=Math.floor(i/t),r/=t;return n}I.import(`@export ecgl.ssao.estimate

uniform sampler2D depthTex;

uniform sampler2D normalTex;

uniform sampler2D noiseTex;

uniform vec2 depthTexSize;

uniform vec2 noiseTexSize;

uniform mat4 projection;

uniform mat4 projectionInv;

uniform mat4 viewInverseTranspose;

uniform vec3 kernel[KERNEL_SIZE];

uniform float radius : 1;

uniform float power : 1;

uniform float bias: 1e-2;

uniform float intensity: 1.0;

varying vec2 v_Texcoord;

float ssaoEstimator(in vec3 originPos, in mat3 kernelBasis) {
 float occlusion = 0.0;

 for (int i = 0; i < KERNEL_SIZE; i++) {
 vec3 samplePos = kernel[i];
#ifdef NORMALTEX_ENABLED
 samplePos = kernelBasis * samplePos;
#endif
 samplePos = samplePos * radius + originPos;

 vec4 texCoord = projection * vec4(samplePos, 1.0);
 texCoord.xy /= texCoord.w;

 vec4 depthTexel = texture2D(depthTex, texCoord.xy * 0.5 + 0.5);

 float sampleDepth = depthTexel.r * 2.0 - 1.0;
 if (projection[3][3] == 0.0) {
 sampleDepth = projection[3][2] / (sampleDepth * projection[2][3] - projection[2][2]);
 }
 else {
 sampleDepth = (sampleDepth - projection[3][2]) / projection[2][2];
 }
 
 float rangeCheck = smoothstep(0.0, 1.0, radius / abs(originPos.z - sampleDepth));
 occlusion += rangeCheck * step(samplePos.z, sampleDepth - bias);
 }
#ifdef NORMALTEX_ENABLED
 occlusion = 1.0 - occlusion / float(KERNEL_SIZE);
#else
 occlusion = 1.0 - clamp((occlusion / float(KERNEL_SIZE) - 0.6) * 2.5, 0.0, 1.0);
#endif
 return pow(occlusion, power);
}

void main()
{

 vec4 depthTexel = texture2D(depthTex, v_Texcoord);

#ifdef NORMALTEX_ENABLED
 vec4 tex = texture2D(normalTex, v_Texcoord);
 if (dot(tex.rgb, tex.rgb) == 0.0) {
 gl_FragColor = vec4(1.0);
 return;
 }
 vec3 N = tex.rgb * 2.0 - 1.0;
 N = (viewInverseTranspose * vec4(N, 0.0)).xyz;

 vec2 noiseTexCoord = depthTexSize / vec2(noiseTexSize) * v_Texcoord;
 vec3 rvec = texture2D(noiseTex, noiseTexCoord).rgb * 2.0 - 1.0;
 vec3 T = normalize(rvec - N * dot(rvec, N));
 vec3 BT = normalize(cross(N, T));
 mat3 kernelBasis = mat3(T, BT, N);
#else
 if (depthTexel.r > 0.99999) {
 gl_FragColor = vec4(1.0);
 return;
 }
 mat3 kernelBasis;
#endif

 float z = depthTexel.r * 2.0 - 1.0;

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * projectedPos;

 vec3 position = p4.xyz / p4.w;

 float ao = ssaoEstimator(position, kernelBasis);
 ao = clamp(1.0 - (1.0 - ao) * intensity, 0.0, 1.0);
 gl_FragColor = vec4(vec3(ao), 1.0);
}

@end


@export ecgl.ssao.blur
#define SHADER_NAME SSAO_BLUR

uniform sampler2D ssaoTexture;

#ifdef NORMALTEX_ENABLED
uniform sampler2D normalTex;
#endif

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

uniform int direction: 0.0;

#ifdef DEPTHTEX_ENABLED
uniform sampler2D depthTex;
uniform mat4 projection;
uniform float depthRange : 0.5;

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(depthTex, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}
#endif

void main()
{
 float kernel[5];
 kernel[0] = 0.122581;
 kernel[1] = 0.233062;
 kernel[2] = 0.288713;
 kernel[3] = 0.233062;
 kernel[4] = 0.122581;

 vec2 off = vec2(0.0);
 if (direction == 0) {
 off[0] = blurSize / textureSize.x;
 }
 else {
 off[1] = blurSize / textureSize.y;
 }

 vec2 coord = v_Texcoord;

 float sum = 0.0;
 float weightAll = 0.0;

#ifdef NORMALTEX_ENABLED
 vec3 centerNormal = texture2D(normalTex, v_Texcoord).rgb * 2.0 - 1.0;
#endif
#if defined(DEPTHTEX_ENABLED)
 float centerDepth = getLinearDepth(v_Texcoord);
#endif

 for (int i = 0; i < 5; i++) {
 vec2 coord = clamp(v_Texcoord + vec2(float(i) - 2.0) * off, vec2(0.0), vec2(1.0));

 float w = kernel[i];
#ifdef NORMALTEX_ENABLED
 vec3 normal = texture2D(normalTex, coord).rgb * 2.0 - 1.0;
 w *= clamp(dot(normal, centerNormal), 0.0, 1.0);
#endif
#ifdef DEPTHTEX_ENABLED
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(centerDepth - d) / depthRange, 0.0, 1.0));
#endif

 weightAll += w;
 sum += texture2D(ssaoTexture, coord).r * w;
 }

 gl_FragColor = vec4(vec3(sum / weightAll), 1.0);
}

@end
`);function mi(e){for(var t=new Uint8Array(e*e*4),n=0,r=new z,i=0;i<e;i++)for(var a=0;a<e;a++)r.set(Math.random()*2-1,Math.random()*2-1,0).normalize(),t[n++]=(r.x*.5+.5)*255,t[n++]=(r.y*.5+.5)*255,t[n++]=0,t[n++]=255;return t}function hi(e){return new U({pixels:mi(e),wrapS:H.REPEAT,wrapT:H.REPEAT,width:e,height:e})}function gi(e,t,n){var r=new Float32Array(e*3);t||=0;for(var i=0;i<e;i++){var a=pi(i+t,2)*(n?1:2)*Math.PI,o=pi(i+t,3)*Math.PI,s=Math.random(),c=Math.cos(a)*Math.sin(o)*s,l=Math.cos(o)*s,u=Math.sin(a)*Math.sin(o)*s;r[i*3]=c,r[i*3+1]=l,r[i*3+2]=u}return r}function _i(e){e||={},this._ssaoPass=new tt({fragment:I.source(`ecgl.ssao.estimate`)}),this._blurPass=new tt({fragment:I.source(`ecgl.ssao.blur`)}),this._framebuffer=new et({depthBuffer:!1}),this._ssaoTexture=new U,this._blurTexture=new U,this._blurTexture2=new U,this._depthTex=e.depthTexture,this._normalTex=e.normalTexture,this.setNoiseSize(4),this.setKernelSize(e.kernelSize||12),e.radius!=null&&this.setParameter(`radius`,e.radius),e.power!=null&&this.setParameter(`power`,e.power),this._normalTex||(this._ssaoPass.material.disableTexture(`normalTex`),this._blurPass.material.disableTexture(`normalTex`)),this._depthTex||this._blurPass.material.disableTexture(`depthTex`),this._blurPass.material.setUniform(`normalTex`,this._normalTex),this._blurPass.material.setUniform(`depthTex`,this._depthTex)}_i.prototype.setDepthTexture=function(e){this._depthTex=e},_i.prototype.setNormalTexture=function(e){this._normalTex=e,this._ssaoPass.material[e?`enableTexture`:`disableTexture`](`normalTex`),this.setKernelSize(this._kernelSize)},_i.prototype.update=function(e,t,n){var r=e.getWidth(),i=e.getHeight(),a=this._ssaoPass,o=this._blurPass;a.setUniform(`kernel`,this._kernels[n%this._kernels.length]),a.setUniform(`depthTex`,this._depthTex),this._normalTex!=null&&a.setUniform(`normalTex`,this._normalTex),a.setUniform(`depthTexSize`,[this._depthTex.width,this._depthTex.height]);var s=new B;B.transpose(s,t.worldTransform),a.setUniform(`projection`,t.projectionMatrix.array),a.setUniform(`projectionInv`,t.invProjectionMatrix.array),a.setUniform(`viewInverseTranspose`,s.array);var c=this._ssaoTexture,l=this._blurTexture,u=this._blurTexture2;c.width=r/2,c.height=i/2,l.width=r,l.height=i,u.width=r,u.height=i,this._framebuffer.attach(c),this._framebuffer.bind(e),e.gl.clearColor(1,1,1,1),e.gl.clear(e.gl.COLOR_BUFFER_BIT),a.render(e),o.setUniform(`textureSize`,[r/2,i/2]),o.setUniform(`projection`,t.projectionMatrix.array),this._framebuffer.attach(l),o.setUniform(`direction`,0),o.setUniform(`ssaoTexture`,c),o.render(e),this._framebuffer.attach(u),o.setUniform(`textureSize`,[r,i]),o.setUniform(`direction`,1),o.setUniform(`ssaoTexture`,l),o.render(e),this._framebuffer.unbind(e);var d=e.clearColor;e.gl.clearColor(d[0],d[1],d[2],d[3])},_i.prototype.getTargetTexture=function(){return this._blurTexture2},_i.prototype.setParameter=function(e,t){e===`noiseTexSize`?this.setNoiseSize(t):e===`kernelSize`?this.setKernelSize(t):e===`intensity`?this._ssaoPass.material.set(`intensity`,t):this._ssaoPass.setUniform(e,t)},_i.prototype.setKernelSize=function(e){this._kernelSize=e,this._ssaoPass.material.define(`fragment`,`KERNEL_SIZE`,e),this._kernels=this._kernels||[];for(var t=0;t<30;t++)this._kernels[t]=gi(e,t*e,!!this._normalTex)},_i.prototype.setNoiseSize=function(e){var t=this._ssaoPass.getUniform(`noiseTex`);t?(t.data=mi(e),t.width=t.height=e,t.dirty()):(t=hi(e),this._ssaoPass.setUniform(`noiseTex`,hi(e))),this._ssaoPass.setUniform(`noiseTexSize`,[e,e])},_i.prototype.dispose=function(e){this._blurTexture.dispose(e),this._ssaoTexture.dispose(e),this._blurTexture2.dispose(e)},I.import(`@export ecgl.ssr.main

#define SHADER_NAME SSR
#define MAX_ITERATION 20;
#define SAMPLE_PER_FRAME 5;
#define TOTAL_SAMPLES 128;

uniform sampler2D sourceTexture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform sampler2D gBufferTexture3;
uniform samplerCube specularCubemap;
uniform float specularIntensity: 1;

uniform mat4 projection;
uniform mat4 projectionInv;
uniform mat4 toViewSpace;
uniform mat4 toWorldSpace;

uniform float maxRayDistance: 200;

uniform float pixelStride: 16;
uniform float pixelStrideZCutoff: 50; 
uniform float screenEdgeFadeStart: 0.9; 
uniform float eyeFadeStart : 0.2; uniform float eyeFadeEnd: 0.8; 
uniform float minGlossiness: 0.2; uniform float zThicknessThreshold: 1;

uniform float nearZ;
uniform vec2 viewportSize : VIEWPORT_SIZE;

uniform float jitterOffset: 0;

varying vec2 v_Texcoord;

#ifdef DEPTH_DECODE
@import clay.util.decode_float
#endif

#ifdef PHYSICALLY_CORRECT
uniform sampler2D normalDistribution;
uniform float sampleOffset: 0;
uniform vec2 normalDistributionSize;

vec3 transformNormal(vec3 H, vec3 N) {
 vec3 upVector = N.y > 0.999 ? vec3(1.0, 0.0, 0.0) : vec3(0.0, 1.0, 0.0);
 vec3 tangentX = normalize(cross(N, upVector));
 vec3 tangentZ = cross(N, tangentX);
 return normalize(tangentX * H.x + N * H.y + tangentZ * H.z);
}
vec3 importanceSampleNormalGGX(float i, float roughness, vec3 N) {
 float p = fract((i + sampleOffset) / float(TOTAL_SAMPLES));
 vec3 H = texture2D(normalDistribution,vec2(roughness, p)).rgb;
 return transformNormal(H, N);
}
float G_Smith(float g, float ndv, float ndl) {
 float roughness = 1.0 - g;
 float k = roughness * roughness / 2.0;
 float G1V = ndv / (ndv * (1.0 - k) + k);
 float G1L = ndl / (ndl * (1.0 - k) + k);
 return G1L * G1V;
}
vec3 F_Schlick(float ndv, vec3 spec) {
 return spec + (1.0 - spec) * pow(1.0 - ndv, 5.0);
}
#endif

float fetchDepth(sampler2D depthTexture, vec2 uv)
{
 vec4 depthTexel = texture2D(depthTexture, uv);
 return depthTexel.r * 2.0 - 1.0;
}

float linearDepth(float depth)
{
 if (projection[3][3] == 0.0) {
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
 }
 else {
 return (depth - projection[3][2]) / projection[2][2];
 }
}

bool rayIntersectDepth(float rayZNear, float rayZFar, vec2 hitPixel)
{
 if (rayZFar > rayZNear)
 {
 float t = rayZFar; rayZFar = rayZNear; rayZNear = t;
 }
 float cameraZ = linearDepth(fetchDepth(gBufferTexture2, hitPixel));
 return rayZFar <= cameraZ && rayZNear >= cameraZ - zThicknessThreshold;
}


bool traceScreenSpaceRay(
 vec3 rayOrigin, vec3 rayDir, float jitter,
 out vec2 hitPixel, out vec3 hitPoint, out float iterationCount
)
{
 float rayLength = ((rayOrigin.z + rayDir.z * maxRayDistance) > -nearZ)
 ? (-nearZ - rayOrigin.z) / rayDir.z : maxRayDistance;

 vec3 rayEnd = rayOrigin + rayDir * rayLength;

 vec4 H0 = projection * vec4(rayOrigin, 1.0);
 vec4 H1 = projection * vec4(rayEnd, 1.0);

 float k0 = 1.0 / H0.w, k1 = 1.0 / H1.w;

 vec3 Q0 = rayOrigin * k0, Q1 = rayEnd * k1;

 vec2 P0 = (H0.xy * k0 * 0.5 + 0.5) * viewportSize;
 vec2 P1 = (H1.xy * k1 * 0.5 + 0.5) * viewportSize;

 P1 += dot(P1 - P0, P1 - P0) < 0.0001 ? 0.01 : 0.0;
 vec2 delta = P1 - P0;

 bool permute = false;
 if (abs(delta.x) < abs(delta.y)) {
 permute = true;
 delta = delta.yx;
 P0 = P0.yx;
 P1 = P1.yx;
 }
 float stepDir = sign(delta.x);
 float invdx = stepDir / delta.x;

 vec3 dQ = (Q1 - Q0) * invdx;
 float dk = (k1 - k0) * invdx;

 vec2 dP = vec2(stepDir, delta.y * invdx);

 float strideScaler = 1.0 - min(1.0, -rayOrigin.z / pixelStrideZCutoff);
 float pixStride = 1.0 + strideScaler * pixelStride;

 dP *= pixStride; dQ *= pixStride; dk *= pixStride;

 vec4 pqk = vec4(P0, Q0.z, k0);
 vec4 dPQK = vec4(dP, dQ.z, dk);

 pqk += dPQK * jitter;
 float rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);
 float rayZNear;

 bool intersect = false;

 vec2 texelSize = 1.0 / viewportSize;

 iterationCount = 0.0;

 for (int i = 0; i < MAX_ITERATION; i++)
 {
 pqk += dPQK;

 rayZNear = rayZFar;
 rayZFar = (dPQK.z * 0.5 + pqk.z) / (dPQK.w * 0.5 + pqk.w);

 hitPixel = permute ? pqk.yx : pqk.xy;
 hitPixel *= texelSize;

 intersect = rayIntersectDepth(rayZNear, rayZFar, hitPixel);

 iterationCount += 1.0;

 dPQK *= 1.2;

 if (intersect) {
 break;
 }
 }

 Q0.xy += dQ.xy * iterationCount;
 Q0.z = pqk.z;
 hitPoint = Q0 / pqk.w;

 return intersect;
}

float calculateAlpha(
 float iterationCount, float reflectivity,
 vec2 hitPixel, vec3 hitPoint, float dist, vec3 rayDir
)
{
 float alpha = clamp(reflectivity, 0.0, 1.0);
 alpha *= 1.0 - (iterationCount / float(MAX_ITERATION));
 vec2 hitPixelNDC = hitPixel * 2.0 - 1.0;
 float maxDimension = min(1.0, max(abs(hitPixelNDC.x), abs(hitPixelNDC.y)));
 alpha *= 1.0 - max(0.0, maxDimension - screenEdgeFadeStart) / (1.0 - screenEdgeFadeStart);

 float _eyeFadeStart = eyeFadeStart;
 float _eyeFadeEnd = eyeFadeEnd;
 if (_eyeFadeStart > _eyeFadeEnd) {
 float tmp = _eyeFadeEnd;
 _eyeFadeEnd = _eyeFadeStart;
 _eyeFadeStart = tmp;
 }

 float eyeDir = clamp(rayDir.z, _eyeFadeStart, _eyeFadeEnd);
 alpha *= 1.0 - (eyeDir - _eyeFadeStart) / (_eyeFadeEnd - _eyeFadeStart);

 alpha *= 1.0 - clamp(dist / maxRayDistance, 0.0, 1.0);

 return alpha;
}

@import clay.util.rand

@import clay.util.rgbm

void main()
{
 vec4 normalAndGloss = texture2D(gBufferTexture1, v_Texcoord);

 if (dot(normalAndGloss.rgb, vec3(1.0)) == 0.0) {
 discard;
 }

 float g = normalAndGloss.a;
#if !defined(PHYSICALLY_CORRECT)
 if (g <= minGlossiness) {
 discard;
 }
#endif

 float reflectivity = (g - minGlossiness) / (1.0 - minGlossiness);

 vec3 N = normalize(normalAndGloss.rgb * 2.0 - 1.0);
 N = normalize((toViewSpace * vec4(N, 0.0)).xyz);

 vec4 projectedPos = vec4(v_Texcoord * 2.0 - 1.0, fetchDepth(gBufferTexture2, v_Texcoord), 1.0);
 vec4 pos = projectionInv * projectedPos;
 vec3 rayOrigin = pos.xyz / pos.w;
 vec3 V = -normalize(rayOrigin);

 float ndv = clamp(dot(N, V), 0.0, 1.0);
 float iterationCount;
 float jitter = rand(fract(v_Texcoord + jitterOffset));

#ifdef PHYSICALLY_CORRECT
 vec4 color = vec4(vec3(0.0), 1.0);
 vec4 albedoMetalness = texture2D(gBufferTexture3, v_Texcoord);
 vec3 albedo = albedoMetalness.rgb;
 float m = albedoMetalness.a;
 vec3 diffuseColor = albedo * (1.0 - m);
 vec3 spec = mix(vec3(0.04), albedo, m);

 float jitter2 = rand(fract(v_Texcoord)) * float(TOTAL_SAMPLES);

 for (int i = 0; i < SAMPLE_PER_FRAME; i++) {
 vec3 H = importanceSampleNormalGGX(float(i) + jitter2, 1.0 - g, N);
 vec3 rayDir = normalize(reflect(-V, H));
#else
 vec3 rayDir = normalize(reflect(-V, N));
#endif
 vec2 hitPixel;
 vec3 hitPoint;

 bool intersect = traceScreenSpaceRay(rayOrigin, rayDir, jitter, hitPixel, hitPoint, iterationCount);

 float dist = distance(rayOrigin, hitPoint);

 vec3 hitNormal = texture2D(gBufferTexture1, hitPixel).rgb * 2.0 - 1.0;
 hitNormal = normalize((toViewSpace * vec4(hitNormal, 0.0)).xyz);
#ifdef PHYSICALLY_CORRECT
 float ndl = clamp(dot(N, rayDir), 0.0, 1.0);
 float vdh = clamp(dot(V, H), 0.0, 1.0);
 float ndh = clamp(dot(N, H), 0.0, 1.0);
 vec3 litTexel = vec3(0.0);
 if (dot(hitNormal, rayDir) < 0.0 && intersect) {
 litTexel = texture2D(sourceTexture, hitPixel).rgb;
 litTexel *= pow(clamp(1.0 - dist / 200.0, 0.0, 1.0), 3.0);

 }
 else {
 #ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 litTexel = RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, 0.0), 8.12).rgb * specularIntensity;
#endif
 }
 color.rgb += ndl * litTexel * (
 F_Schlick(ndl, spec) * G_Smith(g, ndv, ndl) * vdh / (ndh * ndv + 0.001)
 );
 }
 color.rgb /= float(SAMPLE_PER_FRAME);
#else
 #if !defined(SPECULARCUBEMAP_ENABLED)
 if (dot(hitNormal, rayDir) >= 0.0) {
 discard;
 }
 if (!intersect) {
 discard;
 }
#endif
 float alpha = clamp(calculateAlpha(iterationCount, reflectivity, hitPixel, hitPoint, dist, rayDir), 0.0, 1.0);
 vec4 color = texture2D(sourceTexture, hitPixel);
 color.rgb *= alpha;

#ifdef SPECULARCUBEMAP_ENABLED
 vec3 rayDirW = normalize(toWorldSpace * vec4(rayDir, 0.0)).rgb;
 alpha = alpha * (intersect ? 1.0 : 0.0);
 float bias = (1.0 -g) * 5.0;
 color.rgb += (1.0 - alpha)
 * RGBMDecode(textureCubeLodEXT(specularCubemap, rayDirW, bias), 8.12).rgb
 * specularIntensity;
#endif

#endif

 gl_FragColor = encodeHDR(color);
}
@end

@export ecgl.ssr.blur

uniform sampler2D texture;
uniform sampler2D gBufferTexture1;
uniform sampler2D gBufferTexture2;
uniform mat4 projection;
uniform float depthRange : 0.05;

varying vec2 v_Texcoord;

uniform vec2 textureSize;
uniform float blurSize : 1.0;

#ifdef BLEND
 #ifdef SSAOTEX_ENABLED
uniform sampler2D ssaoTex;
 #endif
uniform sampler2D sourceTexture;
#endif

float getLinearDepth(vec2 coord)
{
 float depth = texture2D(gBufferTexture2, coord).r * 2.0 - 1.0;
 return projection[3][2] / (depth * projection[2][3] - projection[2][2]);
}

@import clay.util.rgbm


void main()
{
 @import clay.compositor.kernel.gaussian_9

 vec4 centerNTexel = texture2D(gBufferTexture1, v_Texcoord);
 float g = centerNTexel.a;
 float maxBlurSize = clamp(1.0 - g, 0.0, 1.0) * blurSize;
#ifdef VERTICAL
 vec2 off = vec2(0.0, maxBlurSize / textureSize.y);
#else
 vec2 off = vec2(maxBlurSize / textureSize.x, 0.0);
#endif

 vec2 coord = v_Texcoord;

 vec4 sum = vec4(0.0);
 float weightAll = 0.0;

 vec3 cN = centerNTexel.rgb * 2.0 - 1.0;
 float cD = getLinearDepth(v_Texcoord);
 for (int i = 0; i < 9; i++) {
 vec2 coord = clamp((float(i) - 4.0) * off + v_Texcoord, vec2(0.0), vec2(1.0));
 float w = gaussianKernel[i]
 * clamp(dot(cN, texture2D(gBufferTexture1, coord).rgb * 2.0 - 1.0), 0.0, 1.0);
 float d = getLinearDepth(coord);
 w *= (1.0 - smoothstep(abs(cD - d) / depthRange, 0.0, 1.0));

 weightAll += w;
 sum += decodeHDR(texture2D(texture, coord)) * w;
 }

#ifdef BLEND
 float aoFactor = 1.0;
 #ifdef SSAOTEX_ENABLED
 aoFactor = texture2D(ssaoTex, v_Texcoord).r;
 #endif
 gl_FragColor = encodeHDR(
 sum / weightAll * aoFactor + decodeHDR(texture2D(sourceTexture, v_Texcoord))
 );
#else
 gl_FragColor = encodeHDR(sum / weightAll);
#endif
}

@end`);function vi(e){e||={},this._ssrPass=new tt({fragment:I.source(`ecgl.ssr.main`),clearColor:[0,0,0,0]}),this._blurPass1=new tt({fragment:I.source(`ecgl.ssr.blur`),clearColor:[0,0,0,0]}),this._blurPass2=new tt({fragment:I.source(`ecgl.ssr.blur`),clearColor:[0,0,0,0]}),this._blendPass=new tt({fragment:I.source(`clay.compositor.blend`)}),this._blendPass.material.disableTexturesAll(),this._blendPass.material.enableTexture([`texture1`,`texture2`]),this._ssrPass.setUniform(`gBufferTexture1`,e.normalTexture),this._ssrPass.setUniform(`gBufferTexture2`,e.depthTexture),this._blurPass1.setUniform(`gBufferTexture1`,e.normalTexture),this._blurPass1.setUniform(`gBufferTexture2`,e.depthTexture),this._blurPass2.setUniform(`gBufferTexture1`,e.normalTexture),this._blurPass2.setUniform(`gBufferTexture2`,e.depthTexture),this._blurPass2.material.define(`fragment`,`VERTICAL`),this._blurPass2.material.define(`fragment`,`BLEND`),this._ssrTexture=new U({type:H.HALF_FLOAT}),this._texture2=new U({type:H.HALF_FLOAT}),this._texture3=new U({type:H.HALF_FLOAT}),this._prevTexture=new U({type:H.HALF_FLOAT}),this._currentTexture=new U({type:H.HALF_FLOAT}),this._frameBuffer=new et({depthBuffer:!1}),this._normalDistribution=null,this._totalSamples=256,this._samplePerFrame=4,this._ssrPass.material.define(`fragment`,`SAMPLE_PER_FRAME`,this._samplePerFrame),this._ssrPass.material.define(`fragment`,`TOTAL_SAMPLES`,this._totalSamples),this._downScale=1}vi.prototype.setAmbientCubemap=function(e,t){this._ssrPass.material.set(`specularCubemap`,e),this._ssrPass.material.set(`specularIntensity`,t);var n=e&&t;this._ssrPass.material[n?`enableTexture`:`disableTexture`](`specularCubemap`)},vi.prototype.update=function(e,t,n,r){var i=e.getWidth(),a=e.getHeight(),o=this._ssrTexture,s=this._texture2,c=this._texture3;o.width=this._prevTexture.width=this._currentTexture.width=i/this._downScale,o.height=this._prevTexture.height=this._currentTexture.height=a/this._downScale,s.width=c.width=i,s.height=c.height=a;var l=this._frameBuffer,u=this._ssrPass,d=this._blurPass1,f=this._blurPass2,p=this._blendPass,m=new B,h=new B;B.transpose(m,t.worldTransform),B.transpose(h,t.viewMatrix),u.setUniform(`sourceTexture`,n),u.setUniform(`projection`,t.projectionMatrix.array),u.setUniform(`projectionInv`,t.invProjectionMatrix.array),u.setUniform(`toViewSpace`,m.array),u.setUniform(`toWorldSpace`,h.array),u.setUniform(`nearZ`,t.near);var g=r/this._totalSamples*this._samplePerFrame;if(u.setUniform(`jitterOffset`,g),u.setUniform(`sampleOffset`,r*this._samplePerFrame),d.setUniform(`textureSize`,[o.width,o.height]),f.setUniform(`textureSize`,[i,a]),f.setUniform(`sourceTexture`,n),d.setUniform(`projection`,t.projectionMatrix.array),f.setUniform(`projection`,t.projectionMatrix.array),l.attach(o),l.bind(e),u.render(e),this._physicallyCorrect&&(l.attach(this._currentTexture),p.setUniform(`texture1`,this._prevTexture),p.setUniform(`texture2`,o),p.material.set({weight1:r>=1?.95:0,weight2:r>=1?.05:1}),p.render(e)),l.attach(s),d.setUniform(`texture`,this._physicallyCorrect?this._currentTexture:o),d.render(e),l.attach(c),f.setUniform(`texture`,s),f.render(e),l.unbind(e),this._physicallyCorrect){var _=this._prevTexture;this._prevTexture=this._currentTexture,this._currentTexture=_}},vi.prototype.getTargetTexture=function(){return this._texture3},vi.prototype.setParameter=function(e,t){e===`maxIteration`?this._ssrPass.material.define(`fragment`,`MAX_ITERATION`,t):this._ssrPass.setUniform(e,t)},vi.prototype.setPhysicallyCorrect=function(e){e?(this._normalDistribution||=pn.generateNormalDistribution(64,this._totalSamples),this._ssrPass.material.define(`fragment`,`PHYSICALLY_CORRECT`),this._ssrPass.material.set(`normalDistribution`,this._normalDistribution),this._ssrPass.material.set(`normalDistributionSize`,[64,this._totalSamples])):this._ssrPass.material.undefine(`fragment`,`PHYSICALLY_CORRECT`),this._physicallyCorrect=e},vi.prototype.setSSAOTexture=function(e){var t=this._blurPass2;e?(t.material.enableTexture(`ssaoTex`),t.material.set(`ssaoTex`,e)):t.material.disableTexture(`ssaoTex`)},vi.prototype.isFinished=function(e){return this._physicallyCorrect?e>this._totalSamples/this._samplePerFrame:!0},vi.prototype.dispose=function(e){this._ssrTexture.dispose(e),this._texture2.dispose(e),this._texture3.dispose(e),this._prevTexture.dispose(e),this._currentTexture.dispose(e),this._frameBuffer.dispose(e)};var yi=[0,0,-.321585265978,-.154972575841,.458126042375,.188473391593,.842080129861,.527766490688,.147304551086,-.659453822776,-.331943915203,-.940619700594,.0479226680259,.54812163202,.701581552186,-.709825561388,-.295436780218,.940589268233,-.901489676764,.237713156085,.973570876096,-.109899459384,-.866792314779,-.451805525005,.330975007087,.800048655954,-.344275183665,.381779221166,-.386139432542,-.437418421534,-.576478634965,-.0148463392551,.385798197415,-.262426961053,-.666302061145,.682427250835,-.628010632582,-.732836215494,.10163141741,-.987658134403,.711995289051,-.320024291314,.0296005138058,.950296523438,.0130612307608,-.351024443122,-.879596633704,-.10478487883,.435712737232,.504254490347,.779203817497,.206477676721,.388264289969,-.896736162545,-.153106280781,-.629203242522,-.245517550697,.657969239148,.126830499058,.26862328493,-.634888119007,-.302301223431,.617074219636,.779817204925];I.import(`@export ecgl.normal.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

@import ecgl.common.normalMap.vertexHeader

@import ecgl.common.vertexAnimation.header

void main()
{

 @import ecgl.common.vertexAnimation.main

 @import ecgl.common.uv.main

 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);
 v_WorldPosition = (world * vec4(pos, 1.0)).xyz;

 @import ecgl.common.normalMap.vertexMain

 gl_Position = worldViewProjection * vec4(pos, 1.0);

}


@end


@export ecgl.normal.fragment

#define ROUGHNESS_CHANEL 0

uniform bool useBumpMap;
uniform bool useRoughnessMap;
uniform bool doubleSide;
uniform float roughness;

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform mat4 viewInverse : VIEWINVERSE;

@import ecgl.common.normalMap.fragmentHeader
@import ecgl.common.bumpMap.header

uniform sampler2D roughnessMap;

void main()
{
 vec3 N = v_Normal;
 
 bool flipNormal = false;
 if (doubleSide) {
 vec3 eyePos = viewInverse[3].xyz;
 vec3 V = normalize(eyePos - v_WorldPosition);

 if (dot(N, V) < 0.0) {
 flipNormal = true;
 }
 }

 @import ecgl.common.normalMap.fragmentMain

 if (useBumpMap) {
 N = bumpNormal(v_WorldPosition, v_Normal, N);
 }

 float g = 1.0 - roughness;

 if (useRoughnessMap) {
 float g2 = 1.0 - texture2D(roughnessMap, v_DetailTexcoord)[ROUGHNESS_CHANEL];
 g = clamp(g2 + (g - 0.5) * 2.0, 0.0, 1.0);
 }

 if (flipNormal) {
 N = -N;
 }

 gl_FragColor.rgb = (N.xyz + 1.0) * 0.5;
 gl_FragColor.a = g;
}
@end`);function bi(e,t,n,r,i){var a=e.gl;t.setUniform(a,`1i`,n,i),a.activeTexture(a.TEXTURE0+i),r.isRenderable()?r.bind(e):r.unbind(e)}function xi(e,t,n,r,i){var a,o,s,c,l=e.gl;return function(i,u,d){if(!(c&&c.material===i.material)){var f=i.material,p=i.__program,m=f.get(`roughness`);m??=1;var h=f.get(`normalMap`)||t,g=f.get(`roughnessMap`),_=f.get(`bumpMap`),v=f.get(`uvRepeat`),y=f.get(`uvOffset`),b=f.get(`detailUvRepeat`),x=f.get(`detailUvOffset`),S=!!_&&f.isTextureEnabled(`bumpMap`),C=!!g&&f.isTextureEnabled(`roughnessMap`),w=f.isDefined(`fragment`,`DOUBLE_SIDED`);_||=n,g||=r,d===u?(p.setUniform(l,`1f`,`roughness`,m),a!==h&&bi(e,p,`normalMap`,h,0),o!==_&&_&&bi(e,p,`bumpMap`,_,1),s!==g&&g&&bi(e,p,`roughnessMap`,g,2),v!=null&&p.setUniform(l,`2f`,`uvRepeat`,v),y!=null&&p.setUniform(l,`2f`,`uvOffset`,y),b!=null&&p.setUniform(l,`2f`,`detailUvRepeat`,b),x!=null&&p.setUniform(l,`2f`,`detailUvOffset`,x),p.setUniform(l,`1i`,`useBumpMap`,+S),p.setUniform(l,`1i`,`useRoughnessMap`,+C),p.setUniform(l,`1i`,`doubleSide`,+w)):(u.set(`normalMap`,h),u.set(`bumpMap`,_),u.set(`roughnessMap`,g),u.set(`useBumpMap`,S),u.set(`useRoughnessMap`,C),u.set(`doubleSide`,w),v!=null&&u.set(`uvRepeat`,v),y!=null&&u.set(`uvOffset`,y),b!=null&&u.set(`detailUvRepeat`,b),x!=null&&u.set(`detailUvOffset`,x),u.set(`roughness`,m)),a=h,o=_,s=g,c=i}}}function Si(e){e||={},this._depthTex=new U({format:H.DEPTH_COMPONENT,type:H.UNSIGNED_INT}),this._normalTex=new U({type:H.HALF_FLOAT}),this._framebuffer=new et,this._framebuffer.attach(this._normalTex),this._framebuffer.attach(this._depthTex,et.DEPTH_ATTACHMENT),this._normalMaterial=new Ve({shader:new I(I.source(`ecgl.normal.vertex`),I.source(`ecgl.normal.fragment`))}),this._normalMaterial.enableTexture([`normalMap`,`bumpMap`,`roughnessMap`]),this._defaultNormalMap=sn.createBlank(`#000`),this._defaultBumpMap=sn.createBlank(`#000`),this._defaultRoughessMap=sn.createBlank(`#000`),this._debugPass=new tt({fragment:I.source(`clay.compositor.output`)}),this._debugPass.setUniform(`texture`,this._normalTex),this._debugPass.material.undefine(`fragment`,`OUTPUT_ALPHA`)}Si.prototype.getDepthTexture=function(){return this._depthTex},Si.prototype.getNormalTexture=function(){return this._normalTex},Si.prototype.update=function(e,t,n){var r=e.getWidth(),i=e.getHeight(),a=this._depthTex,o=this._normalTex,s=this._normalMaterial;a.width=r,a.height=i,o.width=r,o.height=i;var c=t.getRenderList(n).opaque;this._framebuffer.bind(e),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT|e.gl.DEPTH_BUFFER_BIT),e.gl.disable(e.gl.BLEND),e.renderPass(c,n,{getMaterial:function(){return s},ifRender:function(e){return e.renderNormal},beforeRender:xi(e,this._defaultNormalMap,this._defaultBumpMap,this._defaultRoughessMap,this._normalMaterial),sort:e.opaqueSortCompare}),this._framebuffer.unbind(e)},Si.prototype.renderDebug=function(e){this._debugPass.render(e)},Si.prototype.dispose=function(e){this._depthTex.dispose(e),this._normalTex.dispose(e)};function Ci(e){e||={},this._edgePass=new tt({fragment:I.source(`ecgl.edge`)}),this._edgePass.setUniform(`normalTexture`,e.normalTexture),this._edgePass.setUniform(`depthTexture`,e.depthTexture),this._targetTexture=new U({type:H.HALF_FLOAT}),this._frameBuffer=new et,this._frameBuffer.attach(this._targetTexture)}Ci.prototype.update=function(e,t,n,r){var i=e.getWidth(),a=e.getHeight(),o=this._targetTexture;o.width=i,o.height=a;var s=this._frameBuffer;s.bind(e),this._edgePass.setUniform(`projectionInv`,t.invProjectionMatrix.array),this._edgePass.setUniform(`textureSize`,[i,a]),this._edgePass.setUniform(`texture`,n),this._edgePass.render(e),s.unbind(e)},Ci.prototype.getTargetTexture=function(){return this._targetTexture},Ci.prototype.setParameter=function(e,t){this._edgePass.setUniform(e,t)},Ci.prototype.dispose=function(e){this._targetTexture.dispose(e),this._frameBuffer.dispose(e)};var wi={type:`compositor`,nodes:[{name:`source`,type:`texture`,outputs:{color:{}}},{name:`source_half`,shader:`#source(clay.compositor.downsample)`,inputs:{texture:`source`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 2)`,height:`expr(height * 1.0 / 2)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0, height * 1.0] )`}},{name:`bright`,shader:`#source(clay.compositor.bright)`,inputs:{texture:`source_half`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 2)`,height:`expr(height * 1.0 / 2)`,type:`HALF_FLOAT`}}},parameters:{threshold:2,scale:4,textureSize:`expr([width * 1.0 / 2, height / 2])`}},{name:`bright_downsample_4`,shader:`#source(clay.compositor.downsample)`,inputs:{texture:`bright`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 4)`,height:`expr(height * 1.0 / 4)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0 / 2, height / 2] )`}},{name:`bright_downsample_8`,shader:`#source(clay.compositor.downsample)`,inputs:{texture:`bright_downsample_4`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 8)`,height:`expr(height * 1.0 / 8)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0 / 4, height / 4] )`}},{name:`bright_downsample_16`,shader:`#source(clay.compositor.downsample)`,inputs:{texture:`bright_downsample_8`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 16)`,height:`expr(height * 1.0 / 16)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0 / 8, height / 8] )`}},{name:`bright_downsample_32`,shader:`#source(clay.compositor.downsample)`,inputs:{texture:`bright_downsample_16`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 32)`,height:`expr(height * 1.0 / 32)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0 / 16, height / 16] )`}},{name:`bright_upsample_16_blur_h`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_downsample_32`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 16)`,height:`expr(height * 1.0 / 16)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:0,textureSize:`expr( [width * 1.0 / 32, height / 32] )`}},{name:`bright_upsample_16_blur_v`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_upsample_16_blur_h`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 16)`,height:`expr(height * 1.0 / 16)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:1,textureSize:`expr( [width * 1.0 / 16, height * 1.0 / 16] )`}},{name:`bright_upsample_8_blur_h`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_downsample_16`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 8)`,height:`expr(height * 1.0 / 8)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:0,textureSize:`expr( [width * 1.0 / 16, height * 1.0 / 16] )`}},{name:`bright_upsample_8_blur_v`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_upsample_8_blur_h`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 8)`,height:`expr(height * 1.0 / 8)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:1,textureSize:`expr( [width * 1.0 / 8, height * 1.0 / 8] )`}},{name:`bright_upsample_8_blend`,shader:`#source(clay.compositor.blend)`,inputs:{texture1:`bright_upsample_8_blur_v`,texture2:`bright_upsample_16_blur_v`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 8)`,height:`expr(height * 1.0 / 8)`,type:`HALF_FLOAT`}}},parameters:{weight1:.3,weight2:.7}},{name:`bright_upsample_4_blur_h`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_downsample_8`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 4)`,height:`expr(height * 1.0 / 4)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:0,textureSize:`expr( [width * 1.0 / 8, height * 1.0 / 8] )`}},{name:`bright_upsample_4_blur_v`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_upsample_4_blur_h`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 4)`,height:`expr(height * 1.0 / 4)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:1,textureSize:`expr( [width * 1.0 / 4, height * 1.0 / 4] )`}},{name:`bright_upsample_4_blend`,shader:`#source(clay.compositor.blend)`,inputs:{texture1:`bright_upsample_4_blur_v`,texture2:`bright_upsample_8_blend`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 4)`,height:`expr(height * 1.0 / 4)`,type:`HALF_FLOAT`}}},parameters:{weight1:.3,weight2:.7}},{name:`bright_upsample_2_blur_h`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_downsample_4`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 2)`,height:`expr(height * 1.0 / 2)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:0,textureSize:`expr( [width * 1.0 / 4, height * 1.0 / 4] )`}},{name:`bright_upsample_2_blur_v`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_upsample_2_blur_h`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 2)`,height:`expr(height * 1.0 / 2)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:1,textureSize:`expr( [width * 1.0 / 2, height * 1.0 / 2] )`}},{name:`bright_upsample_2_blend`,shader:`#source(clay.compositor.blend)`,inputs:{texture1:`bright_upsample_2_blur_v`,texture2:`bright_upsample_4_blend`},outputs:{color:{parameters:{width:`expr(width * 1.0 / 2)`,height:`expr(height * 1.0 / 2)`,type:`HALF_FLOAT`}}},parameters:{weight1:.3,weight2:.7}},{name:`bright_upsample_full_blur_h`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:0,textureSize:`expr( [width * 1.0 / 2, height * 1.0 / 2] )`}},{name:`bright_upsample_full_blur_v`,shader:`#source(clay.compositor.gaussian_blur)`,inputs:{texture:`bright_upsample_full_blur_h`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`,type:`HALF_FLOAT`}}},parameters:{blurSize:1,blurDir:1,textureSize:`expr( [width * 1.0, height * 1.0] )`}},{name:`bloom_composite`,shader:`#source(clay.compositor.blend)`,inputs:{texture1:`bright_upsample_full_blur_v`,texture2:`bright_upsample_2_blend`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`,type:`HALF_FLOAT`}}},parameters:{weight1:.3,weight2:.7}},{name:`coc`,shader:`#source(ecgl.dof.coc)`,outputs:{color:{parameters:{minFilter:`NEAREST`,magFilter:`NEAREST`,width:`expr(width * 1.0)`,height:`expr(height * 1.0)`}}},parameters:{focalDist:50,focalRange:30}},{name:`dof_far_blur`,shader:`#source(ecgl.dof.diskBlur)`,inputs:{texture:`source`,coc:`coc`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0, height * 1.0] )`}},{name:`dof_near_blur`,shader:`#source(ecgl.dof.diskBlur)`,inputs:{texture:`source`,coc:`coc`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`,type:`HALF_FLOAT`}}},parameters:{textureSize:`expr( [width * 1.0, height * 1.0] )`},defines:{BLUR_NEARFIELD:null}},{name:`dof_coc_blur`,shader:`#source(ecgl.dof.diskBlur)`,inputs:{texture:`coc`},outputs:{color:{parameters:{minFilter:`NEAREST`,magFilter:`NEAREST`,width:`expr(width * 1.0)`,height:`expr(height * 1.0)`}}},parameters:{textureSize:`expr( [width * 1.0, height * 1.0] )`},defines:{BLUR_COC:null}},{name:`dof_composite`,shader:`#source(ecgl.dof.composite)`,inputs:{original:`source`,blurred:`dof_far_blur`,nearfield:`dof_near_blur`,coc:`coc`,nearcoc:`dof_coc_blur`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`,type:`HALF_FLOAT`}}}},{name:`composite`,shader:`#source(clay.compositor.hdr.composite)`,inputs:{texture:`source`,bloom:`bloom_composite`},outputs:{color:{parameters:{width:`expr(width * 1.0)`,height:`expr(height * 1.0)`}}},defines:{}},{name:`FXAA`,shader:`#source(clay.compositor.fxaa)`,inputs:{texture:`composite`}}]};I.import(Ur),I.import(Gr),I.import(qr),I.import(Jr),I.import(Yr),I.import(Xr),I.import(Zr),I.import($r),I.import(ei),I.import(`@export ecgl.dof.coc

uniform sampler2D depth;

uniform float zNear: 0.1;
uniform float zFar: 2000;

uniform float focalDistance: 3;
uniform float focalRange: 1;
uniform float focalLength: 30;
uniform float fstop: 2.8;

varying vec2 v_Texcoord;

@import clay.util.encode_float

void main()
{
 float z = texture2D(depth, v_Texcoord).r * 2.0 - 1.0;

 float dist = 2.0 * zNear * zFar / (zFar + zNear - z * (zFar - zNear));

 float aperture = focalLength / fstop;

 float coc;

 float uppper = focalDistance + focalRange;
 float lower = focalDistance - focalRange;
 if (dist <= uppper && dist >= lower) {
 coc = 0.5;
 }
 else {
 float focalAdjusted = dist > uppper ? uppper : lower;

 coc = abs(aperture * (focalLength * (dist - focalAdjusted)) / (dist * (focalAdjusted - focalLength)));
 coc = clamp(coc, 0.0, 2.0) / 2.00001;

 if (dist < lower) {
 coc = -coc;
 }
 coc = coc * 0.5 + 0.5;
 }

 gl_FragColor = encodeFloat(coc);
}
@end


@export ecgl.dof.composite

#define DEBUG 0

uniform sampler2D original;
uniform sampler2D blurred;
uniform sampler2D nearfield;
uniform sampler2D coc;
uniform sampler2D nearcoc;
varying vec2 v_Texcoord;

@import clay.util.rgbm
@import clay.util.float

void main()
{
 vec4 blurredColor = texture2D(blurred, v_Texcoord);
 vec4 originalColor = texture2D(original, v_Texcoord);

 float fCoc = decodeFloat(texture2D(coc, v_Texcoord));

 fCoc = abs(fCoc * 2.0 - 1.0);

 float weight = smoothstep(0.0, 1.0, fCoc);
 
#ifdef NEARFIELD_ENABLED
 vec4 nearfieldColor = texture2D(nearfield, v_Texcoord);
 float fNearCoc = decodeFloat(texture2D(nearcoc, v_Texcoord));
 fNearCoc = abs(fNearCoc * 2.0 - 1.0);

 gl_FragColor = encodeHDR(
 mix(
 nearfieldColor, mix(originalColor, blurredColor, weight),
 pow(1.0 - fNearCoc, 4.0)
 )
 );
#else
 gl_FragColor = encodeHDR(mix(originalColor, blurredColor, weight));
#endif

}

@end



@export ecgl.dof.diskBlur

#define POISSON_KERNEL_SIZE 16;

uniform sampler2D texture;
uniform sampler2D coc;
varying vec2 v_Texcoord;

uniform float blurRadius : 10.0;
uniform vec2 textureSize : [512.0, 512.0];

uniform vec2 poissonKernel[POISSON_KERNEL_SIZE];

uniform float percent;

float nrand(const in vec2 n) {
 return fract(sin(dot(n.xy ,vec2(12.9898,78.233))) * 43758.5453);
}

@import clay.util.rgbm
@import clay.util.float


void main()
{
 vec2 offset = blurRadius / textureSize;

 float rnd = 6.28318 * nrand(v_Texcoord + 0.07 * percent );
 float cosa = cos(rnd);
 float sina = sin(rnd);
 vec4 basis = vec4(cosa, -sina, sina, cosa);

#if !defined(BLUR_NEARFIELD) && !defined(BLUR_COC)
 offset *= abs(decodeFloat(texture2D(coc, v_Texcoord)) * 2.0 - 1.0);
#endif

#ifdef BLUR_COC
 float cocSum = 0.0;
#else
 vec4 color = vec4(0.0);
#endif


 float weightSum = 0.0;

 for (int i = 0; i < POISSON_KERNEL_SIZE; i++) {
 vec2 ofs = poissonKernel[i];

 ofs = vec2(dot(ofs, basis.xy), dot(ofs, basis.zw));

 vec2 uv = v_Texcoord + ofs * offset;
 vec4 texel = texture2D(texture, uv);

 float w = 1.0;
#ifdef BLUR_COC
 float fCoc = decodeFloat(texel) * 2.0 - 1.0;
 cocSum += clamp(fCoc, -1.0, 0.0) * w;
#else
 texel = texel;
 #if !defined(BLUR_NEARFIELD)
 float fCoc = decodeFloat(texture2D(coc, uv)) * 2.0 - 1.0;
 w *= abs(fCoc);
 #endif
 texel.rgb *= texel.a;
 color += texel * w;
#endif

 weightSum += w;
 }

#ifdef BLUR_COC
 gl_FragColor = encodeFloat(clamp(cocSum / weightSum, -1.0, 0.0) * 0.5 + 0.5);
#else
 color /= weightSum;
 color.rgb /= (color.a + 0.0001);
 gl_FragColor = color;
#endif
}

@end`),I.import(`@export ecgl.edge

uniform sampler2D texture;

uniform sampler2D normalTexture;
uniform sampler2D depthTexture;

uniform mat4 projectionInv;

uniform vec2 textureSize;

uniform vec4 edgeColor: [0,0,0,0.8];

varying vec2 v_Texcoord;

vec3 packColor(vec2 coord) {
 float z = texture2D(depthTexture, coord).r * 2.0 - 1.0;
 vec4 p = vec4(v_Texcoord * 2.0 - 1.0, z, 1.0);
 vec4 p4 = projectionInv * p;

 return vec3(
 texture2D(normalTexture, coord).rg,
 -p4.z / p4.w / 5.0
 );
}

void main() {
 vec2 cc = v_Texcoord;
 vec3 center = packColor(cc);

 float size = clamp(1.0 - (center.z - 10.0) / 100.0, 0.0, 1.0) * 0.5;
 float dx = size / textureSize.x;
 float dy = size / textureSize.y;

 vec2 coord;
 vec3 topLeft = packColor(cc+vec2(-dx, -dy));
 vec3 top = packColor(cc+vec2(0.0, -dy));
 vec3 topRight = packColor(cc+vec2(dx, -dy));
 vec3 left = packColor(cc+vec2(-dx, 0.0));
 vec3 right = packColor(cc+vec2(dx, 0.0));
 vec3 bottomLeft = packColor(cc+vec2(-dx, dy));
 vec3 bottom = packColor(cc+vec2(0.0, dy));
 vec3 bottomRight = packColor(cc+vec2(dx, dy));

 vec3 v = -topLeft-2.0*top-topRight+bottomLeft+2.0*bottom+bottomRight;
 vec3 h = -bottomLeft-2.0*left-topLeft+bottomRight+2.0*right+topRight;

 float edge = sqrt(dot(h, h) + dot(v, v));

 edge = smoothstep(0.8, 1.0, edge);

 gl_FragColor = mix(texture2D(texture, v_Texcoord), vec4(edgeColor.rgb, 1.0), edgeColor.a * edge);
}
@end`);function Ti(e,t){return{color:{parameters:{width:e,height:t}}}}var Ei=[`composite`,`FXAA`];function Z(){this._width,this._height,this._dpr,this._sourceTexture=new U({type:H.HALF_FLOAT}),this._depthTexture=new U({format:H.DEPTH_COMPONENT,type:H.UNSIGNED_INT}),this._framebuffer=new et,this._framebuffer.attach(this._sourceTexture),this._framebuffer.attach(this._depthTexture,et.DEPTH_ATTACHMENT),this._normalPass=new Si,this._compositor=fi(wi);var e=this._compositor.getNodeByName(`source`);e.texture=this._sourceTexture;var t=this._compositor.getNodeByName(`coc`);this._sourceNode=e,this._cocNode=t,this._compositeNode=this._compositor.getNodeByName(`composite`),this._fxaaNode=this._compositor.getNodeByName(`FXAA`),this._dofBlurNodes=[`dof_far_blur`,`dof_near_blur`,`dof_coc_blur`].map(function(e){return this._compositor.getNodeByName(e)},this),this._dofBlurKernel=0,this._dofBlurKernelSize=new Float32Array,this._finalNodesChain=Ei.map(function(e){return this._compositor.getNodeByName(e)},this);var n={normalTexture:this._normalPass.getNormalTexture(),depthTexture:this._normalPass.getDepthTexture()};this._ssaoPass=new _i(n),this._ssrPass=new vi(n),this._edgePass=new Ci(n)}Z.prototype.resize=function(e,t,n){n||=1;var e=e*n,t=t*n,r=this._sourceTexture,i=this._depthTexture;r.width=e,r.height=t,i.width=e,i.height=t;var a={getWidth:function(){return e},getHeight:function(){return t},getDevicePixelRatio:function(){return n}};function o(e,t){if(typeof e[t]==`function`){var n=e[t].__original||e[t];e[t]=function(e){return n.call(this,a)},e[t].__original=n}}this._compositor.nodes.forEach(function(e){for(var t in e.outputs){var n=e.outputs[t].parameters;n&&(o(n,`width`),o(n,`height`))}for(var r in e.parameters)o(e.parameters,r)}),this._width=e,this._height=t,this._dpr=n},Z.prototype.getWidth=function(){return this._width},Z.prototype.getHeight=function(){return this._height},Z.prototype._ifRenderNormalPass=function(){return this._enableSSAO||this._enableEdge||this._enableSSR},Z.prototype._getPrevNode=function(e){for(var t=Ei.indexOf(e.name)-1,n=this._finalNodesChain[t];n&&!this._compositor.getNodeByName(n.name);)--t,n=this._finalNodesChain[t];return n},Z.prototype._getNextNode=function(e){for(var t=Ei.indexOf(e.name)+1,n=this._finalNodesChain[t];n&&!this._compositor.getNodeByName(n.name);)t+=1,n=this._finalNodesChain[t];return n},Z.prototype._addChainNode=function(e){var t=this._getPrevNode(e),n=this._getNextNode(e);t&&(e.inputs.texture=t.name,n?(e.outputs=Ti(this.getWidth.bind(this),this.getHeight.bind(this)),n.inputs.texture=e.name):e.outputs=null,this._compositor.addNode(e))},Z.prototype._removeChainNode=function(e){var t=this._getPrevNode(e),n=this._getNextNode(e);t&&(n?(t.outputs=Ti(this.getWidth.bind(this),this.getHeight.bind(this)),n.inputs.texture=t.name):t.outputs=null,this._compositor.removeNode(e))},Z.prototype.updateNormal=function(e,t,n,r){this._ifRenderNormalPass()&&this._normalPass.update(e,t,n)},Z.prototype.updateSSAO=function(e,t,n,r){this._ssaoPass.update(e,n,r)},Z.prototype.enableSSAO=function(){this._enableSSAO=!0},Z.prototype.disableSSAO=function(){this._enableSSAO=!1},Z.prototype.enableSSR=function(){this._enableSSR=!0},Z.prototype.disableSSR=function(){this._enableSSR=!1},Z.prototype.getSSAOTexture=function(){return this._ssaoPass.getTargetTexture()},Z.prototype.getSourceFrameBuffer=function(){return this._framebuffer},Z.prototype.getSourceTexture=function(){return this._sourceTexture},Z.prototype.disableFXAA=function(){this._removeChainNode(this._fxaaNode)},Z.prototype.enableFXAA=function(){this._addChainNode(this._fxaaNode)},Z.prototype.enableBloom=function(){this._compositeNode.inputs.bloom=`bloom_composite`,this._compositor.dirty()},Z.prototype.disableBloom=function(){this._compositeNode.inputs.bloom=null,this._compositor.dirty()},Z.prototype.enableDOF=function(){this._compositeNode.inputs.texture=`dof_composite`,this._compositor.dirty()},Z.prototype.disableDOF=function(){this._compositeNode.inputs.texture=`source`,this._compositor.dirty()},Z.prototype.enableColorCorrection=function(){this._compositeNode.define(`COLOR_CORRECTION`),this._enableColorCorrection=!0},Z.prototype.disableColorCorrection=function(){this._compositeNode.undefine(`COLOR_CORRECTION`),this._enableColorCorrection=!1},Z.prototype.enableEdge=function(){this._enableEdge=!0},Z.prototype.disableEdge=function(){this._enableEdge=!1},Z.prototype.setBloomIntensity=function(e){this._compositeNode.setParameter(`bloomIntensity`,e)},Z.prototype.setSSAOParameter=function(e,t){switch(e){case`quality`:var n={low:6,medium:12,high:32,ultra:62}[t]||12;this._ssaoPass.setParameter(`kernelSize`,n);break;case`radius`:this._ssaoPass.setParameter(e,t),this._ssaoPass.setParameter(`bias`,t/200);break;case`intensity`:this._ssaoPass.setParameter(e,t);break;default:}},Z.prototype.setDOFParameter=function(e,t){switch(e){case`focalDistance`:case`focalRange`:case`fstop`:this._cocNode.setParameter(e,t);break;case`blurRadius`:for(var n=0;n<this._dofBlurNodes.length;n++)this._dofBlurNodes[n].setParameter(`blurRadius`,t);break;case`quality`:var r={low:4,medium:8,high:16,ultra:32}[t]||8;this._dofBlurKernelSize=r;for(var n=0;n<this._dofBlurNodes.length;n++)this._dofBlurNodes[n].pass.material.define(`POISSON_KERNEL_SIZE`,r);this._dofBlurKernel=new Float32Array(r*2);break;default:}},Z.prototype.setSSRParameter=function(e,t){if(t!=null)switch(e){case`quality`:var n={low:10,medium:15,high:30,ultra:80}[t]||20,r={low:32,medium:16,high:8,ultra:4}[t]||16;this._ssrPass.setParameter(`maxIteration`,n),this._ssrPass.setParameter(`pixelStride`,r);break;case`maxRoughness`:this._ssrPass.setParameter(`minGlossiness`,Math.max(Math.min(1-t,1),0));break;case`physical`:this.setPhysicallyCorrectSSR(t);break;default:console.warn(`Unkown SSR parameter `+e)}},Z.prototype.setPhysicallyCorrectSSR=function(e){this._ssrPass.setPhysicallyCorrect(e)},Z.prototype.setEdgeColor=function(e){var t=Y.parseColor(e);this._edgePass.setParameter(`edgeColor`,t)},Z.prototype.setExposure=function(e){this._compositeNode.setParameter(`exposure`,2**e)},Z.prototype.setColorLookupTexture=function(e,t){this._compositeNode.pass.material.setTextureImage(`lut`,this._enableColorCorrection?e:`none`,t,{minFilter:Y.Texture.NEAREST,magFilter:Y.Texture.NEAREST,flipY:!1})},Z.prototype.setColorCorrection=function(e,t){this._compositeNode.setParameter(e,t)},Z.prototype.isSSREnabled=function(){return this._enableSSR},Z.prototype.composite=function(e,t,n,r,i){var a=this._sourceTexture,o=a;this._enableEdge&&(this._edgePass.update(e,n,a,i),a=o=this._edgePass.getTargetTexture()),this._enableSSR&&(this._ssrPass.update(e,n,a,i),o=this._ssrPass.getTargetTexture(),this._ssrPass.setSSAOTexture(this._enableSSAO?this._ssaoPass.getTargetTexture():null)),this._sourceNode.texture=o,this._cocNode.setParameter(`depth`,this._depthTexture);for(var s=this._dofBlurKernel,c=this._dofBlurKernelSize,l=i%Math.floor(yi.length/2/c),u=0;u<c*2;u++)s[u]=yi[u+l*c*2];for(var u=0;u<this._dofBlurNodes.length;u++)this._dofBlurNodes[u].setParameter(`percent`,i/30),this._dofBlurNodes[u].setParameter(`poissonKernel`,s);this._cocNode.setParameter(`zNear`,n.near),this._cocNode.setParameter(`zFar`,n.far),this._compositor.render(e,r)},Z.prototype.dispose=function(e){this._sourceTexture.dispose(e),this._depthTexture.dispose(e),this._framebuffer.dispose(e),this._compositor.dispose(e),this._normalPass.dispose(e),this._ssaoPass.dispose(e)};function Di(e){for(var t=[],n=0;n<30;n++)t.push([pi(n,2),pi(n,3)]);this._haltonSequence=t,this._frame=0,this._sourceTex=new U,this._sourceFb=new et,this._sourceFb.attach(this._sourceTex),this._prevFrameTex=new U,this._outputTex=new U;var r=this._blendPass=new tt({fragment:I.source(`clay.compositor.blend`)});r.material.disableTexturesAll(),r.material.enableTexture([`texture1`,`texture2`]),this._blendFb=new et({depthBuffer:!1}),this._outputPass=new tt({fragment:I.source(`clay.compositor.output`),blendWithPrevious:!0}),this._outputPass.material.define(`fragment`,`OUTPUT_ALPHA`),this._outputPass.material.blend=function(e){e.blendEquationSeparate(e.FUNC_ADD,e.FUNC_ADD),e.blendFuncSeparate(e.ONE,e.ONE_MINUS_SRC_ALPHA,e.ONE,e.ONE_MINUS_SRC_ALPHA)}}Di.prototype={constructor:Di,jitterProjection:function(e,t){var n=e.viewport,r=n.devicePixelRatio||e.getDevicePixelRatio(),i=n.width*r,a=n.height*r,o=this._haltonSequence[this._frame%this._haltonSequence.length],s=new B;s.array[12]=(o[0]*2-1)/i,s.array[13]=(o[1]*2-1)/a,B.mul(t.projectionMatrix,s,t.projectionMatrix),B.invert(t.invProjectionMatrix,t.projectionMatrix)},resetFrame:function(){this._frame=0},getFrame:function(){return this._frame},getSourceFrameBuffer:function(){return this._sourceFb},getOutputTexture:function(){return this._outputTex},resize:function(e,t){this._prevFrameTex.width=e,this._prevFrameTex.height=t,this._outputTex.width=e,this._outputTex.height=t,this._sourceTex.width=e,this._sourceTex.height=t,this._prevFrameTex.dirty(),this._outputTex.dirty(),this._sourceTex.dirty()},isFinished:function(){return this._frame>=this._haltonSequence.length},render:function(e,t,n){var r=this._blendPass;this._frame===0?(r.setUniform(`weight1`,0),r.setUniform(`weight2`,1)):(r.setUniform(`weight1`,.9),r.setUniform(`weight2`,.1)),r.setUniform(`texture1`,this._prevFrameTex),r.setUniform(`texture2`,t||this._sourceTex),this._blendFb.attach(this._outputTex),this._blendFb.bind(e),r.render(e),this._blendFb.unbind(e),n||(this._outputPass.setUniform(`texture`,this._outputTex),this._outputPass.render(e));var i=this._prevFrameTex;this._prevFrameTex=this._outputTex,this._outputTex=i,this._frame++},dispose:function(e){this._sourceFb.dispose(e),this._blendFb.dispose(e),this._prevFrameTex.dispose(e),this._outputTex.dispose(e),this._sourceTex.dispose(e),this._outputPass.dispose(e),this._blendPass.dispose(e)}};function Q(e){e||=`perspective`,this.layer=null,this.scene=new wt,this.rootNode=this.scene,this.viewport={x:0,y:0,width:0,height:0},this.setProjection(e),this._compositor=new Z,this._temporalSS=new Di,this._shadowMapPass=new rt;for(var t=[],n=0,r=0;r<30;r++){for(var i=[],a=0;a<6;a++)i.push(pi(n,2)*4-2),i.push(pi(n,3)*4-2),n++;t.push(i)}this._pcfKernels=t,this.scene.on(`beforerender`,function(e,t,n){this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,n)},this)}Q.prototype.setProjection=function(e){var t=this.camera;t&&t.update(),e===`perspective`?this.camera instanceof nt||(this.camera=new nt,t&&this.camera.setLocalTransform(t.localTransform)):this.camera instanceof Je||(this.camera=new Je,t&&this.camera.setLocalTransform(t.localTransform)),this.camera.near=.1,this.camera.far=2e3},Q.prototype.setViewport=function(e,t,n,r,i){this.camera instanceof nt&&(this.camera.aspect=n/r),i||=1,this.viewport.x=e,this.viewport.y=t,this.viewport.width=n,this.viewport.height=r,this.viewport.devicePixelRatio=i,this._compositor.resize(n*i,r*i),this._temporalSS.resize(n*i,r*i)},Q.prototype.containPoint=function(e,t){var n=this.viewport;return t=this.layer.renderer.getHeight()-t,e>=n.x&&t>=n.y&&e<=n.x+n.width&&t<=n.y+n.height};var Oi=new Ye;Q.prototype.castRay=function(e,t,n){var r=this.layer.renderer,i=r.viewport;return r.viewport=this.viewport,r.screenToNDC(e,t,Oi),this.camera.castRay(Oi,n),r.viewport=i,n},Q.prototype.prepareRender=function(){this.scene.update(),this.camera.update(),this.scene.updateLights();var e=this.scene.updateRenderList(this.camera);this._needsSortProgressively=!1;for(var t=0;t<e.transparent.length;t++){var n=e.transparent[t].geometry;n.needsSortVerticesProgressively&&n.needsSortVerticesProgressively()&&(this._needsSortProgressively=!0),n.needsSortTrianglesProgressively&&n.needsSortTrianglesProgressively()&&(this._needsSortProgressively=!0)}this._frame=0,this._temporalSS.resetFrame()},Q.prototype.render=function(e,t){this._doRender(e,t,this._frame),this._frame++},Q.prototype.needsAccumulate=function(){return this.needsTemporalSS()||this._needsSortProgressively},Q.prototype.needsTemporalSS=function(){var e=this._enableTemporalSS;return e===`auto`&&(e=this._enablePostEffect),e},Q.prototype.hasDOF=function(){return this._enableDOF},Q.prototype.isAccumulateFinished=function(){return this.needsTemporalSS()?this._temporalSS.isFinished():this._frame>30},Q.prototype._doRender=function(e,t,n){var r=this.scene,i=this.camera;n||=0,this._updateTransparent(e,r,i,n),t||(this._shadowMapPass.kernelPCF=this._pcfKernels[0],this._shadowMapPass.render(e,r,i,!0)),this._updateShadowPCFKernel(n);var a=e.clearColor;if(e.gl.clearColor(a[0],a[1],a[2],a[3]),this._enablePostEffect&&(this.needsTemporalSS()&&this._temporalSS.jitterProjection(e,i),this._compositor.updateNormal(e,r,i,this._temporalSS.getFrame())),this._updateSSAO(e,r,i,this._temporalSS.getFrame()),this._enablePostEffect){var o=this._compositor.getSourceFrameBuffer();o.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),e.render(r,i,!0,!0),o.unbind(e),this.needsTemporalSS()&&t?(this._compositor.composite(e,r,i,this._temporalSS.getSourceFrameBuffer(),this._temporalSS.getFrame()),e.setViewport(this.viewport),this._temporalSS.render(e)):(e.setViewport(this.viewport),this._compositor.composite(e,r,i,null,0))}else if(this.needsTemporalSS()&&t){var o=this._temporalSS.getSourceFrameBuffer();o.bind(e),e.saveClear(),e.clearBit=e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT,e.render(r,i,!0,!0),e.restoreClear(),o.unbind(e),e.setViewport(this.viewport),this._temporalSS.render(e)}else e.setViewport(this.viewport),e.render(r,i,!0,!0)},Q.prototype._updateTransparent=function(e,t,n,r){for(var i=new z,a=new B,o=n.getWorldPosition(),s=t.getRenderList(n).transparent,c=0;c<s.length;c++){var l=s[c],u=l.geometry;B.invert(a,l.worldTransform),z.transformMat4(i,o,a),u.needsSortTriangles&&u.needsSortTriangles()&&u.doSortTriangles(i,r),u.needsSortVertices&&u.needsSortVertices()&&u.doSortVertices(i,r)}},Q.prototype._updateSSAO=function(e,t,n){var r=this._enableSSAO&&this._enablePostEffect;r&&this._compositor.updateSSAO(e,t,n,this._temporalSS.getFrame());for(var i=t.getRenderList(n),a=0;a<i.opaque.length;a++){var o=i.opaque[a];o.renderNormal&&o.material[r?`enableTexture`:`disableTexture`](`ssaoMap`),r&&o.material.set(`ssaoMap`,this._compositor.getSSAOTexture())}},Q.prototype._updateShadowPCFKernel=function(e){for(var t=this._pcfKernels[e%this._pcfKernels.length],n=this.scene.getRenderList(this.camera).opaque,r=0;r<n.length;r++)n[r].receiveShadow&&(n[r].material.set(`pcfKernel`,t),n[r].material.define(`fragment`,`PCF_KERNEL_SIZE`,t.length/2))},Q.prototype.dispose=function(e){this._compositor.dispose(e.gl),this._temporalSS.dispose(e.gl),this._shadowMapPass.dispose(e)},Q.prototype.setPostEffect=function(e,t){var n=this._compositor;this._enablePostEffect=e.get(`enable`);var r=e.getModel(`bloom`),i=e.getModel(`edge`),a=e.getModel(`DOF`,e.getModel(`depthOfField`)),o=e.getModel(`SSAO`,e.getModel(`screenSpaceAmbientOcclusion`)),s=e.getModel(`SSR`,e.getModel(`screenSpaceReflection`)),c=e.getModel(`FXAA`),l=e.getModel(`colorCorrection`);r.get(`enable`)?n.enableBloom():n.disableBloom(),a.get(`enable`)?n.enableDOF():n.disableDOF(),s.get(`enable`)?n.enableSSR():n.disableSSR(),l.get(`enable`)?n.enableColorCorrection():n.disableColorCorrection(),i.get(`enable`)?n.enableEdge():n.disableEdge(),c.get(`enable`)?n.enableFXAA():n.disableFXAA(),this._enableDOF=a.get(`enable`),this._enableSSAO=o.get(`enable`),this._enableSSAO?n.enableSSAO():n.disableSSAO(),n.setBloomIntensity(r.get(`intensity`)),n.setEdgeColor(i.get(`color`)),n.setColorLookupTexture(l.get(`lookupTexture`),t),n.setExposure(l.get(`exposure`)),[`radius`,`quality`,`intensity`].forEach(function(e){n.setSSAOParameter(e,o.get(e))}),[`quality`,`maxRoughness`,`physical`].forEach(function(e){n.setSSRParameter(e,s.get(e))}),[`quality`,`focalDistance`,`focalRange`,`blurRadius`,`fstop`].forEach(function(e){n.setDOFParameter(e,a.get(e))}),[`brightness`,`contrast`,`saturation`].forEach(function(e){n.setColorCorrection(e,l.get(e))})},Q.prototype.setDOFFocusOnPoint=function(e){if(this._enablePostEffect)return e>this.camera.far||e<this.camera.near?void 0:(this._compositor.setDOFParameter(`focalDistance`,e),!0)},Q.prototype.setTemporalSuperSampling=function(e){this._enableTemporalSS=e.get(`enable`)},Q.prototype.isLinearSpace=function(){return this._enablePostEffect},Q.prototype.setRootNode=function(e){if(this.rootNode!==e){for(var t=this.rootNode.children(),n=0;n<t.length;n++)e.add(t[n]);e!==this.scene&&this.scene.add(e),this.rootNode=e}},Q.prototype.add=function(e){this.rootNode.add(e)},Q.prototype.remove=function(e){this.rootNode.remove(e)},Q.prototype.removeAll=function(e){this.rootNode.removeAll(e)},Object.assign(Q.prototype,Me);function ki(e,t){var n=te(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()});n.y=t.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,t.getDevicePixelRatio());var r=e.get(`boxWidth`),i=e.get(`boxHeight`),a=e.get(`boxDepth`);this.getAxis(`x`).setExtent(-r/2,r/2),this.getAxis(`y`).setExtent(a/2,-a/2),this.getAxis(`z`).setExtent(-i/2,i/2),this.size=[r,i,a]}function Ai(e,t){var n={};function r(e,t){n[e]=n[e]||[1/0,-1/0],n[e][0]=Math.min(t[0],n[e][0]),n[e][1]=Math.max(t[1],n[e][1])}e.eachSeries(function(e){if(e.coordinateSystem===this){var t=e.getData();[`x`,`y`,`z`].forEach(function(e){t.mapDimensionsAll(e,!0).forEach(function(n){r(e,t.getDataExtent(n,!0))})})}},this),[`xAxis3D`,`yAxis3D`,`zAxis3D`].forEach(function(t){e.eachComponent(t,function(e){var r=t.charAt(0),i=e.getReferringComponents(`grid3D`).models[0],a=i.coordinateSystem;if(a===this){var o=a.getAxis(r);if(!o){o=new Fr(r,re(n[r]||[1/0,-1/0],e)),o.type=e.get(`type`);var s=o.type===`category`;o.onBand=s&&e.get(`boundaryGap`),o.inverse=e.get(`inverse`),e.axis=o,o.model=e,o.getLabelModel=function(){return e.getModel(`axisLabel`,i.getModel(`axisLabel`))},o.getTickModel=function(){return e.getModel(`axisTick`,i.getModel(`axisTick`))},a.addAxis(o)}}},this)},this),this.resize(this.model,t)}var ji={dimensions:Pr.prototype.dimensions,create:function(e,t){var n=[];e.eachComponent(`grid3D`,function(e){e.__viewGL=e.__viewGL||new Q;var t=new Pr;t.model=e,t.viewGL=e.__viewGL,e.coordinateSystem=t,n.push(t),t.resize=ki,t.update=Ai});var r=[`xAxis3D`,`yAxis3D`,`zAxis3D`];function i(e,t){return r.map(function(n){var r=e.getReferringComponents(n).models[0];return r??=t.getComponent(n),r})}return e.eachSeries(function(t){if(t.get(`coordinateSystem`)===`cartesian3D`){var n=t.getReferringComponents(`grid3D`).models[0];if(n==null){var r=i(t,e),n=r[0].getCoordSysModel();r.forEach(function(e){e.getCoordSysModel()})}t.coordinateSystem=n.coordinateSystem}}),n}},Mi=D.extend({type:`cartesian3DAxis`,axis:null,getCoordSysModel:function(){return this.ecModel.queryComponents({mainType:`grid3D`,index:this.option.gridIndex,id:this.option.gridId})[0]}});w(Mi);var Ni={show:!0,grid3DIndex:0,inverse:!1,name:``,nameLocation:`middle`,nameTextStyle:{fontSize:16},nameGap:20,axisPointer:{},axisLine:{},axisTick:{},axisLabel:{},splitArea:{}},Pi=F({boundaryGap:!0,axisTick:{alignWithLabel:!1,interval:`auto`},axisLabel:{interval:`auto`},axisPointer:{label:{show:!1}}},Ni),Fi=F({boundaryGap:[0,0],splitNumber:5,axisPointer:{label:{}}},Ni),Ii=De({scale:!0,min:`dataMin`,max:`dataMax`},Fi),Li=De({logBase:10},Fi);Li.scale=!0;var Ri={categoryAxis3D:Pi,valueAxis3D:Fi,timeAxis3D:Ii,logAxis3D:Li},zi=[`value`,`category`,`time`,`log`];function Bi(e,t,n,r,i){zi.forEach(function(a){var o=n.extend({type:t+`Axis3D.`+a,__ordinalMeta:null,mergeDefaultAndTheme:function(e,n){F(e,n.getTheme().get(a+`Axis3D`)),F(e,this.getDefaultOption()),e.type=r(t,e)},optionUpdated:function(){this.option.type===`category`&&(this.__ordinalMeta=f.createByAxisModel(this))},getCategories:function(){if(this.option.type===`category`)return this.__ordinalMeta.categories},getOrdinalMeta:function(){return this.__ordinalMeta},defaultOption:F(fe(Ri[a+`Axis3D`]),i||{},!0)});e.registerComponentModel(o)}),e.registerSubTypeDefaulter(t+`Axis3D`,me(r,t))}function Vi(e,t){return t.type||(t.data?`category`:`value`)}function Hi(e){e.registerComponentModel(ir),e.registerComponentView(Nr),e.registerCoordinateSystem(`grid3D`,ji),[`x`,`y`,`z`].forEach(function(t){Bi(e,t,Mi,Vi,{name:t.toUpperCase()});let n=e.ComponentView.extend({type:t+`Axis3D`});e.registerComponentView(n)}),e.registerAction({type:`grid3DChangeCamera`,event:`grid3dcamerachanged`,update:`series:updateCamera`},function(e,t){t.eachComponent({mainType:`grid3D`,query:e},function(t){t.setView(e)})}),e.registerAction({type:`grid3DShowAxisPointer`,event:`grid3dshowaxispointer`,update:`grid3D:showAxisPointer`},function(e,t){}),e.registerAction({type:`grid3DHideAxisPointer`,event:`grid3dhideaxispointer`,update:`grid3D:hideAxisPointer`},function(e,t){})}P(Hi);var Ui={defaultOption:{shading:null,realisticMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},lambertMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},colorMaterial:{textureTiling:1,textureOffset:0,detailTexture:null},hatchingMaterial:{textureTiling:1,textureOffset:0,paperColor:`#fff`}}},Wi={getFilledRegions:function(e,t){var n=(e||[]).slice(),r;if(typeof t==`string`?(t=ne(t),r=t&&t.geoJson):t&&t.features&&(r=t),!r)return[];for(var i={},a=r.features,o=0;o<n.length;o++)i[n[o].name]=n[o];for(var o=0;o<a.length;o++){var s=a[o].properties.name;i[s]||n.push({name:s})}return n},defaultOption:{show:!0,zlevel:-10,map:``,left:0,top:0,width:`100%`,height:`100%`,boxWidth:100,boxHeight:10,boxDepth:`auto`,regionHeight:3,environment:`auto`,groundPlane:{show:!1,color:`#aaa`},shading:`lambert`,light:{main:{alpha:40,beta:30}},viewControl:{alpha:40,beta:0,distance:100,orthographicSize:60,minAlpha:5,minBeta:-80,maxBeta:80},label:{show:!1,distance:2,textStyle:{fontSize:20,color:`#000`,backgroundColor:`rgba(255,255,255,0.7)`,padding:3,borderRadius:4}},itemStyle:{color:`#fff`,borderWidth:0,borderColor:`#333`},emphasis:{itemStyle:{color:`#639fc0`},label:{show:!0}}}},Gi=D.extend({type:`geo3D`,layoutMode:`box`,coordinateSystem:null,optionUpdated:function(){var e=this.option;e.regions=this.getFilledRegions(e.regions,e.map);var t=new y(o(e.data||[],{coordDimensions:[`value`],encodeDefine:this.get(`encode`),dimensionsDefine:this.get(`dimensions`)}),this);t.initData(e.regions);var n={};t.each(function(e){var r=t.getName(e);n[r]=t.getItemModel(e)}),this._regionModelMap=n,this._data=t},getData:function(){return this._data},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new r(null,this)},getRegionPolygonCoords:function(e){var t=this.getData().getName(e),n=this.coordinateSystem.getRegion(t);return n?n.geometries:[]},getFormattedLabel:function(e,t){var n=this._data.getName(e),r=this.getRegionModel(e),i=r.get(t===`normal`?[`label`,`formatter`]:[`emphasis`,`label`,`formatter`]);i??=r.get([`label`,`formatter`]);var a={name:n};if(typeof i==`function`)return a.status=t,i(a);if(typeof i==`string`){var o=a.seriesName;return i.replace(`{a}`,o??``)}else return n},defaultOption:{regions:[]}});F(Gi.prototype,Wi),F(Gi.prototype,tr),F(Gi.prototype,nr),F(Gi.prototype,rr),F(Gi.prototype,Ui);var Ki=qi;function qi(e,t,n){n||=2;var r=t&&t.length,i=r?t[0]*n:e.length,a=Ji(e,0,i,n,!0),o=[];if(!a)return o;var s,c,l,u,d,f,p;if(r&&(a=ta(e,t,a,n)),e.length>80*n){s=l=e[0],c=u=e[1];for(var m=n;m<i;m+=n)d=e[m],f=e[m+1],d<s&&(s=d),f<c&&(c=f),d>l&&(l=d),f>u&&(u=f);p=Math.max(l-s,u-c)}return Xi(a,o,n,s,c,p),o}function Ji(e,t,n,r,i){var a,o;if(i===xa(e,t,n,r)>0)for(a=t;a<n;a+=r)o=va(a,e[a],e[a+1],o);else for(a=n-r;a>=t;a-=r)o=va(a,e[a],e[a+1],o);return o&&fa(o,o.next)&&(ya(o),o=o.next),o}function Yi(e,t){if(!e)return e;t||=e;var n=e,r;do if(r=!1,!n.steiner&&(fa(n,n.next)||da(n.prev,n,n.next)===0)){if(ya(n),n=t=n.prev,n===n.next)return null;r=!0}else n=n.next;while(r||n!==t);return t}function Xi(e,t,n,r,i,a,o){if(e){!o&&a&&aa(e,r,i,a);for(var s=e,c,l;e.prev!==e.next;){if(c=e.prev,l=e.next,a?Qi(e,r,i,a):Zi(e)){t.push(c.i/n),t.push(e.i/n),t.push(l.i/n),ya(e),e=l.next,s=l.next;continue}if(e=l,e===s){o?o===1?(e=$i(e,t,n),Xi(e,t,n,r,i,a,2)):o===2&&ea(e,t,n,r,i,a):Xi(Yi(e),t,n,r,i,a,1);break}}}}function Zi(e){var t=e.prev,n=e,r=e.next;if(da(t,n,r)>=0)return!1;for(var i=e.next.next;i!==e.prev;){if(la(t.x,t.y,n.x,n.y,r.x,r.y,i.x,i.y)&&da(i.prev,i,i.next)>=0)return!1;i=i.next}return!0}function Qi(e,t,n,r){var i=e.prev,a=e,o=e.next;if(da(i,a,o)>=0)return!1;for(var s=i.x<a.x?i.x<o.x?i.x:o.x:a.x<o.x?a.x:o.x,c=i.y<a.y?i.y<o.y?i.y:o.y:a.y<o.y?a.y:o.y,l=i.x>a.x?i.x>o.x?i.x:o.x:a.x>o.x?a.x:o.x,u=i.y>a.y?i.y>o.y?i.y:o.y:a.y>o.y?a.y:o.y,d=sa(s,c,t,n,r),f=sa(l,u,t,n,r),p=e.nextZ;p&&p.z<=f;){if(p!==e.prev&&p!==e.next&&la(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&da(p.prev,p,p.next)>=0)return!1;p=p.nextZ}for(p=e.prevZ;p&&p.z>=d;){if(p!==e.prev&&p!==e.next&&la(i.x,i.y,a.x,a.y,o.x,o.y,p.x,p.y)&&da(p.prev,p,p.next)>=0)return!1;p=p.prevZ}return!0}function $i(e,t,n){var r=e;do{var i=r.prev,a=r.next.next;!fa(i,a)&&pa(i,r,r.next,a)&&ha(i,a)&&ha(a,i)&&(t.push(i.i/n),t.push(r.i/n),t.push(a.i/n),ya(r),ya(r.next),r=e=a),r=r.next}while(r!==e);return r}function ea(e,t,n,r,i,a){var o=e;do{for(var s=o.next.next;s!==o.prev;){if(o.i!==s.i&&ua(o,s)){var c=_a(o,s);o=Yi(o,o.next),c=Yi(c,c.next),Xi(o,t,n,r,i,a),Xi(c,t,n,r,i,a);return}s=s.next}o=o.next}while(o!==e)}function ta(e,t,n,r){var i=[],a,o,s,c,l;for(a=0,o=t.length;a<o;a++)s=t[a]*r,c=a<o-1?t[a+1]*r:e.length,l=Ji(e,s,c,r,!1),l===l.next&&(l.steiner=!0),i.push(ca(l));for(i.sort(na),a=0;a<i.length;a++)ra(i[a],n),n=Yi(n,n.next);return n}function na(e,t){return e.x-t.x}function ra(e,t){if(t=ia(e,t),t){var n=_a(t,e);Yi(n,n.next)}}function ia(e,t){var n=t,r=e.x,i=e.y,a=-1/0,o;do{if(i<=n.y&&i>=n.next.y&&n.next.y!==n.y){var s=n.x+(i-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(s<=r&&s>a){if(a=s,s===r){if(i===n.y)return n;if(i===n.next.y)return n.next}o=n.x<n.next.x?n:n.next}}n=n.next}while(n!==t);if(!o)return null;if(r===a)return o.prev;var c=o,l=o.x,u=o.y,d=1/0,f;for(n=o.next;n!==c;)r>=n.x&&n.x>=l&&r!==n.x&&la(i<u?r:a,i,l,u,i<u?a:r,i,n.x,n.y)&&(f=Math.abs(i-n.y)/(r-n.x),(f<d||f===d&&n.x>o.x)&&ha(n,e)&&(o=n,d=f)),n=n.next;return o}function aa(e,t,n,r){var i=e;do i.z===null&&(i.z=sa(i.x,i.y,t,n,r)),i.prevZ=i.prev,i.nextZ=i.next,i=i.next;while(i!==e);i.prevZ.nextZ=null,i.prevZ=null,oa(i)}function oa(e){var t,n,r,i,a,o,s,c,l=1;do{for(n=e,e=null,a=null,o=0;n;){for(o++,r=n,s=0,t=0;t<l&&(s++,r=r.nextZ,r);t++);for(c=l;s>0||c>0&&r;)s!==0&&(c===0||!r||n.z<=r.z)?(i=n,n=n.nextZ,s--):(i=r,r=r.nextZ,c--),a?a.nextZ=i:e=i,i.prevZ=a,a=i;n=r}a.nextZ=null,l*=2}while(o>1);return e}function sa(e,t,n,r,i){return e=32767*(e-n)/i,t=32767*(t-r)/i,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e|t<<1}function ca(e){var t=e,n=e;do t.x<n.x&&(n=t),t=t.next;while(t!==e);return n}function la(e,t,n,r,i,a,o,s){return(i-o)*(t-s)-(e-o)*(a-s)>=0&&(e-o)*(r-s)-(n-o)*(t-s)>=0&&(n-o)*(a-s)-(i-o)*(r-s)>=0}function ua(e,t){return e.next.i!==t.i&&e.prev.i!==t.i&&!ma(e,t)&&ha(e,t)&&ha(t,e)&&ga(e,t)}function da(e,t,n){return(t.y-e.y)*(n.x-t.x)-(t.x-e.x)*(n.y-t.y)}function fa(e,t){return e.x===t.x&&e.y===t.y}function pa(e,t,n,r){return fa(e,t)&&fa(n,r)||fa(e,r)&&fa(n,t)?!0:da(e,t,n)>0!=da(e,t,r)>0&&da(n,r,e)>0!=da(n,r,t)>0}function ma(e,t){var n=e;do{if(n.i!==e.i&&n.next.i!==e.i&&n.i!==t.i&&n.next.i!==t.i&&pa(n,n.next,e,t))return!0;n=n.next}while(n!==e);return!1}function ha(e,t){return da(e.prev,e,e.next)<0?da(e,t,e.next)>=0&&da(e,e.prev,t)>=0:da(e,t,e.prev)<0||da(e,e.next,t)<0}function ga(e,t){var n=e,r=!1,i=(e.x+t.x)/2,a=(e.y+t.y)/2;do n.y>a!=n.next.y>a&&n.next.y!==n.y&&i<(n.next.x-n.x)*(a-n.y)/(n.next.y-n.y)+n.x&&(r=!r),n=n.next;while(n!==e);return r}function _a(e,t){var n=new ba(e.i,e.x,e.y),r=new ba(t.i,t.x,t.y),i=e.next,a=t.prev;return e.next=t,t.prev=e,n.next=i,i.prev=n,r.next=n,n.prev=r,a.next=r,r.prev=a,r}function va(e,t,n,r){var i=new ba(e,t,n);return r?(i.next=r.next,i.prev=r,r.next.prev=i,r.next=i):(i.prev=i,i.next=i),i}function ya(e){e.next.prev=e.prev,e.prev.next=e.next,e.prevZ&&(e.prevZ.nextZ=e.nextZ),e.nextZ&&(e.nextZ.prevZ=e.prevZ)}function ba(e,t,n){this.i=e,this.x=t,this.y=n,this.prev=null,this.next=null,this.z=null,this.prevZ=null,this.nextZ=null,this.steiner=!1}qi.deviation=function(e,t,n,r){var i=t&&t.length,a=i?t[0]*n:e.length,o=Math.abs(xa(e,0,a,n));if(i)for(var s=0,c=t.length;s<c;s++){var l=t[s]*n,u=s<c-1?t[s+1]*n:e.length;o-=Math.abs(xa(e,l,u,n))}var d=0;for(s=0;s<r.length;s+=3){var f=r[s]*n,p=r[s+1]*n,m=r[s+2]*n;d+=Math.abs((e[f]-e[m])*(e[p+1]-e[f+1])-(e[f]-e[p])*(e[m+1]-e[f+1]))}return o===0&&d===0?0:Math.abs((d-o)/o)};function xa(e,t,n,r){for(var i=0,a=t,o=n-r;a<n;a+=r)i+=(e[o]-e[a])*(e[a+1]+e[o+1]),o=a;return i}function Sa(e,t,n){var r=e[t];e[t]=e[n],e[n]=r}function Ca(e,t,n,r,i){var a=n,o=e[t];Sa(e,t,r);for(var s=n;s<r;s++)i(e[s],o)<0&&(Sa(e,s,a),a++);return Sa(e,r,a),a}function wa(e,t,n,r){if(n<r){var i=Ca(e,Math.floor((n+r)/2),n,r,t);wa(e,t,n,i-1),wa(e,t,i+1,r)}}function Ta(){this._parts=[]}Ta.prototype.step=function(e,t,n){var r=e.length;if(n===0){this._parts=[],this._sorted=!1;var i=Math.floor(r/2);this._parts.push({pivot:i,left:0,right:r-1}),this._currentSortPartIdx=0}if(!this._sorted){var a=this._parts;if(a.length===0)return this._sorted=!0,!0;if(a.length<512){for(var o=0;o<a.length;o++)a[o].pivot=Ca(e,a[o].pivot,a[o].left,a[o].right,t);for(var s=[],o=0;o<a.length;o++){var c=a[o].left,l=a[o].pivot-1;l>c&&s.push({pivot:Math.floor((l+c)/2),left:c,right:l});var c=a[o].pivot+1,l=a[o].right;l>c&&s.push({pivot:Math.floor((l+c)/2),left:c,right:l})}a=this._parts=s}else for(var o=0;o<Math.floor(a.length/10);o++){var u=a.length-1-this._currentSortPartIdx;if(wa(e,t,a[u].left,a[u].right),this._currentSortPartIdx++,this._currentSortPartIdx===a.length)return this._sorted=!0,!0}return!1}},Ta.sort=wa;var Ea=ur.vec3,Da=Ea.create(),Oa=Ea.create(),ka=Ea.create(),Aa={needsSortTriangles:function(){return this.indices&&this.sortTriangles},needsSortTrianglesProgressively:function(){return this.needsSortTriangles()&&this.triangleCount>=2e4},doSortTriangles:function(e,t){var n=this.indices;if(t===0){var r=this.attributes.position,e=e.array;(!this._triangleZList||this._triangleZList.length!==this.triangleCount)&&(this._triangleZList=new Float32Array(this.triangleCount),this._sortedTriangleIndices=new Uint32Array(this.triangleCount),this._indicesTmp=new n.constructor(n.length),this._triangleZListTmp=new Float32Array(this.triangleCount));for(var i=0,a,o=0;o<n.length;){r.get(n[o++],Da),r.get(n[o++],Oa),r.get(n[o++],ka);var s=Ea.sqrDist(Da,e),c=Ea.sqrDist(Oa,e),l=Ea.sqrDist(ka,e),u=Math.min(s,c);u=Math.min(u,l),o===3?(a=u,u=0):u-=a,this._triangleZList[i++]=u}}for(var d=this._sortedTriangleIndices,o=0;o<d.length;o++)d[o]=o;if(this.triangleCount<2e4)t===0&&this._simpleSort(!0);else for(var o=0;o<3;o++)this._progressiveQuickSort(t*3+o);for(var f=this._indicesTmp,p=this._triangleZListTmp,m=this._triangleZList,o=0;o<this.triangleCount;o++){var h=d[o]*3,g=o*3;f[g++]=n[h++],f[g++]=n[h++],f[g]=n[h],p[o]=m[d[o]]}var _=this._indicesTmp;this._indicesTmp=this.indices,this.indices=_;var _=this._triangleZListTmp;this._triangleZListTmp=this._triangleZList,this._triangleZList=_,this.dirtyIndices()},_simpleSort:function(e){var t=this._triangleZList,n=this._sortedTriangleIndices;function r(e,n){return t[n]-t[e]}e?Array.prototype.sort.call(n,r):Ta.sort(n,r,0,n.length-1)},_progressiveQuickSort:function(e){var t=this._triangleZList,n=this._sortedTriangleIndices;this._quickSort=this._quickSort||new Ta,this._quickSort.step(n,function(e,n){return t[n]-t[e]},e)}};function ja(e){let t=e.getVisual(`style`);if(t)return t[e.getVisual(`drawType`)]}function Ma(e){return e.getVisual(`style`).opacity}function Na(e,t){let n=e.getItemVisual(t,`style`);if(n)return n[e.getVisual(`drawType`)]}function Pa(e,t){let n=e.getItemVisual(t,`style`);return n&&n.opacity}var Fa=1,Ia=2;function La(e,t,n){this._labelsMesh=new Tr,this._labelTextureSurface=new hr({width:512,height:512,devicePixelRatio:n.getDevicePixelRatio(),onupdate:function(){n.getZr().refresh()}}),this._api=n,this._labelsMesh.material.set(`textureAtlas`,this._labelTextureSurface.getTexture())}La.prototype.getLabelPosition=function(e,t,n){return[0,0,0]},La.prototype.getLabelDistance=function(e,t,n){return 0},La.prototype.getMesh=function(){return this._labelsMesh},La.prototype.updateData=function(e,t,n){t??=0,n??=e.count(),(!this._labelsVisibilitiesBits||this._labelsVisibilitiesBits.length!==n-t)&&(this._labelsVisibilitiesBits=new Uint8Array(n-t));for(var r=[`label`,`show`],i=[`emphasis`,`label`,`show`],a=t;a<n;a++){var o=e.getItemModel(a),s=o.get(r),c=o.get(i);c??=s;var l=(s?Fa:0)|(c?Ia:0);this._labelsVisibilitiesBits[a-t]=l}this._start=t,this._end=n,this._data=e},La.prototype.updateLabels=function(e){if(this._data){e||=[];for(var t=e.length>0,n={},r=0;r<e.length;r++)n[e[r]]=!0;this._labelsMesh.geometry.convertToDynamicArray(!0),this._labelTextureSurface.clear();for(var i=[`label`],a=[`emphasis`,`label`],o=this._data.hostModel,s=this._data,c=o.getModel(i),l=o.getModel(a,c),u={left:`right`,right:`left`,top:`center`,bottom:`center`},d={left:`middle`,right:`middle`,top:`bottom`,bottom:`top`},f=this._start;f<this._end;f++){var m=!1;if(t&&n[f]&&(m=!0),this._labelsVisibilitiesBits[f-this._start]&(m?Ia:Fa)){var h=s.getItemModel(f).getModel(m?a:i,m?l:c),g=h.get(`distance`)||0,_=h.get(`position`),v=this._api.getDevicePixelRatio(),y=o.getFormattedLabel(f,m?`emphasis`:`normal`);if(y==null||y===``)return;var b=new x({style:p(h,{text:y,fill:h.get(`color`)||Na(s,f)||`#000`,align:`left`,verticalAlign:`top`,opacity:G.firstNotNull(h.get(`opacity`),Pa(s,f),1)})}),S=b.getBoundingRect();S.height*=1.2;var C=this._labelTextureSurface.add(b),w=u[_]||`center`,T=d[_]||`bottom`;this._labelsMesh.geometry.addSprite(this.getLabelPosition(f,_,g),[S.width*v,S.height*v],C,w,T,this.getLabelDistance(f,_,g)*v)}}this._labelsMesh.material.set(`uvScale`,this._labelTextureSurface.getCoordsScale()),this._labelTextureSurface.getZr().refreshImmediately(),this._labelsMesh.geometry.convertToTypedArray(),this._labelsMesh.geometry.dirty()}},La.prototype.dispose=function(){this._labelTextureSurface.dispose()};var Ra=ur.vec3;Y.Shader.import(Ar);function za(e){this.rootNode=new Y.Node,this._triangulationResults={},this._shadersMap=Y.COMMON_SHADERS.filter(function(e){return e!==`shadow`}).reduce(function(e,t){return e[t]=Y.createShader(`ecgl.`+t),e},{}),this._linesShader=Y.createShader(`ecgl.meshLines3D`);var t={};Y.COMMON_SHADERS.forEach(function(e){t[e]=new Y.Material({shader:Y.createShader(`ecgl.`+e)})}),this._groundMaterials=t,this._groundMesh=new Y.Mesh({geometry:new Y.PlaneGeometry({dynamic:!0}),castShadow:!1,renderNormal:!0,$ignorePicking:!0}),this._groundMesh.rotation.rotateX(-Math.PI/2),this._labelsBuilder=new La(512,512,e),this._labelsBuilder.getMesh().renderOrder=100,this._labelsBuilder.getMesh().material.depthTest=!1,this.rootNode.add(this._labelsBuilder.getMesh()),this._initMeshes(),this._api=e}za.prototype={constructor:za,extrudeY:!0,update:function(e,t,n,r,i){var a=e.getData();r??=0,i??=a.count(),this._startIndex=r,this._endIndex=i-1,this._triangulation(e,r,i);var o=this._getShader(e.get(`shading`));this._prepareMesh(e,o,n,r,i),this.rootNode.updateWorldTransform(),this._updateRegionMesh(e,n,r,i);var s=e.coordinateSystem;s.type===`geo3D`&&this._updateGroundPlane(e,s,n);var c=this;this._labelsBuilder.updateData(a,r,i),this._labelsBuilder.getLabelPosition=function(e,t,n){var r=a.getName(e),i,o=n;if(s.type===`geo3D`){var l=s.getRegion(r);return l?(i=l.getCenter(),s.dataToPoint([i[0],i[1],o])):[NaN,NaN,NaN]}else var u=c._triangulationResults[e-c._startIndex],i=c.extrudeY?[(u.max[0]+u.min[0])/2,u.max[1]+o,(u.max[2]+u.min[2])/2]:[(u.max[0]+u.min[0])/2,(u.max[1]+u.min[1])/2,u.max[2]+o]},this._data=a,this._labelsBuilder.updateLabels(),this._updateDebugWireframe(e),this._lastHoverDataIndex=0},_initMeshes:function(){var e=this;function t(){var t=new Y.Mesh({name:`Polygon`,material:new Y.Material({shader:e._shadersMap.lambert}),geometry:new Y.Geometry({sortTriangles:!0,dynamic:!0}),culling:!1,ignorePicking:!0,renderNormal:!0});return Object.assign(t.geometry,Aa),t}var n=t(),r=new Y.Mesh({material:new Y.Material({shader:this._linesShader}),castShadow:!1,ignorePicking:!0,$ignorePicking:!0,geometry:new pr({useNativeLine:!1})});this.rootNode.add(n),this.rootNode.add(r),n.material.define(`both`,`VERTEX_COLOR`),n.material.define(`fragment`,`DOUBLE_SIDED`),this._polygonMesh=n,this._linesMesh=r,this.rootNode.add(this._groundMesh)},_getShader:function(e){var t=this._shadersMap[e];return t||=this._shadersMap.lambert,t.__shading=e,t},_prepareMesh:function(e,t,n,r,i){for(var a=0,o=0,s=0,c=0,l=r;l<i;l++){var u=this._getRegionPolygonInfo(l),d=this._getRegionLinesInfo(l,e,this._linesMesh.geometry);a+=u.vertexCount,o+=u.triangleCount,s+=d.vertexCount,c+=d.triangleCount}var f=this._polygonMesh,p=f.geometry;[`position`,`normal`,`texcoord0`,`color`].forEach(function(e){p.attributes[e].init(a)}),p.indices=a>65535?new Uint32Array(o*3):new Uint16Array(o*3),f.material.shader!==t&&f.material.attachShader(t,!0),Y.setMaterialFromModel(t.__shading,f.material,e,n),s>0&&(this._linesMesh.geometry.resetOffset(),this._linesMesh.geometry.setVertexCount(s),this._linesMesh.geometry.setTriangleCount(c)),this._dataIndexOfVertex=new Uint32Array(a),this._vertexRangeOfDataIndex=new Uint32Array((i-r)*2)},_updateRegionMesh:function(e,t,n,r){for(var i=e.getData(),a=0,o=0,s=!1,c=this._polygonMesh,l=this._linesMesh,u=n;u<r;u++){var d=e.getRegionModel(u),f=d.getModel(`itemStyle`),p=G.firstNotNull(Na(i,u),f.get(`color`),`#fff`),m=G.firstNotNull(Pa(i,u),f.get(`opacity`),1),h=Y.parseColor(p),g=Y.parseColor(f.get(`borderColor`));h[3]*=m,g[3]*=m;var _=h[3]<.99;c.material.set(`color`,[1,1,1,1]),s||=_;for(var v=G.firstNotNull(d.get(`height`,!0),e.get(`regionHeight`)),y=this._updatePolygonGeometry(e,c.geometry,u,v,a,o,h),b=a;b<y.vertexOffset;b++)this._dataIndexOfVertex[b]=u;this._vertexRangeOfDataIndex[(u-n)*2]=a,this._vertexRangeOfDataIndex[(u-n)*2+1]=y.vertexOffset,a=y.vertexOffset,o=y.triangleOffset;var x=f.get(`borderWidth`),S=x>0;S&&(x*=t.getDevicePixelRatio(),this._updateLinesGeometry(l.geometry,e,u,v,x,e.coordinateSystem.transform)),l.invisible=!S,l.material.set({color:g})}var c=this._polygonMesh;c.material.transparent=s,c.material.depthMask=!s,c.geometry.updateBoundingBox(),c.frontFace=this.extrudeY?Y.Mesh.CCW:Y.Mesh.CW,c.material.get(`normalMap`)&&c.geometry.generateTangents(),c.seriesIndex=e.seriesIndex,c.on(`mousemove`,this._onmousemove,this),c.on(`mouseout`,this._onmouseout,this)},_updateDebugWireframe:function(e){var t=e.getModel(`debug.wireframe`);if(t.get(`show`)){var n=Y.parseColor(t.get(`lineStyle.color`)||`rgba(0,0,0,0.5)`),r=G.firstNotNull(t.get(`lineStyle.width`),1),i=this._polygonMesh;i.geometry.generateBarycentric(),i.material.define(`both`,`WIREFRAME_TRIANGLE`),i.material.set(`wireframeLineColor`,n),i.material.set(`wireframeLineWidth`,r)}},_onmousemove:function(e){var t=this._dataIndexOfVertex[e.triangle[0]];t??=-1,t!==this._lastHoverDataIndex&&(this.downplay(this._lastHoverDataIndex),this.highlight(t),this._labelsBuilder.updateLabels([t])),this._lastHoverDataIndex=t,this._polygonMesh.dataIndex=t},_onmouseout:function(e){e.target&&(this.downplay(this._lastHoverDataIndex),this._lastHoverDataIndex=-1,this._polygonMesh.dataIndex=-1),this._labelsBuilder.updateLabels([])},_updateGroundPlane:function(e,t,n){var r=e.getModel(`groundPlane`,e);if(this._groundMesh.invisible=!r.get(`show`,!0),!this._groundMesh.invisible){var i=e.get(`shading`),a=this._groundMaterials[i];a||=this._groundMaterials.lambert,Y.setMaterialFromModel(i,a,r,n),a.get(`normalMap`)&&this._groundMesh.geometry.generateTangents(),this._groundMesh.material=a,this._groundMesh.material.set(`color`,Y.parseColor(r.get(`color`))),this._groundMesh.scale.set(t.size[0],t.size[2],1)}},_triangulation:function(e,t,n){this._triangulationResults=[];for(var r=[1/0,1/0,1/0],i=[-1/0,-1/0,-1/0],a=e.coordinateSystem,o=t;o<n;o++){for(var s=[],c=e.getRegionPolygonCoords(o),l=0;l<c.length;l++){var u=c[l].exterior,d=c[l].interiors,f=[],p=[];if(!(u.length<3)){for(var m=0,h=0;h<u.length;h++){var g=u[h];f[m++]=g[0],f[m++]=g[1]}for(var h=0;h<d.length;h++)if(!(d[h].length<3)){for(var _=f.length/2,v=0;v<d[h].length;v++){var g=d[h][v];f.push(g[0]),f.push(g[1])}p.push(_)}for(var y=Ki(f,p),b=new Float64Array(f.length/2*3),x=[],S=[1/0,1/0,1/0],C=[-1/0,-1/0,-1/0],w=0,h=0;h<f.length;)Ra.set(x,f[h++],0,f[h++]),a&&a.transform&&Ra.transformMat4(x,x,a.transform),Ra.min(S,S,x),Ra.max(C,C,x),b[w++]=x[0],b[w++]=x[1],b[w++]=x[2];Ra.min(r,r,S),Ra.max(i,i,C),s.push({points:b,indices:y,min:S,max:C})}}this._triangulationResults.push(s)}this._geoBoundingBox=[r,i]},_getRegionPolygonInfo:function(e){for(var t=this._triangulationResults[e-this._startIndex],n=0,r=0,i=0;i<t.length;i++)n+=t[i].points.length/3,r+=t[i].indices.length/3;return{vertexCount:n*2+n*4,triangleCount:r*2+n*2}},_updatePolygonGeometry:function(e,t,n,r,i,a,o){var s=e.get(`projectUVOnGround`),c=t.attributes.position,l=t.attributes.normal,u=t.attributes.texcoord0,d=t.attributes.color,f=this._triangulationResults[n-this._startIndex],p=d.value&&o,m=t.indices,h=this.extrudeY?1:2,g=this.extrudeY?2:1,_=[this.rootNode.worldTransform.x.len(),this.rootNode.worldTransform.y.len(),this.rootNode.worldTransform.z.len()],v=Ra.mul([],this._geoBoundingBox[0],_),y=Ra.mul([],this._geoBoundingBox[1],_),b=Math.max(y[0]-v[0],y[2]-v[2]);function x(e,t,n){for(var r=e.points,a=r.length,s=[],l=[],f=0;f<a;f+=3)s[0]=r[f],s[h]=t,s[g]=r[f+2],l[0]=(r[f]*_[0]-v[0])/b,l[1]=(r[f+2]*_[g]-v[2])/b,c.set(i,s),p&&d.set(i,o),u.set(i++,l)}function S(e,t,n){var r=i;x(e,t,n);for(var o=e.indices.length,s=0;s<o;s++)m[a*3+s]=e.indices[s]+r;a+=e.indices.length/3}for(var C=this.extrudeY?[0,1,0]:[0,0,1],w=Ra.negate([],C),T=0;T<f.length;T++){var E=i,D=f[T];S(D,0,0),S(D,r,0);for(var O=D.points.length/3,k=0;k<O;k++)l.set(E+k,w),l.set(E+k+O,C);for(var A=[0,3,1,1,3,2],j=[[],[],[],[]],ee=[],M=[],te=[],ne=[],N=0,k=0;k<O;k++){for(var re=(k+1)%O,ie=(D.points[re*3]-D.points[k*3])*_[0],ae=(D.points[re*3+2]-D.points[k*3+2])*_[g],oe=Math.sqrt(ie*ie+ae*ae),P=0;P<4;P++){var se=P===0||P===3,ce=(se?k:re)*3;j[P][0]=D.points[ce],j[P][h]=P>1?r:0,j[P][g]=D.points[ce+2],c.set(i+P,j[P]),s?(ne[0]=(D.points[ce]*_[0]-v[0])/b,ne[1]=(D.points[ce+2]*_[g]-v[g])/b):(ne[0]=(se?N:N+oe)/b,ne[1]=(j[P][h]*_[h]-v[h])/b),u.set(i+P,ne)}Ra.sub(ee,j[1],j[0]),Ra.sub(M,j[3],j[0]),Ra.cross(te,ee,M),Ra.normalize(te,te);for(var P=0;P<4;P++)l.set(i+P,te),p&&d.set(i+P,o);for(var P=0;P<6;P++)m[a*3+P]=A[P]+i;i+=4,a+=2,N+=oe}}return t.dirty(),{vertexOffset:i,triangleOffset:a}},_getRegionLinesInfo:function(e,t,n){var r=0,i=0;return t.getRegionModel(e).getModel(`itemStyle`).get(`borderWidth`)>0&&t.getRegionPolygonCoords(e).forEach(function(e){var t=e.exterior,a=e.interiors;r+=n.getPolylineVertexCount(t),i+=n.getPolylineTriangleCount(t);for(var o=0;o<a.length;o++)r+=n.getPolylineVertexCount(a[o]),i+=n.getPolylineTriangleCount(a[o])},this),{vertexCount:r,triangleCount:i}},_updateLinesGeometry:function(e,t,n,r,i,a){function o(e){for(var t=new Float64Array(e.length*3),n=0,i=[],o=0;o<e.length;o++)i[0]=e[o][0],i[1]=r+.1,i[2]=e[o][1],a&&Ra.transformMat4(i,i,a),t[n++]=i[0],t[n++]=i[1],t[n++]=i[2];return t}var s=[1,1,1,1];t.getRegionPolygonCoords(n).forEach(function(t){var n=t.exterior,r=t.interiors;e.addPolyline(o(n),s,i);for(var a=0;a<r.length;a++)e.addPolyline(o(r[a]),s,i)})},highlight:function(e){var t=this._data;if(t){var n=t.getItemModel(e).getModel([`emphasis`,`itemStyle`]),r=n.get(`color`),i=G.firstNotNull(n.get(`opacity`),Pa(t,e),1);r??=je(Na(t,e),-.4),i??=Pa(t,e);var a=Y.parseColor(r);a[3]*=i,this._setColorOfDataIndex(t,e,a)}},downplay:function(e){var t=this._data;if(t){var n=t.getItemModel(e),r=G.firstNotNull(Na(t,e),n.get([`itemStyle`,`color`]),`#fff`),i=G.firstNotNull(Pa(t,e),n.get([`itemStyle`,`opacity`]),1),a=Y.parseColor(r);a[3]*=i,this._setColorOfDataIndex(t,e,a)}},dispose:function(){this._labelsBuilder.dispose()},_setColorOfDataIndex:function(e,t,n){if(!(t<this._startIndex&&t>this._endIndex)){t-=this._startIndex;for(var r=this._vertexRangeOfDataIndex[t*2];r<this._vertexRangeOfDataIndex[t*2+1];r++)this._polygonMesh.geometry.attributes.color.set(r,n);this._polygonMesh.geometry.dirty(),this._api.getZr().refresh()}}};var Ba=ue.extend({type:`geo3D`,__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new za(t),this.groupGL=new Y.Node,this._lightRoot=new Y.Node,this._sceneHelper=new gr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot),this._control=new cr({zr:t.getZr()}),this._control.init()},render:function(e,t,n){this.groupGL.add(this._geo3DBuilder.rootNode);var r=e.coordinateSystem;if(!(!r||!r.viewGL)){r.viewGL.add(this._lightRoot),e.get(`show`)?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL);var i=this._control;i.setViewGL(r.viewGL);var a=e.getModel(`viewControl`);i.setFromViewControlModel(a,0),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel(`postEffect`),n),r.viewGL.setTemporalSuperSampling(e.getModel(`temporalSuperSampling`)),this._geo3DBuilder.update(e,t,n,0,e.getData().count());var o=r.viewGL.isLinearSpace()?`define`:`undefine`;this._geo3DBuilder.rootNode.traverse(function(e){e.material&&e.material[o](`fragment`,`SRGB_DECODE`)}),i.off(`update`),i.on(`update`,function(){n.dispatchAction({type:`geo3DChangeCamera`,alpha:i.getAlpha(),beta:i.getBeta(),distance:i.getDistance(),center:i.getCenter(),from:this.uid,geo3DId:e.id})}),i.update()}},afterRender:function(e,t,n,r){var i=r.renderer;this._sceneHelper.updateAmbientCubemap(i,e,n),this._sceneHelper.updateSkybox(i,e,n)},dispose:function(){this._control.dispose(),this._geo3DBuilder.dispose()}}),Va={Russia:[100,60],"United States":[-99,38],"United States of America":[-99,38]};function Ha(e,t){if(e===`world`){var n=Va[t.name];if(n){var r=[n[0],n[1]];t.setCenter(r)}}}var Ua=ur.vec3,Wa=ur.mat4,Ga=[C,Ha];function Ka(e,t,n,r,i){this.name=e,this.map=t,this.regionHeight=0,this.regions=[],this._nameCoordMap={},this.loadGeoJson(n,r,i),this.transform=Wa.identity(new Float64Array(16)),this.invTransform=Wa.identity(new Float64Array(16)),this.extrudeY=!0,this.altitudeAxis}Ka.prototype={constructor:Ka,type:`geo3D`,dimensions:[`lng`,`lat`,`alt`],containPoint:function(){},loadGeoJson:function(e,t,n){var r=N||N;try{this.regions=e?r(e):[]}catch(e){throw`Invalid geoJson format
`+e}t||={},n||={};for(var i=this.regions,a={},o=0;o<i.length;o++){var s=i[o].name;s=n[s]||s,i[o].name=s,a[s]=i[o],this.addGeoCoord(s,i[o].getCenter());var c=t[s];c&&i[o].transformTo(c.left,c.top,c.width,c.height)}this._regionsMap=a,this._geoRect=null,Ga.forEach(function(e){e(this)},this)},getGeoBoundingRect:function(){if(this._geoRect)return this._geoRect;for(var e,t=this.regions,n=0;n<t.length;n++){var r=t[n].getBoundingRect();e||=r.clone(),e.union(r)}return this._geoRect=e||new xe(0,0,0,0)},addGeoCoord:function(e,t){this._nameCoordMap[e]=t},getRegion:function(e){return this._regionsMap[e]},getRegionByCoord:function(e){for(var t=this.regions,n=0;n<t.length;n++)if(t[n].contain(e))return t[n]},setSize:function(e,t,n){this.size=[e,t,n];var r=this.getGeoBoundingRect(),i=e/r.width,a=-n/r.height,o=-e/2-r.x*i,s=n/2-r.y*a,c=this.extrudeY?[o,0,s]:[o,s,0],l=this.extrudeY?[i,1,a]:[i,a,1],u=this.transform;Wa.identity(u),Wa.translate(u,u,c),Wa.scale(u,u,l),Wa.invert(this.invTransform,u)},dataToPoint:function(e,t){t||=[];var n=this.extrudeY?1:2,r=this.extrudeY?2:1,i=e[2];return isNaN(i)&&(i=0),t[0]=e[0],t[r]=e[1],this.altitudeAxis?t[n]=this.altitudeAxis.dataToCoord(i):t[n]=0,t[n]+=this.regionHeight,Ua.transformMat4(t,t,this.transform),t},pointToData:function(e,t){}};function qa(e,t){var n=te(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()});n.y=t.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,t.getDevicePixelRatio());var r=this.getGeoBoundingRect(),i=r.width/r.height*(e.get(`aspectScale`)||.75),a=e.get(`boxWidth`),o=e.get(`boxDepth`),s=e.get(`boxHeight`);s??=5,isNaN(a)&&isNaN(o)&&(a=100),isNaN(o)?o=a/i:isNaN(a)&&(a=o/i),this.setSize(a,s,o),this.regionHeight=e.get(`regionHeight`),this.altitudeAxis&&this.altitudeAxis.setExtent(0,Math.max(s-this.regionHeight,0))}function Ja(e,t){var n=[1/0,-1/0];if(e.eachSeries(function(e){if(e.coordinateSystem===this&&e.type!==`series.map3D`){var t=e.getData(),r=e.coordDimToDataDim(`alt`),i=r&&r[0];if(i){var a=t.getDataExtent(i,!0);n[0]=Math.min(n[0],a[0]),n[1]=Math.max(n[1],a[1])}}},this),n&&isFinite(n[1]-n[0])){var r=re(n,{type:`value`,min:`dataMin`,max:`dataMax`});this.altitudeAxis=new T(`altitude`,r),this.resize(this.model,t)}}var Ya=0,Xa={dimensions:Ka.prototype.dimensions,create:function(e,t){var n=[];if(!ne)throw Error(`geo3D component depends on geo component`);function r(e,r){var i=Xa.createGeo3D(e);e.__viewGL=e.__viewGL||new Q,i.viewGL=e.__viewGL,e.coordinateSystem=i,i.model=e,n.push(i),i.resize=qa,i.resize(e,t),i.update=Ja}return e.eachComponent(`geo3D`,function(e,t){r(e,t)}),e.eachSeriesByType(`map3D`,function(e,t){var n=e.get(`coordinateSystem`);n??=`geo3D`,n===`geo3D`&&r(e,t)}),e.eachSeries(function(t){if(t.get(`coordinateSystem`)===`geo3D`){if(t.type===`series.map3D`)return;var n=t.getReferringComponents(`geo3D`).models[0];if(n||=e.getComponent(`geo3D`),!n)throw Error(`geo "`+G.firstNotNull(t.get(`geo3DIndex`),t.get(`geo3DId`),0)+`" not found`);t.coordinateSystem=n.coordinateSystem}}),n},createGeo3D:function(e){var t=e.get(`map`),n;return typeof t==`string`?(n=t,t=ne(t)):t&&t.features&&(t={geoJson:t}),n??=`GEO_ANONYMOUS_`+ Ya++,new Ka(n+ Ya++,n,t&&t.geoJson,t&&t.specialAreas,e.get(`nameMap`))}};function Za(e){e.registerComponentModel(Gi),e.registerComponentView(Ba),e.registerAction({type:`geo3DChangeCamera`,event:`geo3dcamerachanged`,update:`series:updateCamera`},function(e,t){t.eachComponent({mainType:`geo3D`,query:e},function(t){t.setView(e)})}),e.registerCoordinateSystem(`geo3D`,Xa)}P(Za);function Qa(e,t){e.id=e.id||e.name||t+``}var $a=D.extend({type:`globe`,layoutMode:`box`,coordinateSystem:null,init:function(){$a.superApply(this,`init`,arguments),ve(this.option.layers,function(e,t){F(e,this.defaultLayerOption),Qa(e,t)},this)},mergeOption:function(e){var t=this.option.layers;this.option.layers=null,$a.superApply(this,`mergeOption`,arguments);function n(e){return Ae(e,function(e,t,n){return Qa(t,n),e[t.id]=t,e},{})}if(t&&t.length){var r=n(e.layers),i=n(t);for(var a in r)i[a]?F(i[a],r[a],!0):t.push(e.layers[a]);this.option.layers=t}ve(this.option.layers,function(e){F(e,this.defaultLayerOption)},this)},optionUpdated:function(){this.updateDisplacementHash()},defaultLayerOption:{show:!0,type:`overlay`},defaultOption:{show:!0,zlevel:-10,left:0,top:0,width:`100%`,height:`100%`,environment:`auto`,baseColor:`#fff`,baseTexture:``,heightTexture:``,displacementTexture:``,displacementScale:0,displacementQuality:`medium`,globeRadius:100,globeOuterRadius:150,shading:`lambert`,light:{main:{time:``}},atmosphere:{show:!1,offset:5,color:`#ffffff`,glowPower:6,innerGlowPower:2},viewControl:{autoRotate:!0,panSensitivity:0,targetCoord:null},layers:[]},setDisplacementData:function(e,t,n){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=n},getDisplacementTexture:function(){return this.get(`displacementTexture`)||this.get(`heightTexture`)},getDisplacemenScale:function(){var e=this.getDisplacementTexture(),t=this.get(`displacementScale`);return(!e||e===`none`)&&(t=0),t},hasDisplacement:function(){return this.getDisplacemenScale()>0},_displacementChanged:!0,_displacementScale:0,updateDisplacementHash:function(){var e=this.getDisplacementTexture(),t=this.getDisplacemenScale();this._displacementChanged=this._displacementTexture!==e||this._displacementScale!==t,this._displacementTexture=e,this._displacementScale=t},isDisplacementChanged:function(){return this._displacementChanged}});F($a.prototype,tr),F($a.prototype,nr),F($a.prototype,rr),F($a.prototype,Ui);var eo=Math.PI,to=Math.sin,no=Math.cos,ro=Math.tan,io=Math.asin,ao=Math.atan2,oo=eo/180,so=1e3*60*60*24,co=2440588,lo=2451545;function uo(e){return e.valueOf()/so-.5+co}function fo(e){return uo(e)-lo}var po=oo*23.4397;function mo(e,t){return ao(to(e)*no(po)-ro(t)*to(po),no(e))}function ho(e,t){return io(to(t)*no(po)+no(t)*to(po)*to(e))}function go(e,t,n){return ao(to(e),no(e)*to(t)-ro(n)*no(t))}function _o(e,t,n){return io(to(t)*to(n)+no(t)*no(n)*no(e))}function vo(e,t){return oo*(280.16+360.9856235*e)-t}function yo(e){return oo*(357.5291+.98560028*e)}function bo(e){var t=oo*(1.9148*to(e)+.02*to(2*e)+3e-4*to(3*e)),n=oo*102.9372;return e+t+n+eo}function xo(e){var t=bo(yo(e));return{dec:ho(t,0),ra:mo(t,0)}}var So={};So.getPosition=function(e,t,n){var r=oo*-n,i=oo*t,a=fo(e),o=xo(a),s=vo(a,r)-o.ra;return{azimuth:go(s,i,o.dec),altitude:_o(s,i,o.dec)}},Y.Shader.import(Nn),Y.Shader.import(`@export ecgl.atmosphere.vertex
attribute vec3 position: POSITION;
attribute vec3 normal : NORMAL;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform mat4 normalMatrix : WORLDINVERSETRANSPOSE;

varying vec3 v_Normal;

void main() {
 v_Normal = normalize((normalMatrix * vec4(normal, 0.0)).xyz);
 gl_Position = worldViewProjection * vec4(position, 1.0);
}
@end


@export ecgl.atmosphere.fragment
uniform mat4 viewTranspose: VIEWTRANSPOSE;
uniform float glowPower;
uniform vec3 glowColor;

varying vec3 v_Normal;

void main() {
 float intensity = pow(1.0 - dot(v_Normal, (viewTranspose * vec4(0.0, 0.0, 1.0, 0.0)).xyz), glowPower);
 gl_FragColor = vec4(glowColor, intensity * intensity);
}
@end`);var Co=ue.extend({type:`globe`,__ecgl__:!0,_displacementScale:0,init:function(e,t){this.groupGL=new Y.Node,this._sphereGeometry=new Y.SphereGeometry({widthSegments:200,heightSegments:100,dynamic:!0}),this._overlayGeometry=new Y.SphereGeometry({widthSegments:80,heightSegments:40}),this._planeGeometry=new Y.PlaneGeometry,this._earthMesh=new Y.Mesh({renderNormal:!0}),this._atmosphereMesh=new Y.Mesh,this._atmosphereGeometry=new Y.SphereGeometry({widthSegments:80,heightSegments:40}),this._atmosphereMaterial=new Y.Material({shader:new Y.Shader(Y.Shader.source(`ecgl.atmosphere.vertex`),Y.Shader.source(`ecgl.atmosphere.fragment`)),transparent:!0}),this._atmosphereMesh.geometry=this._atmosphereGeometry,this._atmosphereMesh.material=this._atmosphereMaterial,this._atmosphereMesh.frontFace=Y.Mesh.CW,this._lightRoot=new Y.Node,this._sceneHelper=new gr,this._sceneHelper.initLight(this._lightRoot),this.groupGL.add(this._atmosphereMesh),this.groupGL.add(this._earthMesh),this._control=new cr({zr:t.getZr()}),this._control.init(),this._layerMeshes={}},render:function(e,t,n){var r=e.coordinateSystem,i=e.get(`shading`);r.viewGL.add(this._lightRoot),e.get(`show`)?r.viewGL.add(this.groupGL):r.viewGL.remove(this.groupGL),this._sceneHelper.setScene(r.viewGL.scene),r.viewGL.setPostEffect(e.getModel(`postEffect`),n),r.viewGL.setTemporalSuperSampling(e.getModel(`temporalSuperSampling`));var a=this._earthMesh;a.geometry=this._sphereGeometry;var o=`ecgl.`+i;(!a.material||a.material.shader.name!==o)&&(a.material=Y.createMaterial(o)),Y.setMaterialFromModel(i,a.material,e,n),[`roughnessMap`,`metalnessMap`,`detailMap`,`normalMap`].forEach(function(e){var t=a.material.get(e);t&&(t.flipY=!1)}),a.material.set(`color`,Y.parseColor(e.get(`baseColor`)));var s=r.radius*.99;if(a.scale.set(s,s,s),e.get(`atmosphere.show`)){a.material.define(`both`,`ATMOSPHERE_ENABLED`),this._atmosphereMesh.invisible=!1,this._atmosphereMaterial.setUniforms({glowPower:e.get(`atmosphere.glowPower`)||6,glowColor:e.get(`atmosphere.color`)||`#ffffff`}),a.material.setUniforms({glowPower:e.get(`atmosphere.innerGlowPower`)||2,glowColor:e.get(`atmosphere.color`)||`#ffffff`});var c=e.get(`atmosphere.offset`)||5;this._atmosphereMesh.scale.set(s+c,s+c,s+c)}else a.material.undefine(`both`,`ATMOSPHERE_ENABLED`),this._atmosphereMesh.invisible=!0;var l=a.material.setTextureImage(`diffuseMap`,e.get(`baseTexture`),n,{flipY:!1,anisotropic:8});l&&l.surface&&l.surface.attachToMesh(a);var u=a.material.setTextureImage(`bumpMap`,e.get(`heightTexture`),n,{flipY:!1,anisotropic:8});u&&u.surface&&u.surface.attachToMesh(a),a.material[e.get(`postEffect.enable`)?`define`:`undefine`](`fragment`,`SRGB_DECODE`),this._updateLight(e,n),this._displaceVertices(e,n),this._updateViewControl(e,n),this._updateLayers(e,n)},afterRender:function(e,t,n,r){var i=r.renderer;this._sceneHelper.updateAmbientCubemap(i,e,n),this._sceneHelper.updateSkybox(i,e,n)},_updateLayers:function(e,t){var n=e.coordinateSystem,i=e.get(`layers`),a=n.radius,o=[],s=[],c=[],l=[];ve(i,function(e){var i=new r(e),u=i.get(`type`),d=Y.loadTexture(i.get(`texture`),t,{flipY:!1,anisotropic:8});if(d.surface&&d.surface.attachToMesh(this._earthMesh),u===`blend`){var f=i.get(`blendTo`),p=G.firstNotNull(i.get(`intensity`),1);f===`emission`?(c.push(d),l.push(p)):(o.push(d),s.push(p))}else{var m=i.get(`id`),h=this._layerMeshes[m];h||=this._layerMeshes[m]=new Y.Mesh({geometry:this._overlayGeometry,castShadow:!1,ignorePicking:!0}),i.get(`shading`)===`lambert`?(h.material=h.__lambertMaterial||new Y.Material({autoUpdateTextureStatus:!1,shader:Y.createShader(`ecgl.lambert`),transparent:!0,depthMask:!1}),h.__lambertMaterial=h.material):(h.material=h.__colorMaterial||new Y.Material({autoUpdateTextureStatus:!1,shader:Y.createShader(`ecgl.color`),transparent:!0,depthMask:!1}),h.__colorMaterial=h.material),h.material.enableTexture(`diffuseMap`);var g=i.get(`distance`),_=a+(g??n.radius/100);h.scale.set(_,_,_),a=_;var v=this._blankTexture||=Y.createBlankTexture(`rgba(255, 255, 255, 0)`);h.material.set(`diffuseMap`,v),Y.loadTexture(i.get(`texture`),t,{flipY:!1,anisotropic:8},function(e){e.surface&&e.surface.attachToMesh(h),h.material.set(`diffuseMap`,e),t.getZr().refresh()}),i.get(`show`)?this.groupGL.add(h):this.groupGL.remove(h)}},this);var u=this._earthMesh.material;u.define(`fragment`,`LAYER_DIFFUSEMAP_COUNT`,o.length),u.define(`fragment`,`LAYER_EMISSIVEMAP_COUNT`,c.length),u.set(`layerDiffuseMap`,o),u.set(`layerDiffuseIntensity`,s),u.set(`layerEmissiveMap`,c),u.set(`layerEmissionIntensity`,l);var d=e.getModel(`debug.wireframe`);if(d.get(`show`)){u.define(`both`,`WIREFRAME_TRIANGLE`);var f=Y.parseColor(d.get(`lineStyle.color`)||`rgba(0,0,0,0.5)`),p=G.firstNotNull(d.get(`lineStyle.width`),1);u.set(`wireframeLineWidth`,p),u.set(`wireframeLineColor`,f)}else u.undefine(`both`,`WIREFRAME_TRIANGLE`)},_updateViewControl:function(e,t){var n=e.coordinateSystem,r=e.getModel(`viewControl`);n.viewGL.camera;var i=this;function a(){return{type:`globeChangeCamera`,alpha:o.getAlpha(),beta:o.getBeta(),distance:o.getDistance()-n.radius,center:o.getCenter(),from:i.uid,globeId:e.id}}var o=this._control;o.setViewGL(n.viewGL);var s=r.get(`targetCoord`),c,l;s!=null&&(l=s[0]+90,c=s[1]),o.setFromViewControlModel(r,{baseDistance:n.radius,alpha:c,beta:l}),o.off(`update`),o.on(`update`,function(){t.dispatchAction(a())})},_displaceVertices:function(e,t){var n=e.get(`displacementQuality`),r=e.get(`debug.wireframe.show`),i=e.coordinateSystem;if(!(!e.isDisplacementChanged()&&n===this._displacementQuality&&r===this._showDebugWireframe)){this._displacementQuality=n,this._showDebugWireframe=r;var a=this._sphereGeometry,o={low:100,medium:200,high:400,ultra:800}[n]||200,s=o/2;(a.widthSegments!==o||r)&&(a.widthSegments=o,a.heightSegments=s,a.build()),this._doDisplaceVertices(a,i),r&&a.generateBarycentric()}},_doDisplaceVertices:function(e,t){var n=e.attributes.position.value,r=e.attributes.texcoord0.value,i=e.__originalPosition;(!i||i.length!==n.length)&&(i=new Float32Array(n.length),i.set(n),e.__originalPosition=i);for(var a=t.displacementWidth,o=t.displacementHeight,s=t.displacementData,c=0;c<e.vertexCount;c++){var l=c*3,u=c*2,d=i[l+1],f=i[l+2],p=i[l+3],m=r[u++],h=r[u++],g=Math.round(m*(a-1)),_=Math.round(h*(o-1))*a+g,v=s?s[_]:0;n[l+1]=d+d*v,n[l+2]=f+f*v,n[l+3]=p+p*v}e.generateVertexNormals(),e.dirty(),e.updateBoundingBox()},_updateLight:function(e,t){var n=this._earthMesh;this._sceneHelper.updateLight(e);var r=this._sceneHelper.mainLight,a=e.get(`light.main.time`)||new Date,o=So.getPosition(i(a),0,0),s=Math.cos(o.altitude);r.position.y=-s*Math.cos(o.azimuth),r.position.x=Math.sin(o.altitude),r.position.z=s*Math.sin(o.azimuth),r.lookAt(n.getWorldPosition())},dispose:function(e,t){this.groupGL.removeAll(),this._control.dispose()}}),wo=ur.vec3;function To(e){this.radius=e,this.viewGL=null,this.altitudeAxis,this.displacementData=null,this.displacementWidth,this.displacementHeight}To.prototype={constructor:To,dimensions:[`lng`,`lat`,`alt`],type:`globe`,containPoint:function(){},setDisplacementData:function(e,t,n){this.displacementData=e,this.displacementWidth=t,this.displacementHeight=n},_getDisplacementScale:function(e,t){var n=(e+180)/360*(this.displacementWidth-1),r=(90-t)/180*(this.displacementHeight-1),i=Math.round(n)+Math.round(r)*this.displacementWidth;return this.displacementData[i]},dataToPoint:function(e,t){var n=e[0],r=e[1],i=e[2]||0,a=this.radius;this.displacementData&&(a*=1+this._getDisplacementScale(n,r)),this.altitudeAxis&&(a+=this.altitudeAxis.dataToCoord(i)),n=n*Math.PI/180,r=r*Math.PI/180;var o=Math.cos(r)*a;return t||=[],t[0]=-o*Math.cos(n+Math.PI),t[1]=Math.sin(r)*a,t[2]=o*Math.sin(n+Math.PI),t},pointToData:function(e,t){var n=e[0],r=e[1],i=e[2],a=wo.len(e);n/=a,r/=a,i/=a;var o=Math.asin(r),s=Math.atan2(i,-n);s<0&&(s=Math.PI*2+s);var c=o*180/Math.PI,l=s*180/Math.PI-180;return t||=[],t[0]=l,t[1]=c,t[2]=a-this.radius,this.altitudeAxis&&(t[2]=this.altitudeAxis.coordToData(t[2])),t}};function Eo(e,t){var n=document.createElement(`canvas`),r=n.getContext(`2d`),i=e.width,a=e.height;n.width=i,n.height=a,r.drawImage(e,0,0,i,a);for(var o=r.getImageData(0,0,i,a).data,s=new Float32Array(o.length/4),c=0;c<o.length/4;c++)s[c]=o[c*4]/255*t;return{data:s,width:i,height:a}}function Do(e,t){var n=te(e.getBoxLayoutParams(),{width:t.getWidth(),height:t.getHeight()});n.y=t.getHeight()-n.y-n.height,this.viewGL.setViewport(n.x,n.y,n.width,n.height,t.getDevicePixelRatio()),this.radius=e.get(`globeRadius`);var r=e.get(`globeOuterRadius`);this.altitudeAxis&&this.altitudeAxis.setExtent(0,r-this.radius)}function Oo(e,t){var n=[1/0,-1/0];if(e.eachSeries(function(e){if(e.coordinateSystem===this){var t=e.getData(),r=e.coordDimToDataDim(`alt`),i=r&&r[0];if(i){var a=t.getDataExtent(i,!0);n[0]=Math.min(n[0],a[0]),n[1]=Math.max(n[1],a[1])}}},this),n&&isFinite(n[1]-n[0])){var r=re(n,{type:`value`,min:`dataMin`,max:`dataMax`});this.altitudeAxis=new T(`altitude`,r),this.resize(this.model,t)}}var ko={dimensions:To.prototype.dimensions,create:function(e,t){var n=[];return e.eachComponent(`globe`,function(e){e.__viewGL=e.__viewGL||new Q;var r=new To;r.viewGL=e.__viewGL,e.coordinateSystem=r,r.model=e,n.push(r),r.resize=Do,r.resize(e,t),r.update=Oo}),e.eachSeries(function(t){if(t.get(`coordinateSystem`)===`globe`){var n=t.getReferringComponents(`globe`).models[0];if(n||=e.getComponent(`globe`),!n)throw Error(`globe "`+G.firstNotNull(t.get(`globe3DIndex`),t.get(`globe3DId`),0)+`" not found`);t.coordinateSystem=n.coordinateSystem}}),e.eachComponent(`globe`,function(e,n){var r=e.coordinateSystem,i=e.getDisplacementTexture(),a=e.getDisplacemenScale();if(e.isDisplacementChanged()){if(e.hasDisplacement()){var o=!0;Y.loadTexture(i,t,function(n){var r=n.image,i=Eo(r,a);e.setDisplacementData(i.data,i.width,i.height),o||t.dispatchAction({type:`globeUpdateDisplacment`})}),o=!1}else r.setDisplacementData(null,0,0);r.setDisplacementData(e.displacementData,e.displacementWidth,e.displacementHeight)}}),n}};function Ao(e){e.registerComponentModel($a),e.registerComponentView(Co),e.registerCoordinateSystem(`globe`,ko),e.registerAction({type:`globeChangeCamera`,event:`globecamerachanged`,update:`series:updateCamera`},function(e,t){t.eachComponent({mainType:`globe`,query:e},function(t){t.setView(e)})}),e.registerAction({type:`globeUpdateDisplacment`,event:`globedisplacementupdated`,update:`update`},function(e,t){})}P(Ao);var jo=[`zoom`,`center`,`pitch`,`bearing`],Mo=D.extend({type:`mapbox3D`,layoutMode:`box`,coordinateSystem:null,defaultOption:{zlevel:-10,style:`mapbox://styles/mapbox/light-v9`,center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:`auto`},getMapboxCameraOption:function(){var e=this;return jo.reduce(function(t,n){return t[n]=e.get(n),t},{})},setMapboxCameraOption:function(e){e!=null&&jo.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMapbox:function(){return this._mapbox},setMapbox:function(e){this._mapbox=e}});F(Mo.prototype,nr),F(Mo.prototype,rr);function No(e,t){if(this.id=e,this.zr=t,this.dom=document.createElement(`div`),this.dom.style.cssText=`position:absolute;left:0;right:0;top:0;bottom:0;`,!mapboxgl)throw Error(`Mapbox GL library must be included. See https://www.mapbox.com/mapbox-gl-js/api/`);this._mapbox=new mapboxgl.Map({container:this.dom}),this._initEvents()}No.prototype.setUnpainted=function(){},No.prototype.resize=function(){this._mapbox.resize()},No.prototype.getMapbox=function(){return this._mapbox},No.prototype.clear=function(){},No.prototype.refresh=function(){this._mapbox.resize()};var Po=[`mousedown`,`mouseup`,`click`,`dblclick`,`mousemove`,`mousewheel`,`wheel`,`touchstart`,`touchend`,`touchmove`,`touchcancel`];No.prototype._initEvents=function(){var e=this._mapbox.getCanvasContainer();this._handlers=this._handlers||{contextmenu:function(e){return e.preventDefault(),!1}},Po.forEach(function(t){this._handlers[t]=function(t){var n={};for(var r in t)n[r]=t[r];n.bubbles=!1;var i=new t.constructor(t.type,n);e.dispatchEvent(i)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener(`contextmenu`,this._handlers.contextmenu)},No.prototype.dispose=function(){Po.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this)};var Fo=`
@export ecgl.displayShadow.vertex

@import ecgl.common.transformUniforms

@import ecgl.common.uv.header

@import ecgl.common.attributes

varying vec3 v_WorldPosition;

varying vec3 v_Normal;

void main()
{
 @import ecgl.common.uv.main
 v_Normal = normalize((worldInverseTranspose * vec4(normal, 0.0)).xyz);

 v_WorldPosition = (world * vec4(position, 1.0)).xyz;
 gl_Position = worldViewProjection * vec4(position, 1.0);
}

@end


@export ecgl.displayShadow.fragment

@import ecgl.common.uv.fragmentHeader

varying vec3 v_Normal;
varying vec3 v_WorldPosition;

uniform float roughness: 0.2;

#ifdef DIRECTIONAL_LIGHT_COUNT
@import clay.header.directional_light
#endif

@import ecgl.common.ssaoMap.header

@import clay.plugin.compute_shadow_map

void main()
{
 float shadow = 1.0;

 @import ecgl.common.ssaoMap.main

#if defined(DIRECTIONAL_LIGHT_COUNT) && defined(DIRECTIONAL_LIGHT_SHADOWMAP_COUNT)
 float shadowContribsDir[DIRECTIONAL_LIGHT_COUNT];
 if(shadowEnabled)
 {
 computeShadowOfDirectionalLights(v_WorldPosition, shadowContribsDir);
 }
 for (int i = 0; i < DIRECTIONAL_LIGHT_COUNT; i++) {
 shadow = min(shadow, shadowContribsDir[i] * 0.5 + 0.5);
 }
#endif

 shadow *= 0.5 + ao * 0.5;
 shadow = clamp(shadow, 0.0, 1.0);

 gl_FragColor = vec4(vec3(0.0), 1.0 - shadow);
}

@end`;Y.Shader.import(Fo);var Io=ue.extend({type:`mapbox3D`,__ecgl__:!0,init:function(e,t){var n=t.getZr();this._zrLayer=new No(`mapbox3D`,n),n.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new Y.Node,this._sceneHelper=new gr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var r=this._zrLayer.getMapbox(),i=this._dispatchInteractAction.bind(this,t,r);[`zoom`,`rotate`,`drag`,`pitch`,`rotate`,`move`].forEach(function(e){r.on(e,i)}),this._groundMesh=new Y.Mesh({geometry:new Y.PlaneGeometry,material:new Y.Material({shader:new Y.Shader({vertex:Y.Shader.source(`ecgl.displayShadow.vertex`),fragment:Y.Shader.source(`ecgl.displayShadow.fragment`)}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},render:function(e,t,n){var r=this._zrLayer.getMapbox(),i=e.get(`style`),a=JSON.stringify(i);a!==this._oldStyleStr&&i&&r.setStyle(i),this._oldStyleStr=a,r.setCenter(e.get(`center`)),r.setZoom(e.get(`zoom`)),r.setPitch(e.get(`pitch`)),r.setBearing(e.get(`bearing`)),e.setMapbox(r);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel(`postEffect`),n),o.viewGL.setTemporalSuperSampling(e.getModel(`temporalSuperSampling`)),this._mapbox3DModel=e},afterRender:function(e,t,n,r){var i=r.renderer;this._sceneHelper.updateAmbientCubemap(i,e,n),this._sceneHelper.updateSkybox(i,e,n),e.coordinateSystem.viewGL.scene.traverse(function(e){e.material&&(e.material.define(`fragment`,`NORMAL_UP_AXIS`,2),e.material.define(`fragment`,`NORMAL_FRONT_AXIS`,1))})},updateCamera:function(e,t,n,r){e.coordinateSystem.setCameraOption(r),this._updateGroundMesh(),n.getZr().refresh()},_dispatchInteractAction:function(e,t,n){e.dispatchAction({type:`mapbox3DChangeCamera`,pitch:t.getPitch(),zoom:t.getZoom(),center:t.getCenter().toArray(),bearing:t.getBearing(),mapbox3DId:this._mapbox3DModel&&this._mapbox3DModel.id})},_updateGroundMesh:function(){if(this._mapbox3DModel){var e=this._mapbox3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var n=new Y.Plane(new Y.Vector3(0,0,1),0),r=e.viewGL.camera.castRay(new Y.Vector2(-1,-1)),i=e.viewGL.camera.castRay(new Y.Vector2(1,1)),a=r.intersectPlane(n),o=i.intersectPlane(n),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Lo=ur.mat4,Ro=512,zo=.6435011087932844,Bo=Math.PI,Vo=1/10;function Ho(){this.width=0,this.height=0,this.altitudeScale=1,this.boxHeight=`auto`,this.altitudeExtent,this.bearing=0,this.pitch=0,this.center=[0,0],this._origin,this.zoom=0,this._initialZoom,this.maxPitch=60,this.zoomOffset=0}Ho.prototype={constructor:Ho,dimensions:[`lng`,`lat`,`alt`],containPoint:function(){},setCameraOption:function(e){this.bearing=e.bearing,this.pitch=e.pitch,this.center=e.center,this.zoom=e.zoom,this._origin||=this.projectOnTileWithScale(this.center,Ro),this._initialZoom??=this.zoom,this.updateTransform()},updateTransform:function(){if(this.height){var e=.5/Math.tan(zo/2)*this.height*Vo,t=Math.max(Math.min(this.pitch,this.maxPitch),0)/180*Math.PI,n=zo/2,r=Math.PI/2+t,i=Math.sin(n)*e/Math.sin(Math.PI-r-n),a=(Math.cos(Math.PI/2-t)*i+e)*1.1;this.pitch>50&&(a=1e3);var o=[];Lo.perspective(o,zo,this.width/this.height,1,a),this.viewGL.camera.projectionMatrix.setArray(o),this.viewGL.camera.decomposeProjectionMatrix();var o=Lo.identity([]),s=this.dataToPoint(this.center);Lo.scale(o,o,[1,-1,1]),Lo.translate(o,o,[0,0,-e]),Lo.rotateX(o,o,t),Lo.rotateZ(o,o,-this.bearing/180*Math.PI),Lo.translate(o,o,[-s[0]*this.getScale()*Vo,-s[1]*this.getScale()*Vo,0]),this.viewGL.camera.viewMatrix.array=o;var c=[];Lo.invert(c,o),this.viewGL.camera.worldTransform.array=c,this.viewGL.camera.decomposeWorldTransform();var l=Ro*this.getScale(),u;if(this.altitudeExtent&&!isNaN(this.boxHeight)){var d=this.altitudeExtent[1]-this.altitudeExtent[0];u=this.boxHeight/d*this.getScale()/2**(this._initialZoom-this.zoomOffset)}else u=l/(2*Math.PI*6378e3*Math.abs(Math.cos(this.center[1]*(Math.PI/180))))*this.altitudeScale*Vo;this.viewGL.rootNode.scale.set(this.getScale()*Vo,this.getScale()*Vo,u)}},getScale:function(){return 2**(this.zoom-this.zoomOffset)},projectOnTile:function(e,t){return this.projectOnTileWithScale(e,this.getScale()*Ro,t)},projectOnTileWithScale:function(e,t,n){var r=e[0],i=e[1],a=r*Bo/180,o=i*Bo/180,s=t*(a+Bo)/(2*Bo),c=t*(Bo-Math.log(Math.tan(Bo/4+o*.5)))/(2*Bo);return n||=[],n[0]=s,n[1]=c,n},unprojectFromTile:function(e,t){return this.unprojectOnTileWithScale(e,this.getScale()*Ro,t)},unprojectOnTileWithScale:function(e,t,n){var r=e[0],i=e[1],a=r/t*(2*Bo)-Bo,o=2*(Math.atan(Math.exp(Bo-i/t*(2*Bo)))-Bo/4);return n||=[],n[0]=a*180/Bo,n[1]=o*180/Bo,n},dataToPoint:function(e,t){return t=this.projectOnTileWithScale(e,Ro,t),t[0]-=this._origin[0],t[1]-=this._origin[1],t[2]=isNaN(e[2])?0:e[2],isNaN(e[2])||(t[2]=e[2],this.altitudeExtent&&(t[2]-=this.altitudeExtent[0])),t}};function Uo(){Ho.apply(this,arguments)}Uo.prototype=new Ho,Uo.prototype.constructor=Uo,Uo.prototype.type=`mapbox3D`;function Wo(e,t,n){function r(e,t){var n=t.getWidth(),r=t.getHeight(),i=t.getDevicePixelRatio();this.viewGL.setViewport(0,0,n,r,i),this.width=n,this.height=r,this.altitudeScale=e.get(`altitudeScale`),this.boxHeight=e.get(`boxHeight`)}function i(e,t){if(this.model.get(`boxHeight`)!==`auto`){var n=[1/0,-1/0];e.eachSeries(function(e){if(e.coordinateSystem===this){var t=e.getData(),r=e.coordDimToDataDim(`alt`)[0];if(r){var i=t.getDataExtent(r,!0);n[0]=Math.min(n[0],i[0]),n[1]=Math.max(n[1],i[1])}}},this),n&&isFinite(n[1]-n[0])&&(this.altitudeExtent=n)}}return{dimensions:t.prototype.dimensions,create:function(a,o){var s=[];return a.eachComponent(e,function(e){var n=e.__viewGL;n||(n=e.__viewGL=new Q,n.setRootNode(new Y.Node));var a=new t;a.viewGL=e.__viewGL,a.resize=r,a.resize(e,o),s.push(a),e.coordinateSystem=a,a.model=e,a.update=i}),a.eachSeries(function(t){if(t.get(`coordinateSystem`)===e){var n=t.getReferringComponents(e).models[0];if(n||=a.getComponent(e),!n)throw Error(e+` "`+G.firstNotNull(t.get(e+`Index`),t.get(e+`Id`),0)+`" not found`);t.coordinateSystem=n.coordinateSystem}}),n&&n(s,a,o),s}}}var Go=Wo(`mapbox3D`,Uo,function(e){e.forEach(function(e){e.setCameraOption(e.model.getMapboxCameraOption())})});function Ko(e){e.registerComponentModel(Mo),e.registerComponentView(Io),e.registerCoordinateSystem(`mapbox3D`,Go),e.registerAction({type:`mapbox3DChangeCamera`,event:`mapbox3dcamerachanged`,update:`mapbox3D:updateCamera`},function(e,t){t.eachComponent({mainType:`mapbox3D`,query:e},function(t){t.setMapboxCameraOption(e)})})}P(Ko);var qo=[`zoom`,`center`,`pitch`,`bearing`],Jo=D.extend({type:`maptalks3D`,layoutMode:`box`,coordinateSystem:null,defaultOption:{zlevel:-10,urlTemplate:`http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png`,attribution:`&copy; <a href="http://osm.org">OpenStreetMap</a> contributors, &copy; <a href="https://carto.com/">CARTO</a>`,center:[0,0],zoom:0,pitch:0,bearing:0,light:{main:{alpha:20,beta:30}},altitudeScale:1,boxHeight:`auto`},getMaptalksCameraOption:function(){var e=this;return qo.reduce(function(t,n){return t[n]=e.get(n),t},{})},setMaptalksCameraOption:function(e){e!=null&&qo.forEach(function(t){e[t]!=null&&(this.option[t]=e[t])},this)},getMaptalks:function(){return this._maptalks},setMaptalks:function(e){this._maptalks=e}});F(Jo.prototype,nr),F(Jo.prototype,rr);function Yo(e,t,n,r){if(this.id=e,this.zr=t,this.dom=document.createElement(`div`),this.dom.style.cssText=`position:absolute;left:0;right:0;top:0;bottom:0;`,!maptalks)throw Error(`Maptalks library must be included. See https://maptalks.org`);this._maptalks=new maptalks.Map(this.dom,{center:n,zoom:r,doubleClickZoom:!1,fog:!1}),this._initEvents()}Yo.prototype.setUnpainted=function(){},Yo.prototype.resize=function(){this._maptalks.checkSize()},Yo.prototype.getMaptalks=function(){return this._maptalks},Yo.prototype.clear=function(){},Yo.prototype.refresh=function(){this._maptalks.checkSize()};var Xo=[`mousedown`,`mouseup`,`click`,`dblclick`,`mousemove`,`mousewheel`,`DOMMouseScroll`,`touchstart`,`touchend`,`touchmove`,`touchcancel`];Yo.prototype._initEvents=function(){var e=this.dom;this._handlers=this._handlers||{contextmenu:function(e){return e.preventDefault(),!1}},Xo.forEach(function(t){this._handlers[t]=function(n){var r={};for(var i in n)r[i]=n[i];r.bubbles=!1;var a=new n.constructor(n.type,r);t===`mousewheel`||t===`DOMMouseScroll`?e.dispatchEvent(a):e.firstElementChild.dispatchEvent(a)},this.zr.dom.addEventListener(t,this._handlers[t])},this),this.zr.dom.addEventListener(`contextmenu`,this._handlers.contextmenu)},Yo.prototype.dispose=function(){Xo.forEach(function(e){this.zr.dom.removeEventListener(e,this._handlers[e])},this),this._maptalks.remove()},Y.Shader.import(Fo);var Zo=ue.extend({type:`maptalks3D`,__ecgl__:!0,init:function(e,t){this._groundMesh=new Y.Mesh({geometry:new Y.PlaneGeometry,material:new Y.Material({shader:new Y.Shader({vertex:Y.Shader.source(`ecgl.displayShadow.vertex`),fragment:Y.Shader.source(`ecgl.displayShadow.fragment`)}),depthMask:!1}),renderOrder:-100,culling:!1,castShadow:!1,$ignorePicking:!0,renderNormal:!0})},_initMaptalksLayer:function(e,t){var n=t.getZr();this._zrLayer=new Yo(`maptalks3D`,n,e.get(`center`),e.get(`zoom`)),n.painter.insertLayer(-1e3,this._zrLayer),this._lightRoot=new Y.Node,this._sceneHelper=new gr(this._lightRoot),this._sceneHelper.initLight(this._lightRoot);var r=this._zrLayer.getMaptalks(),i=this._dispatchInteractAction.bind(this,t,r);[`zoomend`,`zooming`,`zoomstart`,`dragrotating`,`pitch`,`pitchend`,`movestart`,`moving`,`moveend`,`resize`,`touchstart`,`touchmove`,`touchend`,`animating`].forEach(function(e){r.on(e,i)})},render:function(e,t,n){this._zrLayer||this._initMaptalksLayer(e,n);var r=this._zrLayer.getMaptalks(),i=e.get(`urlTemplate`),a=r.getBaseLayer();i!==this._oldUrlTemplate&&(a?a.setOptions({urlTemplate:i,attribution:e.get(`attribution`)}):(a=new maptalks.TileLayer(`maptalks-echarts-gl-baselayer`,{urlTemplate:i,subdomains:[`a`,`b`,`c`],attribution:e.get(`attribution`)}),r.setBaseLayer(a))),this._oldUrlTemplate=i,r.setCenter(e.get(`center`)),r.setZoom(e.get(`zoom`),{animation:!1}),r.setPitch(e.get(`pitch`)),r.setBearing(e.get(`bearing`)),e.setMaptalks(r);var o=e.coordinateSystem;o.viewGL.scene.add(this._lightRoot),o.viewGL.add(this._groundMesh),this._updateGroundMesh(),this._sceneHelper.setScene(o.viewGL.scene),this._sceneHelper.updateLight(e),o.viewGL.setPostEffect(e.getModel(`postEffect`),n),o.viewGL.setTemporalSuperSampling(e.getModel(`temporalSuperSampling`)),this._maptalks3DModel=e},afterRender:function(e,t,n,r){var i=r.renderer;this._sceneHelper.updateAmbientCubemap(i,e,n),this._sceneHelper.updateSkybox(i,e,n),e.coordinateSystem.viewGL.scene.traverse(function(e){e.material&&(e.material.define(`fragment`,`NORMAL_UP_AXIS`,2),e.material.define(`fragment`,`NORMAL_FRONT_AXIS`,1))})},updateCamera:function(e,t,n,r){e.coordinateSystem.setCameraOption(r),this._updateGroundMesh(),n.getZr().refresh()},_dispatchInteractAction:function(e,t,n){e.dispatchAction({type:`maptalks3DChangeCamera`,pitch:t.getPitch(),zoom:$o(t.getResolution())+1,center:t.getCenter().toArray(),bearing:t.getBearing(),maptalks3DId:this._maptalks3DModel&&this._maptalks3DModel.id})},_updateGroundMesh:function(){if(this._maptalks3DModel){var e=this._maptalks3DModel.coordinateSystem,t=e.dataToPoint(e.center);this._groundMesh.position.set(t[0],t[1],-.001);var n=new Y.Plane(new Y.Vector3(0,0,1),0),r=e.viewGL.camera.castRay(new Y.Vector2(-1,-1)),i=e.viewGL.camera.castRay(new Y.Vector2(1,1)),a=r.intersectPlane(n),o=i.intersectPlane(n),s=a.dist(o)/e.viewGL.rootNode.scale.x;this._groundMesh.scale.set(s,s,1)}},dispose:function(e,t){this._zrLayer&&this._zrLayer.dispose(),t.getZr().painter.delLayer(-1e3)}}),Qo=2*6378137*Math.PI/(256*2**20);function $o(e){return 19-Math.log(e/Qo)/Math.LN2}function es(){Ho.apply(this,arguments),this.maxPitch=85,this.zoomOffset=1}es.prototype=new Ho,es.prototype.constructor=es,es.prototype.type=`maptalks3D`;var ts=Wo(`maptalks3D`,es,function(e){e.forEach(function(e){e.setCameraOption(e.model.getMaptalksCameraOption())})});function ns(e){e.registerComponentModel(Jo),e.registerComponentView(Zo),e.registerCoordinateSystem(`maptalks3D`,ts),e.registerAction({type:`maptalks3DChangeCamera`,event:`maptalks3dcamerachanged`,update:`maptalks3D:updateCamera`},function(e,t){t.eachComponent({mainType:`maptalks3D`,query:e},function(t){t.setMaptalksCameraOption(e)})})}P(ns);var rs=ur.vec3,is=M.isDimensionStacked;function as(e){var t=e[0],n=e[1];return!(t>0&&n>0||t<0&&n<0)}function os(e,t){var n=e.getData(),r=e.get(`barSize`);if(r==null){var i=t.size,a,o,s=t.getAxis(`x`),c=t.getAxis(`y`);a=s.type===`category`?s.getBandWidth()*.7:Math.round(i[0]/Math.sqrt(n.count()))*.6,o=c.type===`category`?c.getBandWidth()*.7:Math.round(i[1]/Math.sqrt(n.count()))*.6,r=[a,o]}else we(r)||(r=[r,r]);var l=t.getAxis(`z`).scale.getExtent(),u=as(l),d=[`x`,`y`,`z`].map(function(t){return e.coordDimToDataDim(t)[0]}),f=is(n,d[2]),p=f?n.getCalculationInfo(`stackResultDimension`):d[2];n.each(d,function(e,i,a,o){var s=n.get(p,o),c=f?s-a:u?0:l[0],d=t.dataToPoint([e,i,c]),m=t.dataToPoint([e,i,s]),h=rs.dist(d,m),g=[0,m[1]<d[1]?-1:1,0];Math.abs(h)===0&&(h=.1);var _=[r[0],h,r[1]];n.setItemLayout(o,[d,g,_])}),n.setLayout(`orient`,[1,0,0])}function ss(e,t,n){for(var r=e.getDataExtent(t),i=e.getDataExtent(n),a=r[1]-r[0]||r[0],o=i[1]-i[0]||i[0],s=50,c=new Uint8Array(s*s),l=0;l<e.count();l++){var u=e.get(t,l),d=e.get(n,l),f=Math.floor((u-r[0])/a*(s-1)),p=Math.floor((d-i[0])/o*(s-1))*s+f;c[p]=c[p]||1}for(var m=0,l=0;l<c.length;l++)c[l]&&m++;return m/c.length}var cs=ur.vec3,ls=M.isDimensionStacked;function us(e,t){var n=e.getData(),r=e.get(`minHeight`)||0,i=e.get(`barSize`),a=[`lng`,`lat`,`alt`].map(function(t){return e.coordDimToDataDim(t)[0]});if(i==null){var o=t.radius*Math.PI,s=ss(n,a[0],a[1]);i=[o/Math.sqrt(n.count()/s),o/Math.sqrt(n.count()/s)]}else we(i)||(i=[i,i]);var c=ps(n,a);n.each(a,function(e,a,o,s){var l=n.get(c.dimension,s),u=c.isStacked?l-o:t.altitudeAxis.scale.getExtent()[0],d=Math.max(t.altitudeAxis.dataToCoord(o),r),f=t.dataToPoint([e,a,u]),p=t.dataToPoint([e,a,l]),m=cs.sub([],p,f);cs.normalize(m,m);var h=[i[0],d,i[1]];n.setItemLayout(s,[f,m,h])}),n.setLayout(`orient`,z.UP.array)}function ds(e,t){var n=e.getData(),r=e.get(`barSize`),i=e.get(`minHeight`)||0,a=[`lng`,`lat`,`alt`].map(function(t){return e.coordDimToDataDim(t)[0]});if(r==null){var o=Math.min(t.size[0],t.size[2]),s=ss(n,a[0],a[1]);r=[o/Math.sqrt(n.count()/s),o/Math.sqrt(n.count()/s)]}else we(r)||(r=[r,r]);var c=[0,1,0],l=ps(n,a);n.each(a,function(e,a,o,s){var u=n.get(l.dimension,s),d=l.isStacked?u-o:t.altitudeAxis.scale.getExtent()[0],f=Math.max(t.altitudeAxis.dataToCoord(o),i),p=t.dataToPoint([e,a,d]),m=[r[0],f,r[1]];n.setItemLayout(s,[p,c,m])}),n.setLayout(`orient`,[1,0,0])}function fs(e,t){var n=e.getData(),r=e.coordDimToDataDim(`lng`)[0],i=e.coordDimToDataDim(`lat`)[0],a=e.coordDimToDataDim(`alt`)[0],o=e.get(`barSize`),s=e.get(`minHeight`)||0;if(o==null){var c=n.getDataExtent(r),l=n.getDataExtent(i),u=t.dataToPoint([c[0],l[0]]),d=t.dataToPoint([c[1],l[1]]),f=Math.min(Math.abs(u[0]-d[0]),Math.abs(u[1]-d[1]))||1,p=ss(n,r,i);o=[f/Math.sqrt(n.count()/p),f/Math.sqrt(n.count()/p)]}else we(o)||(o=[o,o]),o[0]/=t.getScale()/16,o[1]/=t.getScale()/16;var m=[0,0,1],h=[r,i,a],g=ps(n,h);n.each(h,function(e,r,i,a){var c=n.get(g.dimension,a),l=g.isStacked?c-i:0,u=t.dataToPoint([e,r,l]),d=t.dataToPoint([e,r,c]),f=Math.max(d[2]-u[2],s),p=[o[0],f,o[1]];n.setItemLayout(a,[u,m,p])}),n.setLayout(`orient`,[1,0,0])}function ps(e,t){var n=ls(e,t[2]);return{dimension:n?e.getCalculationInfo(`stackResultDimension`):t[2],isStacked:n}}function ms(e){e.registerLayout(function(e,t){e.eachSeriesByType(`bar3D`,function(e){var t=e.coordinateSystem,n=t&&t.type;n===`globe`?us(e,t):n===`cartesian3D`?os(e,t):n===`geo3D`?ds(e,t):(n===`mapbox3D`||n===`maptalks3D`)&&fs(e,t)})})}var hs={};hs.getFormattedLabel=function(e,t,r,i,a){r||=`normal`;var o=e.getData(i).getItemModel(t),s=e.getDataParams(t,i);a!=null&&s.value instanceof Array&&(s.value=s.value[a]);var c=o.get(r===`normal`?[`label`,`formatter`]:[`emphasis`,`label`,`formatter`]);c??=o.get([`label`,`formatter`]);var l;return typeof c==`function`?(s.status=r,l=c(s)):typeof c==`string`&&(l=n(c,s)),l},hs.normalizeToArray=function(e){return e instanceof Array?e:e==null?[]:[e]};function gs(e,t){var n=[];return ve(e.dimensions,function(r){var i=e.getDimensionInfo(r),a=i.otherDims[t];a!=null&&a!==!1&&(n[a]=i.name)}),n}function _s(e,t,n){function r(e){var r=!0,a=[],o=gs(i,`tooltip`);o.length?ve(o,function(e){s(i.get(e,t),e)}):ve(e,s);function s(e,t){var o=i.getDimensionInfo(t);if(!(!o||o.otherDims.tooltip===!1)){var s=o.type,c=(r?`- `+(o.tooltipName||o.name)+`: `:``)+(s===`ordinal`?e+``:s===`time`?n?``:h(`yyyy/MM/dd hh:mm:ss`,e):le(e));c&&a.push(E(c))}}return(r?`<br/>`:``)+a.join(r?`<br/>`:`, `)}var i=e.getData(),a=e.getRawValue(t),o=we(a)?r(a):E(le(a)),s=i.getName(t),c=Na(i,t);Se(c)&&c.colorStops&&(c=(c.colorStops[0]||{}).color),c||=`transparent`;var l=_(c),u=e.name;return u===`\0-`&&(u=``),u=u?E(u)+(n?`: `:`<br/>`):``,n?l+u+o:u+l+(s?E(s)+`: `+o:o)}function vs(e,t,n){n||=e.getSource();var r=t||ce(e.get(`coordinateSystem`))||[`x`,`y`,`z`],i=o(n,{dimensionsDefine:n.dimensionsDefine||e.get(`dimensions`),encodeDefine:n.encodeDefine||e.get(`encode`),coordDimensions:r.map(function(t){var n=e.getReferringComponents(t+`Axis3D`).models[0];return{type:n&&n.get(`type`)===`category`?`ordinal`:`float`,name:t}})});e.get(`coordinateSystem`)===`cartesian3D`&&i.forEach(function(t){if(r.indexOf(t.coordDim)>=0){var n=e.getReferringComponents(t.coordDim+`Axis3D`).models[0];n&&n.get(`type`)===`category`&&(t.ordinalMeta=n.getOrdinalMeta())}});var a=M.enableDataStack(e,i,{byIndex:!0,stackedCoordDimension:`z`}),s=new y(i,e);return s.setCalculationInfo(a),s.initData(n),s}var ys=v.extend({type:`series.bar3D`,dependencies:[`globe`],visualStyleAccessPathvisu:`itemStyle`,getInitialData:function(e,t){return vs(this)},getFormattedLabel:function(e,t,n,r){var i=hs.getFormattedLabel(this,e,t,n,r);return i??=this.getData().get(`z`,e),i},formatTooltip:function(e){return _s(this,e)},defaultOption:{coordinateSystem:`cartesian3D`,globeIndex:0,grid3DIndex:0,zlevel:-10,bevelSize:0,bevelSmoothness:2,onGridPlane:`xy`,shading:`color`,minHeight:0,itemStyle:{opacity:1},label:{show:!1,distance:2,textStyle:{fontSize:14,color:`#000`,backgroundColor:`rgba(255,255,255,0.7)`,padding:3,borderRadius:3}},emphasis:{label:{show:!0}},animationDurationUpdate:500}});F(ys.prototype,Ui);var $=ur.vec3,bs=ur.mat3,xs=V.extend(function(){return{attributes:{position:new V.Attribute(`position`,`float`,3,`POSITION`),normal:new V.Attribute(`normal`,`float`,3,`NORMAL`),color:new V.Attribute(`color`,`float`,4,`COLOR`),prevPosition:new V.Attribute(`prevPosition`,`float`,3),prevNormal:new V.Attribute(`prevNormal`,`float`,3)},dynamic:!0,enableNormal:!1,bevelSize:1,bevelSegments:0,_dataIndices:null,_vertexOffset:0,_triangleOffset:0}},{resetOffset:function(){this._vertexOffset=0,this._triangleOffset=0},setBarCount:function(e){var t=this.enableNormal,n=this.getBarVertexCount()*e,r=this.getBarTriangleCount()*e;this.vertexCount!==n&&(this.attributes.position.init(n),t?this.attributes.normal.init(n):this.attributes.normal.value=null,this.attributes.color.init(n)),this.triangleCount!==r&&(this.indices=n>65535?new Uint32Array(r*3):new Uint16Array(r*3),this._dataIndices=new Uint32Array(n))},getBarVertexCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarVertexCount(e):this.enableNormal?24:8},getBarTriangleCount:function(){var e=this.bevelSize>0?this.bevelSegments:0;return e>0?this._getBevelBarTriangleCount(e):12},_getBevelBarVertexCount:function(e){return(e+1)*4*(e+1)*2},_getBevelBarTriangleCount:function(e){var t=e*4+3,n=e*2+1;return(t+1)*n*2+4},setColor:function(e,t){for(var n=this.getBarVertexCount(),r=n*e,i=n*(e+1),a=r;a<i;a++)this.attributes.color.set(a,t);this.dirtyAttribute(`color`)},getDataIndexOfVertex:function(e){return this._dataIndices?this._dataIndices[e]:null},addBar:function(){for(var e=$.create,t=$.scaleAndAdd,n=e(),r=e(),i=e(),a=e(),o=e(),s=e(),c=e(),l=[],u=[],d=0;d<8;d++)l[d]=e();for(var f=[[0,1,5,4],[2,3,7,6],[4,5,6,7],[3,2,1,0],[0,4,7,3],[1,2,6,5]],p=[0,1,2,0,2,3],m=[],d=0;d<f.length;d++)for(var h=f[d],g=0;g<2;g++){for(var _=[],v=0;v<3;v++)_.push(h[p[g*3+v]]);m.push(_)}return function(e,d,h,g,_,v){var y=this._vertexOffset;if(this.bevelSize>0&&this.bevelSegments>0)this._addBevelBar(e,d,h,g,this.bevelSize,this.bevelSegments,_);else{$.copy(i,d),$.normalize(i,i),$.cross(a,h,i),$.normalize(a,a),$.cross(r,i,a),$.normalize(a,a),$.negate(o,r),$.negate(s,i),$.negate(c,a),t(l[0],e,r,g[0]/2),t(l[0],l[0],a,g[2]/2),t(l[1],e,r,g[0]/2),t(l[1],l[1],c,g[2]/2),t(l[2],e,o,g[0]/2),t(l[2],l[2],c,g[2]/2),t(l[3],e,o,g[0]/2),t(l[3],l[3],a,g[2]/2),t(n,e,i,g[1]),t(l[4],n,r,g[0]/2),t(l[4],l[4],a,g[2]/2),t(l[5],n,r,g[0]/2),t(l[5],l[5],c,g[2]/2),t(l[6],n,o,g[0]/2),t(l[6],l[6],c,g[2]/2),t(l[7],n,o,g[0]/2),t(l[7],l[7],a,g[2]/2);var b=this.attributes;if(this.enableNormal){u[0]=r,u[1]=o,u[2]=i,u[3]=s,u[4]=a,u[5]=c;for(var x=this._vertexOffset,S=0;S<f.length;S++){for(var C=this._triangleOffset*3,w=0;w<6;w++)this.indices[C++]=x+p[w];x+=4,this._triangleOffset+=2}for(var S=0;S<f.length;S++)for(var T=u[S],w=0;w<4;w++){var E=f[S][w];b.position.set(this._vertexOffset,l[E]),b.normal.set(this._vertexOffset,T),b.color.set(this._vertexOffset++,_)}}else{for(var S=0;S<m.length;S++){for(var C=this._triangleOffset*3,w=0;w<3;w++)this.indices[C+w]=m[S][w]+this._vertexOffset;this._triangleOffset++}for(var S=0;S<l.length;S++)b.position.set(this._vertexOffset,l[S]),b.color.set(this._vertexOffset++,_)}}for(var D=this._vertexOffset,S=y;S<D;S++)this._dataIndices[S]=v}}(),_addBevelBar:function(){var e=$.create(),t=$.create(),n=$.create(),r=bs.create(),i=[],a=[1,-1,-1,1],o=[1,1,-1,-1],s=[2,0];return function(c,l,u,d,f,p,m){$.copy(t,l),$.normalize(t,t),$.cross(n,u,t),$.normalize(n,n),$.cross(e,t,n),$.normalize(n,n),r[0]=e[0],r[1]=e[1],r[2]=e[2],r[3]=t[0],r[4]=t[1],r[5]=t[2],r[6]=n[0],r[7]=n[1],r[8]=n[2],f=Math.min(d[0],d[2])/2*f;for(var h=0;h<3;h++)i[h]=Math.max(d[h]-f*2,0);for(var g=(d[0]-i[0])/2,_=(d[1]-i[1])/2,v=(d[2]-i[2])/2,y=[],b=[],x=this._vertexOffset,S=[],h=0;h<2;h++){S[h]=S[h]=[];for(var C=0;C<=p;C++)for(var w=0;w<4;w++){(C===0&&h===0||h===1&&C===p)&&S[h].push(x);for(var T=0;T<=p;T++){var E=T/p*Math.PI/2+Math.PI/2*w,D=C/p*Math.PI/2+Math.PI/2*h;b[0]=g*Math.cos(E)*Math.sin(D),b[1]=_*Math.cos(D),b[2]=v*Math.sin(E)*Math.sin(D),y[0]=b[0]+a[w]*i[0]/2,y[1]=b[1]+_+s[h]*i[1]/2,y[2]=b[2]+o[w]*i[2]/2,Math.abs(g-_)<1e-6&&Math.abs(_-v)<1e-6||(b[0]/=g*g,b[1]/=_*_,b[2]/=v*v),$.normalize(b,b),$.transformMat3(y,y,r),$.transformMat3(b,b,r),$.add(y,y,c),this.attributes.position.set(x,y),this.enableNormal&&this.attributes.normal.set(x,b),this.attributes.color.set(x,m),x++}}}for(var O=p*4+3,k=p*2+1,A=O+1,w=0;w<k;w++)for(var h=0;h<=O;h++){var j=w*A+h+this._vertexOffset,ee=w*A+(h+1)%A+this._vertexOffset,M=(w+1)*A+(h+1)%A+this._vertexOffset,te=(w+1)*A+h+this._vertexOffset;this.setTriangleIndices(this._triangleOffset++,[M,j,ee]),this.setTriangleIndices(this._triangleOffset++,[M,te,j])}this.setTriangleIndices(this._triangleOffset++,[S[0][0],S[0][2],S[0][1]]),this.setTriangleIndices(this._triangleOffset++,[S[0][0],S[0][3],S[0][2]]),this.setTriangleIndices(this._triangleOffset++,[S[1][0],S[1][1],S[1][2]]),this.setTriangleIndices(this._triangleOffset++,[S[1][0],S[1][2],S[1][3]]),this._vertexOffset=x}}()});De(xs.prototype,lr),De(xs.prototype,Aa);var Ss=ur.vec3,Cs=l.extend({type:`bar3D`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this._api=t,this._labelsBuilder=new La(256,256,t);var n=this;this._labelsBuilder.getLabelPosition=function(e,t,r){if(n._data){var i=n._data.getItemLayout(e),a=i[0],o=i[1],s=i[2][1];return Ss.scaleAndAdd([],a,o,r+s)}else return[0,0]},this._labelsBuilder.getMesh().renderOrder=100},render:function(e,t,n){var r=this._prevBarMesh;this._prevBarMesh=this._barMesh,this._barMesh=r,this._barMesh||=new Y.Mesh({geometry:new xs,shadowDepthMaterial:new Y.Material({shader:new Y.Shader(Y.Shader.source(`ecgl.sm.depth.vertex`),Y.Shader.source(`ecgl.sm.depth.fragment`))}),culling:e.coordinateSystem.type===`cartesian3D`,renderOrder:10,renderNormal:!0}),this.groupGL.remove(this._prevBarMesh),this.groupGL.add(this._barMesh),this.groupGL.add(this._labelsBuilder.getMesh());var i=e.coordinateSystem;if(this._doRender(e,n),i&&i.viewGL){i.viewGL.add(this.groupGL);var a=i.viewGL.isLinearSpace()?`define`:`undefine`;this._barMesh.material[a](`fragment`,`SRGB_DECODE`)}this._data=e.getData(),this._labelsBuilder.updateData(this._data),this._labelsBuilder.updateLabels(),this._updateAnimation(e)},_updateAnimation:function(e){Y.updateVertexAnimation([[`prevPosition`,`position`],[`prevNormal`,`normal`]],this._prevBarMesh,this._barMesh,e)},_doRender:function(e,t){var n=e.getData(),r=e.get(`shading`),i=r!==`color`,a=this,o=this._barMesh,s=`ecgl.`+r;(!o.material||o.material.shader.name!==s)&&(o.material=Y.createMaterial(s,[`VERTEX_COLOR`])),Y.setMaterialFromModel(r,o.material,e,t),o.geometry.enableNormal=i,o.geometry.resetOffset();var c=e.get(`bevelSize`),l=e.get(`bevelSmoothness`);o.geometry.bevelSegments=l,o.geometry.bevelSize=c;var u=[],d=new Float32Array(n.count()*4),f=0,p=0,m=!1;n.each(function(e){if(n.hasValue(e)){var t=Na(n,e),r=Pa(n,e);r??=1,Y.parseColor(t,u),u[3]*=r,d[f++]=u[0],d[f++]=u[1],d[f++]=u[2],d[f++]=u[3],u[3]>0&&(p++,u[3]<.99&&(m=!0))}}),o.geometry.setBarCount(p);var h=n.getLayout(`orient`),g=this._barIndexOfData=new Int32Array(n.count()),p=0;n.each(function(e){if(!n.hasValue(e)){g[e]=-1;return}var t=n.getItemLayout(e),r=t[0],i=t[1],o=t[2],s=e*4;u[0]=d[s++],u[1]=d[s++],u[2]=d[s++],u[3]=d[s++],u[3]>0&&(a._barMesh.geometry.addBar(r,i,h,o,u,e),g[e]=p++)}),o.geometry.dirty(),o.geometry.updateBoundingBox();var _=o.material;_.transparent=m,_.depthMask=!m,o.geometry.sortTriangles=m,this._initHandler(e,t)},_initHandler:function(e,t){var n=e.getData(),r=this._barMesh,i=e.coordinateSystem.type===`cartesian3D`;r.seriesIndex=e.seriesIndex;var a=-1;r.off(`mousemove`),r.off(`mouseout`),r.on(`mousemove`,function(e){var o=r.geometry.getDataIndexOfVertex(e.triangle[0]);o!==a&&(this._downplay(a),this._highlight(o),this._labelsBuilder.updateLabels([o]),i&&t.dispatchAction({type:`grid3DShowAxisPointer`,value:[n.get(`x`,o),n.get(`y`,o),n.get(`z`,o,!0)]})),a=o,r.dataIndex=o},this),r.on(`mouseout`,function(e){this._downplay(a),this._labelsBuilder.updateLabels(),a=-1,r.dataIndex=-1,i&&t.dispatchAction({type:`grid3DHideAxisPointer`})},this)},_highlight:function(e){var t=this._data;if(t){var n=this._barIndexOfData[e];if(!(n<0)){var r=t.getItemModel(e).getModel(`emphasis.itemStyle`),i=r.get(`color`),a=r.get(`opacity`);i??=je(Na(t,e),-.4),a??=Pa(t,e);var o=Y.parseColor(i);o[3]*=a,this._barMesh.geometry.setColor(n,o),this._api.getZr().refresh()}}},_downplay:function(e){var t=this._data;if(t){var n=this._barIndexOfData[e];if(!(n<0)){var r=Na(t,e),i=Pa(t,e),a=Y.parseColor(r);a[3]*=i,this._barMesh.geometry.setColor(n,a),this._api.getZr().refresh()}}},highlight:function(e,t,n,r){this._toggleStatus(`highlight`,e,t,n,r)},downplay:function(e,t,n,r){this._toggleStatus(`downplay`,e,t,n,r)},_toggleStatus:function(e,t,n,r,i){var a=t.getData(),o=G.queryDataIndex(a,i),s=this;o==null?a.each(function(t){e===`highlight`?s._highlight(t):s._downplay(t)}):ve(hs.normalizeToArray(o),function(t){e===`highlight`?this._highlight(t):this._downplay(t)},this)},remove:function(){this.groupGL.removeAll()},dispose:function(){this._labelsBuilder.dispose(),this.groupGL.removeAll()}});function ws(e){e.registerChartView(Cs),e.registerSeriesModel(ys),ms(e),e.registerProcessor(function(e,t){e.eachSeriesByType(`bar3d`,function(e){var t=e.getData();t.filterSelf(function(e){return t.hasValue(e)})})})}P(ws);var Ts=v.extend({type:`series.line3D`,dependencies:[`grid3D`],visualStyleAccessPath:`lineStyle`,visualDrawType:`stroke`,getInitialData:function(e,t){return vs(this)},formatTooltip:function(e){return _s(this,e)},defaultOption:{coordinateSystem:`cartesian3D`,zlevel:-10,grid3DIndex:0,lineStyle:{width:2},animationDurationUpdate:500}}),Es=ur.vec3;Y.Shader.import(Ar);var Ds=l.extend({type:`line3D`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this._api=t},render:function(e,t,n){var r=this._prevLine3DMesh;this._prevLine3DMesh=this._line3DMesh,this._line3DMesh=r,this._line3DMesh||(this._line3DMesh=new Y.Mesh({geometry:new pr({useNativeLine:!1,sortTriangles:!0}),material:new Y.Material({shader:Y.createShader(`ecgl.meshLines3D`)}),renderOrder:10}),this._line3DMesh.geometry.pick=this._pick.bind(this)),this.groupGL.remove(this._prevLine3DMesh),this.groupGL.add(this._line3DMesh);var i=e.coordinateSystem;if(i&&i.viewGL){i.viewGL.add(this.groupGL);var a=i.viewGL.isLinearSpace()?`define`:`undefine`;this._line3DMesh.material[a](`fragment`,`SRGB_DECODE`)}this._doRender(e,n),this._data=e.getData(),this._camera=i.viewGL.camera,this.updateCamera(),this._updateAnimation(e)},updateCamera:function(){this._updateNDCPosition()},_doRender:function(e,t){var n=e.getData(),r=this._line3DMesh;r.geometry.resetOffset();var i=n.getLayout(`points`),a=[],o=new Float32Array(i.length/3*4),s=0,c=!1;n.each(function(e){var t=Na(n,e),r=Pa(n,e);r??=1,Y.parseColor(t,a),a[3]*=r,o[s++]=a[0],o[s++]=a[1],o[s++]=a[2],o[s++]=a[3],a[3]<.99&&(c=!0)}),r.geometry.setVertexCount(r.geometry.getPolylineVertexCount(i)),r.geometry.setTriangleCount(r.geometry.getPolylineTriangleCount(i)),r.geometry.addPolyline(i,o,G.firstNotNull(e.get(`lineStyle.width`),1)),r.geometry.dirty(),r.geometry.updateBoundingBox();var l=r.material;l.transparent=c,l.depthMask=!c;var u=e.getModel(`debug.wireframe`);u.get(`show`)?(r.geometry.createAttribute(`barycentric`,`float`,3),r.geometry.generateBarycentric(),r.material.set(`both`,`WIREFRAME_TRIANGLE`),r.material.set(`wireframeLineColor`,Y.parseColor(u.get(`lineStyle.color`)||`rgba(0,0,0,0.5)`)),r.material.set(`wireframeLineWidth`,G.firstNotNull(u.get(`lineStyle.width`),1))):r.material.set(`both`,`WIREFRAME_TRIANGLE`),this._points=i,this._initHandler(e,t)},_updateAnimation:function(e){Y.updateVertexAnimation([[`prevPosition`,`position`],[`prevPositionPrev`,`positionPrev`],[`prevPositionNext`,`positionNext`]],this._prevLine3DMesh,this._line3DMesh,e)},_initHandler:function(e,t){var n=e.getData(),r=e.coordinateSystem,i=this._line3DMesh,a=-1;i.seriesIndex=e.seriesIndex,i.off(`mousemove`),i.off(`mouseout`),i.on(`mousemove`,function(e){var o=r.pointToData(e.point.array),s=n.indicesOfNearest(`x`,o[0])[0];s!==a&&(t.dispatchAction({type:`grid3DShowAxisPointer`,value:[n.get(`x`,s),n.get(`y`,s),n.get(`z`,s)]}),i.dataIndex=s),a=s},this),i.on(`mouseout`,function(e){a=-1,i.dataIndex=-1,t.dispatchAction({type:`grid3DHideAxisPointer`})},this)},_updateNDCPosition:function(){var e=new B,t=this._camera;B.multiply(e,t.projectionMatrix,t.viewMatrix);var n=this._positionNDC,r=this._points,i=r.length/3;(!n||n.length/2!==i)&&(n=this._positionNDC=new Float32Array(i*2));for(var a=[],o=0;o<i;o++){var s=o*3,c=o*2;a[0]=r[s],a[1]=r[s+1],a[2]=r[s+2],a[3]=1,Es.transformMat4(a,a,e.array),n[c]=a[0]/a[3],n[c+1]=a[1]/a[3]}},_pick:function(e,t,n,r,i,a){var o=this._positionNDC,s=this._data.hostModel.get(`lineStyle.width`),c=-1,l=n.viewport.width,u=n.viewport.height,d=l*.5,f=u*.5;e=(e+1)*d,t=(t+1)*f;for(var p=1;p<o.length/2;p++){var m=(o[(p-1)*2]+1)*d,h=(o[(p-1)*2+1]+1)*f,g=(o[p*2]+1)*d,_=(o[p*2+1]+1)*f;ie(m,h,g,_,s,e,t)&&(c=(m-e)*(m-e)+(h-t)*(h-t)<(g-e)*(g-e)+(_-t)*(_-t)?p-1:p)}if(c>=0){var v=c*3,y=new z(this._points[v],this._points[v+1],this._points[v+2]);a.push({dataIndex:c,point:y,pointWorld:y.clone(),target:this._line3DMesh,distance:this._camera.getWorldPosition().dist(y)})}},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function Os(e){e.registerChartView(Ds),e.registerSeriesModel(Ts),e.registerLayout(function(e,t){e.eachSeriesByType(`line3D`,function(e){var t=e.getData(),n=e.coordinateSystem;if(n){if(n.type!==`cartesian3D`)return;var r=new Float32Array(t.count()*3),i=[],a=[],o=n.dimensions.map(function(t){return e.coordDimToDataDim(t)[0]});n&&t.each(o,function(e,t,o,s){i[0]=e,i[1]=t,i[2]=o,n.dataToPoint(i,a),r[s*3]=a[0],r[s*3+1]=a[1],r[s*3+2]=a[2]}),t.setLayout(`points`,r)}})})}P(Os);var ks=v.extend({type:`series.scatter3D`,dependencies:[`globe`,`grid3D`,`geo3D`],visualStyleAccessPath:`itemStyle`,hasSymbolVisual:!0,getInitialData:function(e,t){return vs(this)},getFormattedLabel:function(e,t,n,r){var i=hs.getFormattedLabel(this,e,t,n,r);if(i==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];i=a.get(o,e)}return i},formatTooltip:function(e){return _s(this,e)},defaultOption:{coordinateSystem:`cartesian3D`,zlevel:-10,progressive:1e5,progressiveThreshold:1e5,grid3DIndex:0,globeIndex:0,symbol:`circle`,symbolSize:10,blendMode:`source-over`,label:{show:!1,position:`right`,distance:5,textStyle:{fontSize:14,color:`#000`,backgroundColor:`rgba(255,255,255,0.7)`,padding:3,borderRadius:3}},itemStyle:{opacity:.8},emphasis:{label:{show:!0}},animationDurationUpdate:500}});function As(e,t,n){var t=t||document.createElement(`canvas`);t.width=e,t.height=e;var r=t.getContext(`2d`);return n&&n(r),t}function js(e,t,n,r){we(t)||(t=[t,t]);var i=Ns.getMarginByStyle(n,r),a=t[0]+i.left+i.right,o=t[1]+i.top+i.bottom,s=g(e,0,0,t[0],t[1]),c=Math.max(a,o);s.x=i.left,s.y=i.top,a>o?s.y+=(c-o)/2:s.x+=(c-a)/2;var l=s.getBoundingRect();return s.x-=l.x,s.y-=l.y,s.setStyle(n),s.update(),s.__size=c,s}function Ms(e,t,n){var r=t.width,i=t.height,a=e.canvas.width,o=e.canvas.height,s=r/a,c=i/o;function l(e){return e<128?1:-1}function u(e,a){var o=1/0;e=Math.floor(e*s),a=Math.floor(a*c);for(var u=a*r+e,d=t.data[u*4],f=l(d),p=Math.max(a-n,0);p<Math.min(a+n,i);p++)for(var m=Math.max(e-n,0);m<Math.min(e+n,r);m++){var u=p*r+m,h=t.data[u*4],g=l(h),_=m-e,v=p-a;if(f!==g){var y=_*_+v*v;y<o&&(o=y)}}return f*Math.sqrt(o)}for(var d=e.createImageData(a,o),f=0;f<o;f++)for(var p=0;p<a;p++){var m=u(p,f)/n*.5+.5,h=(f*a+p)*4;d.data[h++]=(1-m)*255,d.data[h++]=(1-m)*255,d.data[h++]=(1-m)*255,d.data[h++]=255}return d}var Ns={getMarginByStyle:function(e){var t=e.minMargin||0,n=0;e.stroke&&e.stroke!==`none`&&(n=e.lineWidth==null?1:e.lineWidth);var r=e.shadowBlur||0,i=e.shadowOffsetX||0,a=e.shadowOffsetY||0,o={};return o.left=Math.max(n/2,-i+r,t),o.right=Math.max(n/2,i+r,t),o.top=Math.max(n/2,-a+r,t),o.bottom=Math.max(n/2,a+r,t),o},createSymbolSprite:function(e,t,n,r){var i=js(e,t,n),a=Ns.getMarginByStyle(n);return{image:As(i.__size,r,function(e){m(e,i)}),margin:a}},createSDFFromCanvas:function(e,t,n,r){return As(t,r,function(t){var r=e.getContext(`2d`).getImageData(0,0,e.width,e.height);t.putImageData(Ms(t,r,n),0,0)})},createSimpleSprite:function(e,t){return As(e,t,function(t){var n=e/2;t.beginPath(),t.arc(n,n,60,0,Math.PI*2,!1),t.closePath();var r=t.createRadialGradient(n,n,0,n,n,n);r.addColorStop(0,`rgba(255, 255, 255, 1)`),r.addColorStop(.5,`rgba(255, 255, 255, 0.5)`),r.addColorStop(1,`rgba(255, 255, 255, 0)`),t.fillStyle=r,t.fill()})}},Ps=ur.vec3,Fs={needsSortVertices:function(){return this.sortVertices},needsSortVerticesProgressively:function(){return this.needsSortVertices()&&this.vertexCount>=2e4},doSortVertices:function(e,t){var n=this.indices,r=Ps.create();if(!n){n=this.indices=this.vertexCount>65535?new Uint32Array(this.vertexCount):new Uint16Array(this.vertexCount);for(var i=0;i<n.length;i++)n[i]=i}if(t===0){var a=this.attributes.position,e=e.array,o=0;(!this._zList||this._zList.length!==this.vertexCount)&&(this._zList=new Float32Array(this.vertexCount));for(var s,i=0;i<this.vertexCount;i++){a.get(i,r);var c=Ps.sqrDist(r,e);isNaN(c)&&(c=1e7,o++),i===0?(s=c,c=0):c-=s,this._zList[i]=c}this._noneCount=o}if(this.vertexCount<2e4)t===0&&this._simpleSort(this._noneCount/this.vertexCount>.05);else for(var i=0;i<3;i++)this._progressiveQuickSort(t*3+i);this.dirtyIndices()},_simpleSort:function(e){var t=this._zList,n=this.indices;function r(e,n){return t[n]-t[e]}e?Array.prototype.sort.call(n,r):Ta.sort(n,r,0,n.length-1)},_progressiveQuickSort:function(e){var t=this._zList,n=this.indices;this._quickSort=this._quickSort||new Ta,this._quickSort.step(n,function(e,n){return t[n]-t[e]},e)}},Is=`@export ecgl.sdfSprite.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform float elapsedTime : 0;

attribute vec3 position : POSITION;

#ifdef VERTEX_SIZE
attribute float size;
#else
uniform float u_Size;
#endif

#ifdef VERTEX_COLOR
attribute vec4 a_FillColor: COLOR;
varying vec4 v_Color;
#endif

#ifdef VERTEX_ANIMATION
attribute vec3 prevPosition;
attribute float prevSize;
uniform float percent : 1.0;
#endif


#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

varying float v_Size;

void main()
{

#ifdef POSITIONTEXTURE_ENABLED
 gl_Position = worldViewProjection * vec4(texture2D(positionTexture, position.xy).xy, -10.0, 1.0);
#else

 #ifdef VERTEX_ANIMATION
 vec3 pos = mix(prevPosition, position, percent);
 #else
 vec3 pos = position;
 #endif
 gl_Position = worldViewProjection * vec4(pos, 1.0);
#endif

#ifdef VERTEX_SIZE
#ifdef VERTEX_ANIMATION
 v_Size = mix(prevSize, size, percent);
#else
 v_Size = size;
#endif
#else
 v_Size = u_Size;
#endif

#ifdef VERTEX_COLOR
 v_Color = a_FillColor;
 #endif

 gl_PointSize = v_Size;
}

@end

@export ecgl.sdfSprite.fragment

uniform vec4 color: [1, 1, 1, 1];
uniform vec4 strokeColor: [1, 1, 1, 1];
uniform float smoothing: 0.07;

uniform float lineWidth: 0.0;

#ifdef VERTEX_COLOR
varying vec4 v_Color;
#endif

varying float v_Size;

uniform sampler2D sprite;

@import clay.util.srgb

void main()
{
 gl_FragColor = color;

 vec4 _strokeColor = strokeColor;

#ifdef VERTEX_COLOR
 gl_FragColor *= v_Color;
 #endif

#ifdef SPRITE_ENABLED
 float d = texture2D(sprite, gl_PointCoord).r;
 gl_FragColor.a *= smoothstep(0.5 - smoothing, 0.5 + smoothing, d);

 if (lineWidth > 0.0) {
 float sLineWidth = lineWidth / 2.0;

 float outlineMaxValue0 = 0.5 + sLineWidth;
 float outlineMaxValue1 = 0.5 + sLineWidth + smoothing;
 float outlineMinValue0 = 0.5 - sLineWidth - smoothing;
 float outlineMinValue1 = 0.5 - sLineWidth;

 if (d <= outlineMaxValue1 && d >= outlineMinValue0) {
 float a = _strokeColor.a;
 if (d <= outlineMinValue1) {
 a = a * smoothstep(outlineMinValue0, outlineMinValue1, d);
 }
 else {
 a = a * smoothstep(outlineMaxValue1, outlineMaxValue0, d);
 }
 gl_FragColor.rgb = mix(gl_FragColor.rgb * gl_FragColor.a, _strokeColor.rgb, a);
 gl_FragColor.a = gl_FragColor.a * (1.0 - a) + a;
 }
 }
#endif

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(gl_FragColor);
#endif
}
@end`,Ls=ur.vec4;Y.Shader.import(Is);var Rs=Y.Mesh.extend(function(){var e=new Y.Geometry({dynamic:!0,attributes:{color:new Y.Geometry.Attribute(`color`,`float`,4,`COLOR`),position:new Y.Geometry.Attribute(`position`,`float`,3,`POSITION`),size:new Y.Geometry.Attribute(`size`,`float`,1),prevPosition:new Y.Geometry.Attribute(`prevPosition`,`float`,3),prevSize:new Y.Geometry.Attribute(`prevSize`,`float`,1)}});Object.assign(e,Fs);var t=new Y.Material({shader:Y.createShader(`ecgl.sdfSprite`),transparent:!0,depthMask:!1});t.enableTexture(`sprite`),t.define(`both`,`VERTEX_COLOR`),t.define(`both`,`VERTEX_SIZE`);var n=new Y.Texture2D({image:document.createElement(`canvas`),flipY:!1});return t.set(`sprite`,n),e.pick=this._pick.bind(this),{geometry:e,material:t,mode:Y.Mesh.POINTS,sizeScale:1}},{_pick:function(e,t,n,r,i,a){var o=this._positionNDC;if(o)for(var s=n.viewport,c=2/s.width,l=2/s.height,u=this.geometry.vertexCount-1;u>=0;u--){var d=this.geometry.indices?this.geometry.indices[u]:u,f=o[d*2],p=o[d*2+1],m=this.geometry.attributes.size.get(d)/this.sizeScale/2;if(e>f-m*c&&e<f+m*c&&t>p-m*l&&t<p+m*l){var h=new Y.Vector3,g=new Y.Vector3;this.geometry.attributes.position.get(d,h.array),Y.Vector3.transformMat4(g,h,this.worldTransform),a.push({vertexIndex:d,point:h,pointWorld:g,target:this,distance:g.distance(r.getWorldPosition())})}}},updateNDCPosition:function(e,t,n){var r=this._positionNDC,i=this.geometry;(!r||r.length/2!==i.vertexCount)&&(r=this._positionNDC=new Float32Array(i.vertexCount*2));for(var a=Ls.create(),o=0;o<i.vertexCount;o++)i.attributes.position.get(o,a),a[3]=1,Ls.transformMat4(a,a,e.array),Ls.scale(a,a,1/a[3]),r[o*2]=a[0],r[o*2+1]=a[1]}}),zs=20,Bs=-10;function Vs(e,t){return e&&t&&e[0]===t[0]&&e[1]===t[1]}function Hs(e,t){this.rootNode=new Y.Node,this.is2D=e,this._labelsBuilder=new La(256,256,t),this._labelsBuilder.getMesh().renderOrder=100,this.rootNode.add(this._labelsBuilder.getMesh()),this._api=t,this._spriteImageCanvas=document.createElement(`canvas`),this._startDataIndex=0,this._endDataIndex=0,this._sizeScale=1}Hs.prototype={constructor:Hs,highlightOnMouseover:!0,update:function(e,t,n,r,i){var a=this._prevMesh;this._prevMesh=this._mesh,this._mesh=a;var o=e.getData();if(r??=0,i??=o.count(),this._startDataIndex=r,this._endDataIndex=i-1,!this._mesh){var s=this._prevMesh&&this._prevMesh.material;this._mesh=new Rs({renderOrder:10,frustumCulling:!1}),s&&(this._mesh.material=s)}var s=this._mesh.material,c=this._mesh.geometry,l=c.attributes;this.rootNode.remove(this._prevMesh),this.rootNode.add(this._mesh),this._setPositionTextureToMesh(this._mesh,this._positionTexture);var u=this._getSymbolInfo(e,r,i),d=n.getDevicePixelRatio(),f=e.getModel(`itemStyle`).getItemStyle(),p=e.get(`large`),m=1;u.maxSize>2?(m=this._updateSymbolSprite(e,f,u,d),s.enableTexture(`sprite`)):s.disableTexture(`sprite`),l.position.init(i-r);var h=[];if(p){s.undefine(`VERTEX_SIZE`),s.undefine(`VERTEX_COLOR`);var g=ja(o),_=Ma(o);Y.parseColor(g,h),h[3]*=_,s.set({color:h,u_Size:u.maxSize*this._sizeScale})}else s.set({color:[1,1,1,1]}),s.define(`VERTEX_SIZE`),s.define(`VERTEX_COLOR`),l.size.init(i-r),l.color.init(i-r),this._originalOpacity=new Float32Array(i-r);for(var v=o.getLayout(`points`),y=l.position.value,b=0;b<i-r;b++){var x=b*3,S=b*2;if(this.is2D?(y[x]=v[S],y[x+1]=v[S+1],y[x+2]=Bs):(y[x]=v[x],y[x+1]=v[x+1],y[x+2]=v[x+2]),!p){var g=Na(o,b),_=Pa(o,b);Y.parseColor(g,h),h[3]*=_,l.color.set(b,h),h[3];var C=o.getItemVisual(b,`symbolSize`);C=C instanceof Array?Math.max(C[0],C[1]):C,isNaN(C)&&(C=0),l.size.value[b]=C*m*this._sizeScale,this._originalOpacity[b]=h[3]}}this._mesh.sizeScale=m,c.updateBoundingBox(),c.dirty(),this._updateMaterial(e,f);var w=e.coordinateSystem;w&&w.viewGL&&s[w.viewGL.isLinearSpace()?`define`:`undefine`](`fragment`,`SRGB_DECODE`),p||this._updateLabelBuilder(e,r,i),this._updateHandler(e,t,n),this._updateAnimation(e),this._api=n},getPointsMesh:function(){return this._mesh},updateLabels:function(e){this._labelsBuilder.updateLabels(e)},hideLabels:function(){this.rootNode.remove(this._labelsBuilder.getMesh())},showLabels:function(){this.rootNode.add(this._labelsBuilder.getMesh())},dispose:function(){this._labelsBuilder.dispose()},_updateSymbolSprite:function(e,t,n,r){n.maxSize=Math.min(n.maxSize*2,200);var i=[];return n.aspect>1?(i[0]=n.maxSize,i[1]=n.maxSize/n.aspect):(i[1]=n.maxSize,i[0]=n.maxSize*n.aspect),i[0]=i[0]||1,i[1]=i[1]||1,(this._symbolType!==n.type||!Vs(this._symbolSize,i)||this._lineWidth!==t.lineWidth)&&(Ns.createSymbolSprite(n.type,i,{fill:`#fff`,lineWidth:t.lineWidth,stroke:`transparent`,shadowColor:`transparent`,minMargin:Math.min(i[0]/2,10)},this._spriteImageCanvas),Ns.createSDFFromCanvas(this._spriteImageCanvas,Math.min(this._spriteImageCanvas.width,32),zs,this._mesh.material.get(`sprite`).image),this._symbolType=n.type,this._symbolSize=i,this._lineWidth=t.lineWidth),this._spriteImageCanvas.width/n.maxSize*r},_updateMaterial:function(e,t){var n=e.get(`blendMode`)===`lighter`?Y.additiveBlend:null,r=this._mesh.material;r.blend=n,r.set(`lineWidth`,t.lineWidth/zs);var i=Y.parseColor(t.stroke);r.set(`strokeColor`,i),r.transparent=!0,r.depthMask=!1,r.depthTest=!this.is2D,r.sortVertices=!this.is2D},_updateLabelBuilder:function(e,t,n){var r=e.getData(),i=this._mesh.geometry,a=i.attributes.position.value,t=this._startDataIndex,o=this._mesh.sizeScale;this._labelsBuilder.updateData(r,t,n),this._labelsBuilder.getLabelPosition=function(e,n,r){var i=(e-t)*3;return[a[i],a[i+1],a[i+2]]},this._labelsBuilder.getLabelDistance=function(e,n,r){return i.attributes.size.get(e-t)/o/2+r},this._labelsBuilder.updateLabels()},_updateAnimation:function(e){Y.updateVertexAnimation([[`prevPosition`,`position`],[`prevSize`,`size`]],this._prevMesh,this._mesh,e)},_updateHandler:function(e,t,n){var r=e.getData(),i=this._mesh,a=this,o=-1,s=e.coordinateSystem&&e.coordinateSystem.type===`cartesian3D`,c;s&&(c=e.coordinateSystem.model),i.seriesIndex=e.seriesIndex,i.off(`mousemove`),i.off(`mouseout`),i.on(`mousemove`,function(t){var l=t.vertexIndex+a._startDataIndex;l!==o&&(this.highlightOnMouseover&&(this.downplay(r,o),this.highlight(r,l),this._labelsBuilder.updateLabels([l])),s&&n.dispatchAction({type:`grid3DShowAxisPointer`,value:[r.get(e.coordDimToDataDim(`x`)[0],l),r.get(e.coordDimToDataDim(`y`)[0],l),r.get(e.coordDimToDataDim(`z`)[0],l)],grid3DIndex:c.componentIndex})),i.dataIndex=l,o=l},this),i.on(`mouseout`,function(e){var t=e.vertexIndex+a._startDataIndex;this.highlightOnMouseover&&(this.downplay(r,t),this._labelsBuilder.updateLabels()),o=-1,i.dataIndex=-1,s&&n.dispatchAction({type:`grid3DHideAxisPointer`,grid3DIndex:c.componentIndex})},this)},updateLayout:function(e,t,n){var r=e.getData();if(this._mesh){var i=this._mesh.geometry.attributes.position.value,a=r.getLayout(`points`);if(this.is2D)for(var o=0;o<a.length/2;o++){var s=o*3,c=o*2;i[s]=a[c],i[s+1]=a[c+1],i[s+2]=Bs}else for(var o=0;o<a.length;o++)i[o]=a[o];this._mesh.geometry.dirty(),n.getZr().refresh()}},updateView:function(e){if(this._mesh){var t=new B;B.mul(t,e.viewMatrix,this._mesh.worldTransform),B.mul(t,e.projectionMatrix,t),this._mesh.updateNDCPosition(t,this.is2D,this._api)}},highlight:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var n=e.getItemModel(t).getModel(`emphasis.itemStyle`),r=n.get(`color`),i=n.get(`opacity`);r??=je(Na(e,t),-.4),i??=Pa(e,t);var a=Y.parseColor(r);a[3]*=i,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,a),this._mesh.geometry.dirtyAttribute(`color`),this._api.getZr().refresh()}},downplay:function(e,t){if(!(t>this._endDataIndex||t<this._startDataIndex)){var n=Na(e,t),r=Pa(e,t),i=Y.parseColor(n);i[3]*=r,this._mesh.geometry.attributes.color.set(t-this._startDataIndex,i),this._mesh.geometry.dirtyAttribute(`color`),this._api.getZr().refresh()}},fadeOutAll:function(e){if(this._originalOpacity){for(var t=this._mesh.geometry,n=0;n<t.vertexCount;n++){var r=this._originalOpacity[n]*e;t.attributes.color.value[n*4+3]=r}t.dirtyAttribute(`color`),this._api.getZr().refresh()}},fadeInAll:function(){this.fadeOutAll(1)},setPositionTexture:function(e){this._mesh&&this._setPositionTextureToMesh(this._mesh,e),this._positionTexture=e},removePositionTexture:function(){this._positionTexture=null,this._mesh&&this._setPositionTextureToMesh(this._mesh,null)},setSizeScale:function(e){if(e!==this._sizeScale){if(this._mesh){var t=this._mesh.material.get(`u_Size`);this._mesh.material.set(`u_Size`,t/this._sizeScale*e);var n=this._mesh.geometry.attributes;if(n.size.value)for(var r=0;r<n.size.value.length;r++)n.size.value[r]=n.size.value[r]/this._sizeScale*e}this._sizeScale=e}},_setPositionTextureToMesh:function(e,t){t&&e.material.set(`positionTexture`,t),e.material[t?`enableTexture`:`disableTexture`](`positionTexture`)},_getSymbolInfo:function(e,t,n){if(e.get(`large`)){var r=G.firstNotNull(e.get(`symbolSize`),1),i,a;return r instanceof Array?(i=Math.max(r[0],r[1]),a=r[0]/r[1]):(i=r,a=1),{maxSize:r,type:e.get(`symbol`),aspect:a}}for(var o=e.getData(),a,s=o.getItemVisual(0,`symbol`)||`circle`,i=0,c=t;c<n;c++){var r=o.getItemVisual(c,`symbolSize`),l=o.getItemVisual(c,`symbol`),u;if(r instanceof Array)u=r[0]/r[1],i=Math.max(Math.max(r[0],r[1]),i);else{if(isNaN(r))continue;u=1,i=Math.max(r,i)}s=l,a=u}return{maxSize:i,type:s,aspect:a}}};var Us=l.extend({type:`scatter3D`,hasSymbolVisual:!0,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this._pointsBuilderList=[],this._currentStep=0},render:function(e,t,n){if(this.groupGL.removeAll(),e.getData().count()){var r=e.coordinateSystem;if(r&&r.viewGL){r.viewGL.add(this.groupGL),this._camera=r.viewGL.camera;var i=this._pointsBuilderList[0];i||=this._pointsBuilderList[0]=new Hs(!1,n),this._pointsBuilderList.length=1,this.groupGL.add(i.rootNode),i.update(e,t,n),i.updateView(r.viewGL.camera)}}},incrementalPrepareRender:function(e,t,n){var r=e.coordinateSystem;r&&r.viewGL&&(r.viewGL.add(this.groupGL),this._camera=r.viewGL.camera),this.groupGL.removeAll(),this._currentStep=0},incrementalRender:function(e,t,n,r){if(!(e.end<=e.start)){var i=this._pointsBuilderList[this._currentStep];i||(i=new Hs(!1,r),this._pointsBuilderList[this._currentStep]=i),this.groupGL.add(i.rootNode),i.update(t,n,r,e.start,e.end),i.updateView(t.coordinateSystem.viewGL.camera),this._currentStep++}},updateCamera:function(){this._pointsBuilderList.forEach(function(e){e.updateView(this._camera)},this)},highlight:function(e,t,n,r){this._toggleStatus(`highlight`,e,t,n,r)},downplay:function(e,t,n,r){this._toggleStatus(`downplay`,e,t,n,r)},_toggleStatus:function(e,t,n,r,i){var a=t.getData(),o=G.queryDataIndex(a,i),s=e===`highlight`;o==null?a.each(function(e){for(var t=0;t<this._pointsBuilderList.length;t++){var n=this._pointsBuilderList[t];s?n.highlight(a,e):n.downplay(a,e)}}):ve(hs.normalizeToArray(o),function(e){for(var t=0;t<this._pointsBuilderList.length;t++){var n=this._pointsBuilderList[t];s?n.highlight(a,e):n.downplay(a,e)}},this)},dispose:function(){this._pointsBuilderList.forEach(function(e){e.dispose()}),this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Ws(e){e.registerChartView(Us),e.registerSeriesModel(ks),e.registerLayout({seriesType:`scatter3D`,reset:function(e){var t=e.coordinateSystem;if(t){var n=t.dimensions;if(n.length<3)return;var r=n.map(function(t){return e.coordDimToDataDim(t)[0]}),i=[],a=[];return{progress:function(e,n){for(var o=new Float32Array((e.end-e.start)*3),s=e.start;s<e.end;s++){var c=(s-e.start)*3;i[0]=n.get(r[0],s),i[1]=n.get(r[1],s),i[2]=n.get(r[2],s),t.dataToPoint(i,a),o[c]=a[0],o[c+1]=a[1],o[c+2]=a[2]}n.setLayout(`points`,o)}}}}})}P(Ws);var Gs=ur.vec3,Ks=ur.vec2,qs=Gs.normalize,Js=Gs.cross,Ys=Gs.sub,Xs=Gs.add,Zs=Gs.create,Qs=Zs(),$s=Zs(),ec=Zs(),tc=Zs(),nc=[],rc=[];function ic(e,t){Ks.copy(nc,e[0]),Ks.copy(rc,e[1]);var n=[],r=n[0]=Zs(),i=n[1]=Zs(),a=n[2]=Zs(),o=n[3]=Zs();t.dataToPoint(nc,r),t.dataToPoint(rc,o),qs(Qs,r),Ys($s,o,r),qs($s,$s),Js(ec,$s,Qs),qs(ec,ec),Js($s,Qs,ec),Xs(i,Qs,$s),qs(i,i),qs(Qs,o),Ys($s,r,o),qs($s,$s),Js(ec,$s,Qs),qs(ec,ec),Js($s,Qs,ec),Xs(a,Qs,$s),qs(a,a),Xs(tc,r,o),qs(tc,tc);var s=Gs.dot(r,tc),c=Gs.dot(tc,i),l=(Math.max(Gs.len(r),Gs.len(o))-s)/c*2;return Gs.scaleAndAdd(i,r,i,l),Gs.scaleAndAdd(a,o,a,l),n}function ac(e,t,n){var r=[],i=r[0]=Gs.create(),a=r[1]=Gs.create(),o=r[2]=Gs.create(),s=r[3]=Gs.create();t.dataToPoint(e[0],i),t.dataToPoint(e[1],s);var c=Gs.dist(i,s);return Gs.lerp(a,i,s,.3),Gs.lerp(o,i,s,.3),Gs.scaleAndAdd(a,a,n,Math.min(c*.1,10)),Gs.scaleAndAdd(o,o,n,Math.min(c*.1,10)),r}function oc(e,t){for(var n=new Float32Array(e.length*3),r=0,i=[],a=0;a<e.length;a++)t.dataToPoint(e[a],i),n[r++]=i[0],n[r++]=i[1],n[r++]=i[2];return n}function sc(e){var t=[];return e.each(function(n){var r=e.getItemModel(n),i=r.option instanceof Array?r.option:r.getShallow(`coords`,!0);t.push(i)}),{coordsList:t}}function cc(e,t){var n=e.getData(),r=e.get(`polyline`);n.setLayout(`lineType`,r?`polyline`:`cubicBezier`);var i=sc(n);n.each(function(e){var a=i.coordsList[e],o=r?oc:ic;n.setItemLayout(e,o(a,t))})}function lc(e,t,n){var r=e.getData(),i=e.get(`polyline`),a=sc(r);r.setLayout(`lineType`,i?`polyline`:`cubicBezier`),r.each(function(e){var o=a.coordsList[e],s=i?oc(o,t):ac(o,t,n);r.setItemLayout(e,s)})}function uc(e,t){e.eachSeriesByType(`lines3D`,function(e){var t=e.coordinateSystem;t.type===`globe`?cc(e,t):t.type===`geo3D`?lc(e,t,[0,1,0]):(t.type===`mapbox3D`||t.type===`maptalks3D`)&&lc(e,t,[0,0,1])})}var dc=v.extend({type:`series.lines3D`,dependencies:[`globe`],visualStyleAccessPath:`lineStyle`,visualDrawType:`stroke`,getInitialData:function(e,t){var n=new y([`value`],this);return n.hasItemOption=!1,n.initData(e.data,[],function(e,t,r,i){if(e instanceof Array)return NaN;n.hasItemOption=!0;var a=e.value;if(a!=null)return a instanceof Array?a[i]:a}),n},defaultOption:{coordinateSystem:`globe`,globeIndex:0,geo3DIndex:0,zlevel:-10,polyline:!1,effect:{show:!1,period:4,trailWidth:4,trailLength:.2,spotIntensity:6},silent:!0,blendMode:`source-over`,lineStyle:{width:1,opacity:.5}}}),fc=`@export ecgl.trail2.vertex
attribute vec3 position: POSITION;
attribute vec3 positionPrev;
attribute vec3 positionNext;
attribute float offset;
attribute float dist;
attribute float distAll;
attribute float start;

attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;
uniform float near : NEAR;

uniform float speed : 0;
uniform float trailLength: 0.3;
uniform float time;
uniform float period: 1000;

uniform float spotSize: 1;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.vertexHeader

@import ecgl.lines3D.clipNear

void main()
{
 @import ecgl.lines3D.expandLine

 gl_Position = currProj;

 v_Color = a_Color;

 @import ecgl.common.wireframe.vertexMain

#ifdef CONSTANT_SPEED
 float t = mod((speed * time + start) / distAll, 1. + trailLength) - trailLength;
#else
 float t = mod((time + start) / period, 1. + trailLength) - trailLength;
#endif

 float trailLen = distAll * trailLength;

 v_Percent = (dist - t * distAll) / trailLen;

 v_SpotPercent = spotSize / distAll;

 }
@end


@export ecgl.trail2.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform float spotIntensity: 5;

varying vec4 v_Color;
varying float v_Percent;
varying float v_SpotPercent;

@import ecgl.common.wireframe.fragmentHeader

@import clay.util.srgb

void main()
{
 if (v_Percent > 1.0 || v_Percent < 0.0) {
 discard;
 }

 float fade = v_Percent;

#ifdef SRGB_DECODE
 gl_FragColor = sRGBToLinear(color * v_Color);
#else
 gl_FragColor = color * v_Color;
#endif

 @import ecgl.common.wireframe.fragmentMain

 if (v_Percent > (1.0 - v_SpotPercent)) {
 gl_FragColor.rgb *= spotIntensity;
 }

 gl_FragColor.a *= fade;
}

@end`,pc=ur.vec3;function mc(e){return e>0?1:-1}Y.Shader.import(fc);var hc=Y.Mesh.extend(function(){var e=new Y.Material({shader:new Y.Shader(Y.Shader.source(`ecgl.trail2.vertex`),Y.Shader.source(`ecgl.trail2.fragment`)),transparent:!0,depthMask:!1}),t=new pr({dynamic:!0});return t.createAttribute(`dist`,`float`,1),t.createAttribute(`distAll`,`float`,1),t.createAttribute(`start`,`float`,1),{geometry:t,material:e,culling:!1,$ignorePicking:!0}},{updateData:function(e,t,n){var r=e.hostModel,i=this.geometry,a=r.getModel(`effect`),o=a.get(`trailWidth`)*t.getDevicePixelRatio(),s=a.get(`trailLength`),c=r.get(`effect.constantSpeed`),l=r.get(`effect.period`)*1e3,u=c!=null;u?this.material.set(`speed`,c/1e3):this.material.set(`period`,l),this.material[u?`define`:`undefine`](`vertex`,`CONSTANT_SPEED`);var d=r.get(`polyline`);i.trailLength=s,this.material.set(`trailLength`,s),i.resetOffset(),[`position`,`positionPrev`,`positionNext`].forEach(function(e){i.attributes[e].value=n.attributes[e].value}),[`dist`,`distAll`,`start`,`offset`,`color`].forEach(function(e){i.attributes[e].init(i.vertexCount)}),i.indices=n.indices;var f=[],p=a.get(`trailColor`),m=a.get(`trailOpacity`),h=p!=null,g=m!=null;this.updateWorldTransform();var _=this.worldTransform.x.len(),v=this.worldTransform.y.len(),y=this.worldTransform.z.len(),b=0,x=0;e.each(function(t){var r=e.getItemLayout(t),a=g?m:Pa(e,t),s=Na(e,t);a??=1,f=Y.parseColor(h?p:s,f),f[3]*=a;for(var c=d?n.getPolylineVertexCount(r):n.getCubicCurveVertexCount(r[0],r[1],r[2],r[3]),S=0,C=[],w=[],T=b;T<b+c;T++)i.attributes.position.get(T,C),C[0]*=_,C[1]*=v,C[2]*=y,T>b&&(S+=pc.dist(C,w)),i.attributes.dist.set(T,S),pc.copy(w,C);x=Math.max(x,S);for(var E=Math.random()*(u?S:l),T=b;T<b+c;T++)i.attributes.distAll.set(T,S),i.attributes.start.set(T,E),i.attributes.offset.set(T,mc(n.attributes.offset.get(T))*o/2),i.attributes.color.set(T,f);b+=c}),this.material.set(`spotSize`,x*.1*s),this.material.set(`spotIntensity`,a.get(`spotIntensity`)),i.dirty()},setAnimationTime:function(e){this.material.set(`time`,e)}});Y.Shader.import(Ar);function gc(e){return e.radius==null?e.size==null?100:Math.max(e.size[0],e.size[1],e.size[2]):e.radius}var _c=l.extend({type:`lines3D`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this._meshLinesMaterial=new Y.Material({shader:Y.createShader(`ecgl.meshLines3D`),transparent:!0,depthMask:!1}),this._linesMesh=new Y.Mesh({geometry:new pr,material:this._meshLinesMaterial,$ignorePicking:!0}),this._trailMesh=new hc},render:function(e,t,n){this.groupGL.add(this._linesMesh);var r=e.coordinateSystem,i=e.getData();if(r&&r.viewGL){r.viewGL.add(this.groupGL),this._updateLines(e,t,n);var a=r.viewGL.isLinearSpace()?`define`:`undefine`;this._linesMesh.material[a](`fragment`,`SRGB_DECODE`),this._trailMesh.material[a](`fragment`,`SRGB_DECODE`)}var o=this._trailMesh;if(o.stopAnimation(),e.get(`effect.show`)){this.groupGL.add(o),o.updateData(i,n,this._linesMesh.geometry),o.__time=o.__time||0;var s=3600*1e3;this._curveEffectsAnimator=o.animate(``,{loop:!0}).when(s,{__time:s}).during(function(){o.setAnimationTime(o.__time)}).start()}else this.groupGL.remove(o),this._curveEffectsAnimator=null;this._linesMesh.material.blend=this._trailMesh.material.blend=e.get(`blendMode`)===`lighter`?Y.additiveBlend:null},pauseEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.pause()},resumeEffect:function(){this._curveEffectsAnimator&&this._curveEffectsAnimator.resume()},toggleEffect:function(){var e=this._curveEffectsAnimator;e&&(e.isPaused()?e.resume():e.pause())},_updateLines:function(e,t,n){var r=e.getData(),i=e.coordinateSystem,a=this._linesMesh.geometry,o=e.get(`polyline`);a.expandLine=!0,a.segmentScale=gc(i)/20;var s=`lineStyle.width`.split(`.`),c=n.getDevicePixelRatio(),l=0;r.each(function(e){var t=r.getItemModel(e).get(s);t??=1,r.setItemVisual(e,`lineWidth`,t),l=Math.max(t,l)}),a.useNativeLine=!1;var u=0,d=0;r.each(function(e){var t=r.getItemLayout(e);o?(u+=a.getPolylineVertexCount(t),d+=a.getPolylineTriangleCount(t)):(u+=a.getCubicCurveVertexCount(t[0],t[1],t[2],t[3]),d+=a.getCubicCurveTriangleCount(t[0],t[1],t[2],t[3]))}),a.setVertexCount(u),a.setTriangleCount(d),a.resetOffset();var f=[];r.each(function(e){var t=r.getItemLayout(e),n=Na(r,e),i=Pa(r,e),s=r.getItemVisual(e,`lineWidth`)*c;i??=1,f=Y.parseColor(n,f),f[3]*=i,o?a.addPolyline(t,f,s):a.addCubicCurve(t[0],t[1],t[2],t[3],f,s)}),a.dirty()},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll()}});function vc(e){e.registerChartView(_c),e.registerSeriesModel(dc),e.registerLayout(uc),e.registerAction({type:`lines3DPauseEffect`,event:`lines3deffectpaused`,update:`series.lines3D:pauseEffect`},function(){}),e.registerAction({type:`lines3DResumeEffect`,event:`lines3deffectresumed`,update:`series.lines3D:resumeEffect`},function(){}),e.registerAction({type:`lines3DToggleEffect`,event:`lines3deffectchanged`,update:`series.lines3D:toggleEffect`},function(){})}P(vc);function yc(e,t){for(var n=[],r=0;r<t.length;r++)n.push(e.dataToPoint(t[r]));return n}var bc=v.extend({type:`series.polygons3D`,getRegionModel:function(e){return this.getData().getItemModel(e)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,n=this.getData().getItemModel(e),r=n.option instanceof Array?n.option:n.getShallow(`coords`);n.get(`multiPolygon`)||(r=[r]);for(var i=[],a=0;a<r.length;a++){for(var o=[],s=1;s<r[a].length;s++)o.push(yc(t,r[a][s]));i.push({exterior:yc(t,r[a][0]),interiors:o})}return i},getInitialData:function(e){var t=new y([`value`],this);return t.hasItemOption=!1,t.initData(e.data,[],function(e,n,r,i){if(e instanceof Array)return NaN;t.hasItemOption=!0;var a=e.value;if(a!=null)return a instanceof Array?a[i]:a}),t},defaultOption:{show:!0,data:null,multiPolygon:!1,progressiveThreshold:1e3,progressive:1e3,zlevel:-10,label:{show:!1,distance:2,textStyle:{fontSize:20,color:`#000`,backgroundColor:`rgba(255,255,255,0.7)`,padding:3,borderRadius:4}},itemStyle:{color:`#fff`,borderWidth:0,borderColor:`#333`},emphasis:{itemStyle:{color:`#639fc0`},label:{show:!0}}}});F(bc.prototype,Ui);var xc=l.extend({type:`polygons3D`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this._geo3DBuilderList=[],this._currentStep=0},render:function(e,t,n){this.groupGL.removeAll();var r=e.coordinateSystem;r&&r.viewGL&&r.viewGL.add(this.groupGL);var i=this._geo3DBuilderList[0];i||(i=new za(n),i.extrudeY=r.type!==`mapbox3D`&&r.type!==`maptalks3D`,this._geo3DBuilderList[0]=i),this._updateShaderDefines(r,i),i.update(e,t,n),this._geo3DBuilderList.length=1,this.groupGL.add(i.rootNode)},incrementalPrepareRender:function(e,t,n){this.groupGL.removeAll();var r=e.coordinateSystem;r&&r.viewGL&&r.viewGL.add(this.groupGL),this._currentStep=0},incrementalRender:function(e,t,n,r){var i=this._geo3DBuilderList[this._currentStep],a=t.coordinateSystem;i||(i=new za(r),i.extrudeY=a.type!==`mapbox3D`&&a.type!==`maptalks3D`,this._geo3DBuilderList[this._currentStep]=i),i.update(t,n,r,e.start,e.end),this.groupGL.add(i.rootNode),this._updateShaderDefines(a,i),this._currentStep++},_updateShaderDefines:function(e,t){var n=e.viewGL.isLinearSpace()?`define`:`undefine`;t.rootNode.traverse(function(t){t.material&&(t.material[n](`fragment`,`SRGB_DECODE`),(e.type===`mapbox3D`||e.type===`maptalks3D`)&&(t.material.define(`fragment`,`NORMAL_UP_AXIS`,2),t.material.define(`fragment`,`NORMAL_FRONT_AXIS`,1)))})},remove:function(){this.groupGL.removeAll()},dispose:function(){this.groupGL.removeAll(),this._geo3DBuilderList.forEach(function(e){e.dispose()})}});function Sc(e){e.registerChartView(xc),e.registerSeriesModel(bc)}P(Sc);var Cc=v.extend({type:`series.surface`,dependencies:[`globe`,`grid3D`,`geo3D`],visualStyleAccessPath:`itemStyle`,formatTooltip:function(e){return _s(this,e)},getInitialData:function(e,t){var n=e.data;function r(e){return!(isNaN(e.min)||isNaN(e.max)||isNaN(e.step))}function i(e){var t=de;return Math.max(t(e.min),t(e.max),t(e.step))+1}if(!n)if(e.parametric){var a=e.parametricEquation||{},o=a.u||{},s=a.v||{};[`u`,`v`].forEach(function(e){r(a[e])}),[`x`,`y`,`z`].forEach(function(e){a[e]});var c=Math.floor((o.max+o.step-o.min)/o.step),l=Math.floor((s.max+s.step-s.min)/s.step);n=new Float32Array(c*l*5);for(var d=i(o),f=i(s),p=0,m=0;m<l;m++)for(var h=0;h<c;h++){var g=h*o.step+o.min,_=m*s.step+s.min,v=u(Math.min(g,o.max),d),y=u(Math.min(_,s.max),f),b=a.x(v,y),x=a.y(v,y),S=a.z(v,y);n[p++]=b,n[p++]=x,n[p++]=S,n[p++]=v,n[p++]=y}}else{var C=e.equation||{},w=C.x||{},T=C.y||{};if([`x`,`y`].forEach(function(e){r(C[e])}),typeof C.z!=`function`)return;var E=Math.floor((w.max+w.step-w.min)/w.step),D=Math.floor((T.max+T.step-T.min)/T.step);n=new Float32Array(E*D*3);for(var O=i(w),k=i(T),p=0,m=0;m<D;m++)for(var h=0;h<E;h++){var b=h*w.step+w.min,x=m*T.step+T.min,A=u(Math.min(b,w.max),O),j=u(Math.min(x,T.max),k),S=C.z(A,j);n[p++]=A,n[p++]=j,n[p++]=S}}var ee=[`x`,`y`,`z`];return e.parametric&&ee.push(`u`,`v`),vs(this,ee,n)},defaultOption:{coordinateSystem:`cartesian3D`,zlevel:-10,grid3DIndex:0,shading:`lambert`,parametric:!1,wireframe:{show:!0,lineStyle:{color:`rgba(0,0,0,0.5)`,width:1}},equation:{x:{min:-1,max:1,step:.1},y:{min:-1,max:1,step:.1},z:null},parametricEquation:{u:{min:-1,max:1,step:.1},v:{min:-1,max:1,step:.1},x:null,y:null,z:null},dataShape:null,itemStyle:{},animationDurationUpdate:500}});F(Cc.prototype,Ui);var wc=ur.vec3;function Tc(e){return isNaN(e[0])||isNaN(e[1])||isNaN(e[2])}var Ec=l.extend({type:`surface`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node},render:function(e,t,n){var r=this._prevSurfaceMesh;this._prevSurfaceMesh=this._surfaceMesh,this._surfaceMesh=r,this._surfaceMesh||=this._createSurfaceMesh(),this.groupGL.remove(this._prevSurfaceMesh),this.groupGL.add(this._surfaceMesh);var i=e.coordinateSystem,a=e.get(`shading`),o=e.getData(),s=`ecgl.`+a;if((!this._surfaceMesh.material||this._surfaceMesh.material.shader.name!==s)&&(this._surfaceMesh.material=Y.createMaterial(s,[`VERTEX_COLOR`,`DOUBLE_SIDED`])),Y.setMaterialFromModel(a,this._surfaceMesh.material,e,n),i&&i.viewGL){i.viewGL.add(this.groupGL);var c=i.viewGL.isLinearSpace()?`define`:`undefine`;this._surfaceMesh.material[c](`fragment`,`SRGB_DECODE`)}var l=e.get(`parametric`),u=e.get(`dataShape`);u||=this._getDataShape(o,l);var d=e.getModel(`wireframe`),f=d.get(`lineStyle.width`),p=d.get(`show`)&&f>0;this._updateSurfaceMesh(this._surfaceMesh,e,u,p);var m=this._surfaceMesh.material;p?(m.define(`WIREFRAME_QUAD`),m.set(`wireframeLineWidth`,f),m.set(`wireframeLineColor`,Y.parseColor(d.get(`lineStyle.color`)))):m.undefine(`WIREFRAME_QUAD`),this._initHandler(e,n),this._updateAnimation(e)},_updateAnimation:function(e){Y.updateVertexAnimation([[`prevPosition`,`position`],[`prevNormal`,`normal`]],this._prevSurfaceMesh,this._surfaceMesh,e)},_createSurfaceMesh:function(){var e=new Y.Mesh({geometry:new Y.Geometry({dynamic:!0,sortTriangles:!0}),shadowDepthMaterial:new Y.Material({shader:new Y.Shader(Y.Shader.source(`ecgl.sm.depth.vertex`),Y.Shader.source(`ecgl.sm.depth.fragment`))}),culling:!1,renderOrder:10,renderNormal:!0});return e.geometry.createAttribute(`barycentric`,`float`,4),e.geometry.createAttribute(`prevPosition`,`float`,3),e.geometry.createAttribute(`prevNormal`,`float`,3),Object.assign(e.geometry,Aa),e},_initHandler:function(e,t){var n=e.getData(),r=this._surfaceMesh,i=e.coordinateSystem;function a(e,t){for(var n=1/0,i=-1,a=[],o=0;o<e.length;o++){r.geometry.attributes.position.get(e[o],a);var s=wc.dist(t.array,a);s<n&&(n=s,i=e[o])}return i}r.seriesIndex=e.seriesIndex;var o=-1;r.off(`mousemove`),r.off(`mouseout`),r.on(`mousemove`,function(e){var s=a(e.triangle,e.point);if(s>=0){var c=[];r.geometry.attributes.position.get(s,c);for(var l=i.pointToData(c),u=1/0,d=-1,f=[],p=0;p<n.count();p++){f[0]=n.get(`x`,p),f[1]=n.get(`y`,p),f[2]=n.get(`z`,p);var m=wc.squaredDistance(f,l);m<u&&(d=p,u=m)}d!==o&&t.dispatchAction({type:`grid3DShowAxisPointer`,value:l}),o=d,r.dataIndex=d}else r.dataIndex=-1},this),r.on(`mouseout`,function(e){o=-1,r.dataIndex=-1,t.dispatchAction({type:`grid3DHideAxisPointer`})},this)},_updateSurfaceMesh:function(e,t,n,r){var i=e.geometry,a=t.getData(),o=a.getLayout(`points`),s=0;a.each(function(e){a.hasValue(e)||s++});var c=s||r,l=i.attributes.position,u=i.attributes.normal,d=i.attributes.texcoord0,f=i.attributes.barycentric,p=i.attributes.color,m=n[0],h=n[1],g=t.get(`shading`)!==`color`;if(c){var _=(m-1)*(h-1)*4;l.init(_),r&&f.init(_)}else l.value=new Float32Array(o);p.init(i.vertexCount),d.init(i.vertexCount);var v=[0,3,1,1,3,2],y=[[1,1,0,0],[0,1,0,1],[1,0,0,1],[1,0,1,0]],b=i.indices=new(i.vertexCount>65535?Uint32Array:Uint16Array)((m-1)*(h-1)*6),x=function(e,t,n){n[1]=e*h+t,n[0]=e*h+t+1,n[3]=(e+1)*h+t+1,n[2]=(e+1)*h+t},S=!1;if(c){var C=[],w=[],T=0;g?u.init(i.vertexCount):u.value=null;for(var E=[[],[],[]],D=[],O=[],k=wc.create(),A=function(e,t,n){var r=t*3;return n[0]=e[r],n[1]=e[r+1],n[2]=e[r+2],n},j=new Float32Array(o.length),ee=new Float32Array(o.length/3*4),M=0;M<a.count();M++)if(a.hasValue(M)){var te=Y.parseColor(Na(a,M)),ne=Pa(a,M);ne!=null&&(te[3]*=ne),te[3]<.99&&(S=!0);for(var N=0;N<4;N++)ee[M*4+N]=te[N]}for(var re=[1e7,1e7,1e7],M=0;M<m-1;M++)for(var ie=0;ie<h-1;ie++){var ae=M*(h-1)+ie,oe=ae*4;x(M,ie,C);for(var P=!1,N=0;N<4;N++)A(o,C[N],w),Tc(w)&&(P=!0);for(var N=0;N<4;N++)P?l.set(oe+N,re):(A(o,C[N],w),l.set(oe+N,w)),r&&f.set(oe+N,y[N]);for(var N=0;N<6;N++)b[T++]=v[N]+oe;if(g&&!P)for(var N=0;N<2;N++){for(var se=N*3,ce=0;ce<3;ce++){var le=C[v[se]+ce];A(o,le,E[ce])}wc.sub(D,E[0],E[1]),wc.sub(O,E[1],E[2]),wc.cross(k,D,O);for(var ce=0;ce<3;ce++){var ue=C[v[se]+ce]*3;j[ue]=j[ue]+k[0],j[ue+1]=j[ue+1]+k[1],j[ue+2]=j[ue+2]+k[2]}}}if(g)for(var M=0;M<j.length/3;M++)A(j,M,k),wc.normalize(k,k),j[M*3]=k[0],j[M*3+1]=k[1],j[M*3+2]=k[2];for(var te=[],de=[],M=0;M<m-1;M++)for(var ie=0;ie<h-1;ie++){var ae=M*(h-1)+ie,oe=ae*4;x(M,ie,C);for(var N=0;N<4;N++){for(var ce=0;ce<4;ce++)te[ce]=ee[C[N]*4+ce];p.set(oe+N,te),g&&(A(j,C[N],k),u.set(oe+N,k));var le=C[N];de[0]=le%h/(h-1),de[1]=Math.floor(le/h)/(m-1),d.set(oe+N,de)}ae++}}else{for(var de=[],M=0;M<a.count();M++){de[0]=M%h/(h-1),de[1]=Math.floor(M/h)/(m-1);var te=Y.parseColor(Na(a,M)),ne=Pa(a,M);ne!=null&&(te[3]*=ne),te[3]<.99&&(S=!0),p.set(M,te),d.set(M,de)}for(var C=[],fe=0,M=0;M<m-1;M++)for(var ie=0;ie<h-1;ie++){x(M,ie,C);for(var N=0;N<6;N++)b[fe++]=C[v[N]]}g?i.generateVertexNormals():u.value=null}e.material.get(`normalMap`)&&i.generateTangents(),i.updateBoundingBox(),i.dirty(),e.material.transparent=S,e.material.depthMask=!S},_getDataShape:function(e,t){for(var n=-1/0,r=0,i=0,a=!1,o=t?`u`:`x`,s=e.count(),c=0;c<s;c++){var l=e.get(o,c);l<n&&(i=0,r++),n=l,i++}if((!r||i===1)&&(a=!0),!a)return[r+1,i];for(var u=Math.floor(Math.sqrt(s));u>0;){if(Math.floor(s/u)===s/u)return[u,s/u];u--}return u=Math.floor(Math.sqrt(s)),[u,u]},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function Dc(e){e.registerChartView(Ec),e.registerSeriesModel(Cc),e.registerLayout(function(e,t){e.eachSeriesByType(`surface`,function(e){var t=e.coordinateSystem;!t||t.type;var n=e.getData(),r=new Float32Array(3*n.count()),i=[NaN,NaN,NaN];if(t&&t.type===`cartesian3D`){var a=t.dimensions.map(function(t){return e.coordDimToDataDim(t)[0]});n.each(a,function(e,a,o,s){var c=n.hasValue(s)?t.dataToPoint([e,a,o]):i;r[s*3]=c[0],r[s*3+1]=c[1],r[s*3+2]=c[2]})}n.setLayout(`points`,r)})})}P(Dc);function Oc(e,t){for(var n=[],r=0;r<t.length;r++)n.push(e.dataToPoint(t[r]));return n}var kc=v.extend({type:`series.map3D`,layoutMode:`box`,coordinateSystem:null,visualStyleAccessPath:`itemStyle`,optionUpdated:function(e){e||={};var t=this.get(`coordinateSystem`);t==null||t===`geo3D`||(this.get(`groundPlane.show`)&&(this.option.groundPlane.show=!1),this._geo=null)},getInitialData:function(e){e.data=this.getFilledRegions(e.data,e.map);var t=new y(o(e.data,{coordDimensions:[`value`]}),this);t.initData(e.data);var n={};return t.each(function(e){var r=t.getName(e);n[r]=t.getItemModel(e)}),this._regionModelMap=n,t},formatTooltip:function(e){return _s(this,e)},getRegionModel:function(e){var t=this.getData().getName(e);return this._regionModelMap[t]||new r(null,this)},getRegionPolygonCoords:function(e){var t=this.coordinateSystem,n=this.getData().getName(e);if(t.transform){var r=t.getRegion(n);return r?r.geometries:[]}else{this._geo||=Xa.createGeo3D(this);for(var r=this._geo.getRegion(n),i=[],a=0;a<r.geometries.length;a++){var o=r.geometries[a],s=[],c=Oc(t,o.exterior);if(s&&s.length)for(var l=0;l<o.interiors.length;l++)s.push(Oc(t,s[l]));i.push({interiors:s,exterior:c})}return i}},getFormattedLabel:function(e,t){var n=hs.getFormattedLabel(this,e,t);return n??=this.getData().getName(e),n},defaultOption:{coordinateSystem:`geo3D`,data:null}});F(kc.prototype,Wi),F(kc.prototype,tr),F(kc.prototype,nr),F(kc.prototype,rr),F(kc.prototype,Ui);var Ac=l.extend({type:`map3D`,__ecgl__:!0,init:function(e,t){this._geo3DBuilder=new za(t),this.groupGL=new Y.Node},render:function(e,t,n){var r=e.coordinateSystem;if(!(!r||!r.viewGL)){if(this.groupGL.add(this._geo3DBuilder.rootNode),r.viewGL.add(this.groupGL),r.type===`geo3D`){this._sceneHelper||(this._sceneHelper=new gr,this._sceneHelper.initLight(this.groupGL)),this._sceneHelper.setScene(r.viewGL.scene),this._sceneHelper.updateLight(e),r.viewGL.setPostEffect(e.getModel(`postEffect`),n),r.viewGL.setTemporalSuperSampling(e.getModel(`temporalSuperSampling`));var i=this._control;i||(i=this._control=new cr({zr:n.getZr()}),this._control.init());var a=e.getModel(`viewControl`);i.setViewGL(r.viewGL),i.setFromViewControlModel(a,0),i.off(`update`),i.on(`update`,function(){n.dispatchAction({type:`map3DChangeCamera`,alpha:i.getAlpha(),beta:i.getBeta(),distance:i.getDistance(),from:this.uid,map3DId:e.id})}),this._geo3DBuilder.extrudeY=!0}else this._control&&=(this._control.dispose(),null),this._sceneHelper&&=(this._sceneHelper.dispose(),null),e.getData().getLayout(`geo3D`),this._geo3DBuilder.extrudeY=!1;this._geo3DBuilder.update(e,t,n,0,e.getData().count());var o=r.viewGL.isLinearSpace()?`define`:`undefine`;this._geo3DBuilder.rootNode.traverse(function(e){e.material&&e.material[o](`fragment`,`SRGB_DECODE`)})}},afterRender:function(e,t,n,r){var i=r.renderer,a=e.coordinateSystem;a&&a.type===`geo3D`&&(this._sceneHelper.updateAmbientCubemap(i,e,n),this._sceneHelper.updateSkybox(i,e,n))},dispose:function(){this.groupGL.removeAll(),this._control.dispose(),this._geo3DBuilder.dispose()}});function jc(e){Za(e),e.registerChartView(Ac),e.registerSeriesModel(kc),e.registerAction({type:`map3DChangeCamera`,event:`map3dcamerachanged`,update:`series:updateCamera`},function(e,t){t.eachComponent({mainType:`series`,subType:`map3D`,query:e},function(t){t.setView(e)})})}P(jc);var Mc=v.extend({type:`series.scatterGL`,dependencies:[`grid`,`polar`,`geo`,`singleAxis`],visualStyleAccessPath:`itemStyle`,hasSymbolVisual:!0,getInitialData:function(){return oe(this)},defaultOption:{coordinateSystem:`cartesian2d`,zlevel:10,progressive:1e5,progressiveThreshold:1e5,large:!1,symbol:`circle`,symbolSize:10,zoomScale:0,blendMode:`source-over`,itemStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}});function Nc(e){this.viewGL=e}Nc.prototype.reset=function(e,t){this._updateCamera(t.getWidth(),t.getHeight(),t.getDevicePixelRatio()),this._viewTransform=Ce(),this.updateTransform(e,t)},Nc.prototype.updateTransform=function(e,t){var n=e.coordinateSystem;n.getRoamTransform&&(Te(this._viewTransform,n.getRoamTransform()),this._setCameraTransform(this._viewTransform),t.getZr().refresh())},Nc.prototype.dataToPoint=function(e,t,n){n=e.dataToPoint(t,null,n);var r=this._viewTransform;r&&he(n,n,r)},Nc.prototype.removeTransformInPoint=function(e){return this._viewTransform&&he(e,e,this._viewTransform),e},Nc.prototype.getZoom=function(){if(this._viewTransform){var e=this._viewTransform;return 1/Math.max(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]))}return 1},Nc.prototype._setCameraTransform=function(e){var t=this.viewGL.camera;t.position.set(e[4],e[5],0),t.scale.set(Math.sqrt(e[0]*e[0]+e[1]*e[1]),Math.sqrt(e[2]*e[2]+e[3]*e[3]),1)},Nc.prototype._updateCamera=function(e,t,n){this.viewGL.setViewport(0,0,e,t,n);var r=this.viewGL.camera;r.left=r.top=0,r.bottom=t,r.right=e,r.near=0,r.far=100};var Pc=l.extend({type:`scatterGL`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this.viewGL=new Q(`orthographic`),this.viewGL.add(this.groupGL),this._pointsBuilderList=[],this._currentStep=0,this._sizeScale=1,this._glViewHelper=new Nc(this.viewGL)},render:function(e,t,n){if(this.groupGL.removeAll(),this._glViewHelper.reset(e,n),e.getData().count()){var r=this._pointsBuilderList[0];r||=this._pointsBuilderList[0]=new Hs(!0,n),this._pointsBuilderList.length=1,this.groupGL.add(r.rootNode),this._removeTransformInPoints(e.getData().getLayout(`points`)),r.update(e,t,n),this.viewGL.setPostEffect(e.getModel(`postEffect`),n)}},incrementalPrepareRender:function(e,t,n){this.groupGL.removeAll(),this._glViewHelper.reset(e,n),this._currentStep=0,this.viewGL.setPostEffect(e.getModel(`postEffect`),n)},incrementalRender:function(e,t,n,r){if(!(e.end<=e.start)){var i=this._pointsBuilderList[this._currentStep];i||(i=new Hs(!0,r),this._pointsBuilderList[this._currentStep]=i),this.groupGL.add(i.rootNode),this._removeTransformInPoints(t.getData().getLayout(`points`)),i.setSizeScale(this._sizeScale),i.update(t,n,r,e.start,e.end),r.getZr().refresh(),this._currentStep++}},updateTransform:function(e,t,n){if(e.coordinateSystem.getRoamTransform){this._glViewHelper.updateTransform(e,n);var r=this._glViewHelper.getZoom(),i=Math.max((e.get(`zoomScale`)||0)*(r-1)+1,0);this._sizeScale=i,this._pointsBuilderList.forEach(function(e){e.setSizeScale(i)})}},_removeTransformInPoints:function(e){if(e)for(var t=[],n=0;n<e.length;n+=2)t[0]=e[n],t[1]=e[n+1],this._glViewHelper.removeTransformInPoint(t),e[n]=t[0],e[n+1]=t[1]},dispose:function(){this.groupGL.removeAll(),this._pointsBuilderList.forEach(function(e){e.dispose()})},remove:function(){this.groupGL.removeAll()}});function Fc(e){e.registerChartView(Pc),e.registerSeriesModel(Mc),e.registerLayout({seriesType:`scatterGL`,reset:function(e){var t=e.coordinateSystem,n=e.getData(),r;if(t){var i=t.dimensions.map(function(e){return n.mapDimension(e)}).slice(0,2),a=[];i.length===1?r=function(e){for(var r=new Float32Array((e.end-e.start)*2),a=e.start;a<e.end;a++){var o=(a-e.start)*2,s=n.get(i[0],a),c=t.dataToPoint(s);r[o]=c[0],r[o+1]=c[1]}n.setLayout(`points`,r)}:i.length===2&&(r=function(e){for(var r=new Float32Array((e.end-e.start)*2),o=e.start;o<e.end;o++){var s=(o-e.start)*2,c=n.get(i[0],o),l=n.get(i[1],o);a[0]=c,a[1]=l,a=t.dataToPoint(a),r[s]=a[0],r[s+1]=a[1]}n.setLayout(`points`,r)})}return{progress:r}}})}P(Fc);var Ic=b;function Lc(e,t,n,r,i){for(var a=new S(r),s=0;s<e.length;s++)a.addNode(G.firstNotNull(e[s].id,e[s].name,s),s);for(var c=[],l=[],u=0,s=0;s<t.length;s++){var d=t[s],f=d.source,p=d.target;a.addEdge(f,p,u)&&(l.push(d),c.push(G.firstNotNull(d.id,f+` > `+p)),u++)}var m=new y(o(e,{coordDimensions:[`value`]}),n);m.initData(e);var h=new y([`value`],n);return h.initData(l,c),i&&i(m,h),Ic({mainData:m,struct:a,structAttr:`graph`,datas:{node:m,edge:h},datasAttr:{node:`data`,edge:`edgeData`}}),a.update(),a}var Rc=v.extend({type:`series.graphGL`,visualStyleAccessPath:`itemStyle`,hasSymbolVisual:!0,init:function(e){Rc.superApply(this,`init`,arguments),this.legendDataProvider=function(){return this._categoriesData},this._updateCategoriesData()},mergeOption:function(e){Rc.superApply(this,`mergeOption`,arguments),this._updateCategoriesData()},getFormattedLabel:function(e,t,n,r){var i=hs.getFormattedLabel(this,e,t,n,r);if(i==null){var a=this.getData(),o=a.dimensions[a.dimensions.length-1];i=a.get(o,e)}return i},getInitialData:function(e,t){var n=e.edges||e.links||[],r=e.data||e.nodes||[],i=this;if(r&&n)return Lc(r,n,this,!0,a).data;function a(e,n){e.wrapMethod(`getItemModel`,function(e){let t=i._categoriesModels[e.getShallow(`category`)];return t&&(t.parentModel=e.parentModel,e.parentModel=t),e});let r=t.getModel([]).getModel;function a(e,t){let n=r.call(this,e,t);return n.resolveParentPath=o,n}n.wrapMethod(`getItemModel`,function(e){return e.resolveParentPath=o,e.getModel=a,e});function o(e){if(e&&(e[0]===`label`||e[1]===`label`)){let t=e.slice();return e[0]===`label`?t[0]=`edgeLabel`:e[1]===`label`&&(t[1]=`edgeLabel`),t}return e}}},getGraph:function(){return this.getData().graph},getEdgeData:function(){return this.getGraph().edgeData},getCategoriesData:function(){return this._categoriesData},formatTooltip:function(e,t,n){if(n===`edge`){var r=this.getData(),i=this.getDataParams(e,n),a=r.graph.getEdgeByIndex(e),o=r.getName(a.node1.dataIndex),s=r.getName(a.node2.dataIndex),c=[];return o!=null&&c.push(o),s!=null&&c.push(s),c=E(c.join(` > `)),i.value&&(c+=` : `+E(i.value)),c}else return Rc.superApply(this,`formatTooltip`,arguments)},_updateCategoriesData:function(){var e=(this.option.categories||[]).map(function(e){return e.value==null?Object.assign({value:0},e):e}),t=new y([`value`],this);t.initData(e),this._categoriesData=t,this._categoriesModels=t.mapArray(function(e){return t.getItemModel(e,!0)})},setView:function(e){e.zoom!=null&&(this.option.zoom=e.zoom),e.offset!=null&&(this.option.offset=e.offset)},setNodePosition:function(e){for(var t=0;t<e.length/2;t++){var n=e[t*2],r=e[t*2+1],i=this.getData().getRawDataItem(t);i.x=n,i.y=r}},isAnimationEnabled:function(){return Rc.superCall(this,`isAnimationEnabled`)&&!(this.get(`layout`)===`force`&&this.get(`force.layoutAnimation`))},defaultOption:{zlevel:10,z:2,legendHoverLink:!0,layout:`forceAtlas2`,forceAtlas2:{initLayout:null,GPU:!0,steps:1,maxSteps:1e3,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,edgeWeightInfluence:1,edgeWeight:[1,4],nodeWeight:[1,4],preventOverlap:!1,gravityCenter:null},focusNodeAdjacency:!0,focusNodeAdjacencyOn:`mouseover`,left:`center`,top:`center`,symbol:`circle`,symbolSize:5,roam:!1,center:null,zoom:1,label:{show:!1,formatter:`{b}`,position:`right`,distance:5,textStyle:{fontSize:14}},itemStyle:{},lineStyle:{color:`#aaa`,width:1,opacity:.5},emphasis:{label:{show:!0}},animation:!1}}),zc=ur.vec2,Bc=[[0,0],[1,1]],Vc=V.extend(function(){return{segmentScale:4,dynamic:!0,useNativeLine:!0,attributes:{position:new V.Attribute(`position`,`float`,2,`POSITION`),normal:new V.Attribute(`normal`,`float`,2),offset:new V.Attribute(`offset`,`float`,1),color:new V.Attribute(`color`,`float`,4,`COLOR`)}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0,this._itemVertexOffsets=[]},setVertexCount:function(e){var t=this.attributes;this.vertexCount!==e&&(t.position.init(e),t.color.init(e),this.useNativeLine||(t.offset.init(e),t.normal.init(e)),e>65535?this.indices instanceof Uint16Array&&(this.indices=new Uint32Array(this.indices)):this.indices instanceof Uint32Array&&(this.indices=new Uint16Array(this.indices)))},setTriangleCount:function(e){this.triangleCount!==e&&(e===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(e*3):new Uint16Array(e*3))},_getCubicCurveApproxStep:function(e,t,n,r){return 1/(zc.dist(e,t)+zc.dist(n,t)+zc.dist(r,n)+1)*this.segmentScale},getCubicCurveVertexCount:function(e,t,n,r){var i=this._getCubicCurveApproxStep(e,t,n,r),a=Math.ceil(1/i);return this.useNativeLine?a*2:a*2+2},getCubicCurveTriangleCount:function(e,t,n,r){var i=this._getCubicCurveApproxStep(e,t,n,r),a=Math.ceil(1/i);return this.useNativeLine?0:a*2},getLineVertexCount:function(){return this.getPolylineVertexCount(Bc)},getLineTriangleCount:function(){return this.getPolylineTriangleCount(Bc)},getPolylineVertexCount:function(e){var t=typeof e==`number`?e:typeof e[0]==`number`?e.length/2:e.length;return this.useNativeLine?(t-1)*2:(t-1)*2+2},getPolylineTriangleCount:function(e){var t=typeof e==`number`?e:typeof e[0]==`number`?e.length/2:e.length;return this.useNativeLine?0:(t-1)*2},addCubicCurve:function(e,t,n,r,i,a){a??=1;for(var o=e[0],s=e[1],c=t[0],l=t[1],u=n[0],d=n[1],f=r[0],p=r[1],m=this._getCubicCurveApproxStep(e,t,n,r),h=m*m,g=h*m,_=3*m,v=3*h,y=6*h,b=6*g,x=o-c*2+u,S=s-l*2+d,C=(c-u)*3-o+f,w=(l-d)*3-s+p,T=o,E=s,D=(c-o)*_+x*v+C*g,O=(l-s)*_+S*v+w*g,k=x*y+C*b,A=S*y+w*b,j=C*b,ee=w*b,M=0,te=0,ne=Math.ceil(1/m),N=new Float32Array((ne+1)*3),N=[],re=0,te=0;te<ne+1;te++)N[re++]=T,N[re++]=E,T+=D,E+=O,D+=k,O+=A,k+=j,A+=ee,M+=m,M>1&&(T=D>0?Math.min(T,f):Math.max(T,f),E=O>0?Math.min(E,p):Math.max(E,p));this.addPolyline(N,i,a)},addLine:function(e,t,n,r){this.addPolyline([e,t],n,r)},addPolyline:function(){var e=zc.create(),t=zc.create(),n=zc.create(),r=zc.create(),i=[],a=[],o=[];return function(s,c,l,u,d){if(s.length){var f=typeof s[0]!=`number`;if(d??=f?s.length:s.length/2,!(d<2)){u??=0,l??=1,this._itemVertexOffsets.push(this._vertexOffset);for(var p=f?typeof c[0]!=`number`:c.length/4===d,m=this.attributes.position,h=this.attributes.color,g=this.attributes.offset,_=this.attributes.normal,v=this.indices,y=this._vertexOffset,b,x=0;x<d;x++){if(f)i=s[x+u],b=p?c[x+u]:c;else{var S=x*2+u;if(i||=[],i[0]=s[S],i[1]=s[S+1],p){var C=x*4+u;b||=[],b[0]=c[C],b[1]=c[C+1],b[2]=c[C+2],b[3]=c[C+3]}else b=c}if(this.useNativeLine)x>1&&(m.copy(y,y-1),h.copy(y,y-1),y++);else{var w;if(x<d-1){if(f)zc.copy(a,s[x+1]);else{var S=(x+1)*2+u;a||=[],a[0]=s[S],a[1]=s[S+1]}if(x>0){zc.sub(e,i,o),zc.sub(t,a,i),zc.normalize(e,e),zc.normalize(t,t),zc.add(r,e,t),zc.normalize(r,r);var T=l/2*Math.min(1/zc.dot(e,r),2);n[0]=-r[1],n[1]=r[0],w=T}else zc.sub(e,a,i),zc.normalize(e,e),n[0]=-e[1],n[1]=e[0],w=l/2}else zc.sub(e,i,o),zc.normalize(e,e),n[0]=-e[1],n[1]=e[0],w=l/2;_.set(y,n),_.set(y+1,n),g.set(y,w),g.set(y+1,-w),zc.copy(o,i),m.set(y,i),m.set(y+1,i),h.set(y,b),h.set(y+1,b),y+=2}if(this.useNativeLine)h.set(y,b),m.set(y,i),y++;else if(x>0){var E=this._faceOffset*3,v=this.indices;v[E]=y-4,v[E+1]=y-3,v[E+2]=y-2,v[E+3]=y-3,v[E+4]=y-1,v[E+5]=y-2,this._faceOffset+=2}}this._vertexOffset=y}}}}(),setItemColor:function(e,t){for(var n=this._itemVertexOffsets[e],r=e<this._itemVertexOffsets.length-1?this._itemVertexOffsets[e+1]:this._vertexOffset,i=n;i<r;i++)this.attributes.color.set(i,t);this.dirty(`color`)}});De(Vc.prototype,lr),Y.Shader.import(`@export ecgl.forceAtlas2.updateNodeRepulsion

#define NODE_COUNT 0

uniform sampler2D positionTex;

uniform vec2 textureSize;
uniform float gravity;
uniform float scaling;
uniform vec2 gravityCenter;

uniform bool strongGravityMode;
uniform bool preventOverlap;

varying vec2 v_Texcoord;

void main() {

 vec4 n0 = texture2D(positionTex, v_Texcoord);

 vec2 force = vec2(0.0);
 for (int i = 0; i < NODE_COUNT; i++) {
 vec2 uv = vec2(
 mod(float(i), textureSize.x) / (textureSize.x - 1.0),
 floor(float(i) / textureSize.x) / (textureSize.y - 1.0)
 );
 vec4 n1 = texture2D(positionTex, uv);

 vec2 dir = n0.xy - n1.xy;
 float d2 = dot(dir, dir);

 if (d2 > 0.0) {
 float factor = 0.0;
 if (preventOverlap) {
 float d = sqrt(d2);
 d = d - n0.w - n1.w;
 if (d > 0.0) {
 factor = scaling * n0.z * n1.z / (d * d);
 }
 else if (d < 0.0) {
 factor = scaling * 100.0 * n0.z * n1.z;
 }
 }
 else {
 factor = scaling * n0.z * n1.z / d2;
 }
 force += dir * factor;
 }
 }

 vec2 dir = gravityCenter - n0.xy;
 float d = 1.0;
 if (!strongGravityMode) {
 d = length(dir);
 }

 force += dir * n0.z * gravity / (d + 1.0);

 gl_FragColor = vec4(force, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.vertex

attribute vec2 node1;
attribute vec2 node2;
attribute float weight;

uniform sampler2D positionTex;
uniform float edgeWeightInfluence;
uniform bool preventOverlap;
uniform bool linLogMode;

uniform vec2 windowSize: WINDOW_SIZE;

varying vec2 v_Force;

void main() {

 vec4 n0 = texture2D(positionTex, node1);
 vec4 n1 = texture2D(positionTex, node2);

 vec2 dir = n1.xy - n0.xy;
 float d = length(dir);
 float w;
 if (edgeWeightInfluence == 0.0) {
 w = 1.0;
 }
 else if (edgeWeightInfluence == 1.0) {
 w = weight;
 }
 else {
 w = pow(weight, edgeWeightInfluence);
 }
 vec2 offset = vec2(1.0 / windowSize.x, 1.0 / windowSize.y);
 vec2 scale = vec2((windowSize.x - 1.0) / windowSize.x, (windowSize.y - 1.0) / windowSize.y);
 vec2 pos = node1 * scale * 2.0 - 1.0;
 gl_Position = vec4(pos + offset, 0.0, 1.0);
 gl_PointSize = 1.0;

 float factor;
 if (preventOverlap) {
 d = d - n1.w - n0.w;
 }
 if (d <= 0.0) {
 v_Force = vec2(0.0);
 return;
 }

 if (linLogMode) {
 factor = w * log(d) / d;
 }
 else {
 factor = w;
 }
 v_Force = dir * factor;
}
@end

@export ecgl.forceAtlas2.updateEdgeAttraction.fragment

varying vec2 v_Force;

void main() {
 gl_FragColor = vec4(v_Force, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.vertex

attribute vec2 node;

varying vec2 v_NodeUv;

void main() {

 v_NodeUv = node;
 gl_Position = vec4(0.0, 0.0, 0.0, 1.0);
 gl_PointSize = 1.0;
}
@end

@export ecgl.forceAtlas2.calcWeightedSum.fragment

varying vec2 v_NodeUv;

uniform sampler2D positionTex;
uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;

void main() {
 vec2 force = texture2D(forceTex, v_NodeUv).rg;
 vec2 forcePrev = texture2D(forcePrevTex, v_NodeUv).rg;

 float mass = texture2D(positionTex, v_NodeUv).z;
 float swing = length(force - forcePrev) * mass;
 float traction = length(force + forcePrev) * 0.5 * mass;

 gl_FragColor = vec4(swing, traction, 0.0, 0.0);
}
@end

@export ecgl.forceAtlas2.calcGlobalSpeed

uniform sampler2D globalSpeedPrevTex;
uniform sampler2D weightedSumTex;
uniform float jitterTolerence;

void main() {
 vec2 weightedSum = texture2D(weightedSumTex, vec2(0.5)).xy;
 float prevGlobalSpeed = texture2D(globalSpeedPrevTex, vec2(0.5)).x;
 float globalSpeed = jitterTolerence * jitterTolerence
 * weightedSum.y / weightedSum.x;
 if (prevGlobalSpeed > 0.0) {
 globalSpeed = min(globalSpeed / prevGlobalSpeed, 1.5) * prevGlobalSpeed;
 }
 gl_FragColor = vec4(globalSpeed, 0.0, 0.0, 1.0);
}
@end

@export ecgl.forceAtlas2.updatePosition

uniform sampler2D forceTex;
uniform sampler2D forcePrevTex;
uniform sampler2D positionTex;
uniform sampler2D globalSpeedTex;

varying vec2 v_Texcoord;

void main() {
 vec2 force = texture2D(forceTex, v_Texcoord).xy;
 vec2 forcePrev = texture2D(forcePrevTex, v_Texcoord).xy;
 vec4 node = texture2D(positionTex, v_Texcoord);

 float globalSpeed = texture2D(globalSpeedTex, vec2(0.5)).r;
 float swing = length(force - forcePrev);
 float speed = 0.1 * globalSpeed / (0.1 + globalSpeed * sqrt(swing));

 float df = length(force);
 if (df > 0.0) {
 speed = min(df * speed, 10.0) / df;

 gl_FragColor = vec4(node.xy + speed * force, node.zw);
 }
 else {
 gl_FragColor = node;
 }
}
@end

@export ecgl.forceAtlas2.edges.vertex
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 node;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

uniform sampler2D positionTex;

void main()
{
 gl_Position = worldViewProjection * vec4(
 texture2D(positionTex, node).xy, -10.0, 1.0
 );
 v_Color = a_Color;
}
@end

@export ecgl.forceAtlas2.edges.fragment
uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
varying vec4 v_Color;
void main() {
 gl_FragColor = color * v_Color;
}
@end`);var Hc={repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null};function Uc(e){var t={type:Y.Texture.FLOAT,minFilter:Y.Texture.NEAREST,magFilter:Y.Texture.NEAREST};this._positionSourceTex=new Y.Texture2D(t),this._positionSourceTex.flipY=!1,this._positionTex=new Y.Texture2D(t),this._positionPrevTex=new Y.Texture2D(t),this._forceTex=new Y.Texture2D(t),this._forcePrevTex=new Y.Texture2D(t),this._weightedSumTex=new Y.Texture2D(t),this._weightedSumTex.width=this._weightedSumTex.height=1,this._globalSpeedTex=new Y.Texture2D(t),this._globalSpeedPrevTex=new Y.Texture2D(t),this._globalSpeedTex.width=this._globalSpeedTex.height=1,this._globalSpeedPrevTex.width=this._globalSpeedPrevTex.height=1,this._nodeRepulsionPass=new tt({fragment:Y.Shader.source(`ecgl.forceAtlas2.updateNodeRepulsion`)}),this._positionPass=new tt({fragment:Y.Shader.source(`ecgl.forceAtlas2.updatePosition`)}),this._globalSpeedPass=new tt({fragment:Y.Shader.source(`ecgl.forceAtlas2.calcGlobalSpeed`)}),this._copyPass=new tt({fragment:Y.Shader.source(`clay.compositor.output`)});var n=function(e){e.blendEquation(e.FUNC_ADD),e.blendFunc(e.ONE,e.ONE)};this._edgeForceMesh=new Y.Mesh({geometry:new Y.Geometry({attributes:{node1:new Y.Geometry.Attribute(`node1`,`float`,2),node2:new Y.Geometry.Attribute(`node2`,`float`,2),weight:new Y.Geometry.Attribute(`weight`,`float`,1)},dynamic:!0,mainAttribute:`node1`}),material:new Y.Material({transparent:!0,shader:Y.createShader(`ecgl.forceAtlas2.updateEdgeAttraction`),blend:n,depthMask:!1,depthText:!1}),mode:Y.Mesh.POINTS}),this._weightedSumMesh=new Y.Mesh({geometry:new Y.Geometry({attributes:{node:new Y.Geometry.Attribute(`node`,`float`,2)},dynamic:!0,mainAttribute:`node`}),material:new Y.Material({transparent:!0,shader:Y.createShader(`ecgl.forceAtlas2.calcWeightedSum`),blend:n,depthMask:!1,depthText:!1}),mode:Y.Mesh.POINTS}),this._framebuffer=new et({depthBuffer:!1}),this._dummyCamera=new Y.OrthographicCamera({left:-1,right:1,top:1,bottom:-1,near:0,far:100}),this._globalSpeed=0}Uc.prototype.updateOption=function(e){for(var t in Hc)this[t]=Hc[t];var n=this._nodes.length;if(n>5e4?this.jitterTolerence=10:n>5e3?this.jitterTolerence=1:this.jitterTolerence=.1,n>100?this.scaling=2:this.scaling=10,e)for(var t in Hc)e[t]!=null&&(this[t]=e[t]);if(this.repulsionByDegree)for(var r=this._positionSourceTex.pixels,i=0;i<this._nodes.length;i++)r[i*4+2]=(this._nodes[i].degree||0)+1},Uc.prototype._updateGravityCenter=function(e){var t=this._nodes,n=this._edges;if(this.gravityCenter)this._gravityCenter=this.gravityCenter;else{for(var r=[1/0,1/0],i=[-1/0,-1/0],a=0;a<t.length;a++)r[0]=Math.min(t[a].x,r[0]),r[1]=Math.min(t[a].y,r[1]),i[0]=Math.max(t[a].x,i[0]),i[1]=Math.max(t[a].y,i[1]);this._gravityCenter=[(r[0]+i[0])*.5,(r[1]+i[1])*.5]}for(var a=0;a<n.length;a++){var o=n[a].node1,s=n[a].node2;t[o].degree=(t[o].degree||0)+1,t[s].degree=(t[s].degree||0)+1}},Uc.prototype.initData=function(e,t){this._nodes=e,this._edges=t,this._updateGravityCenter();var n=Math.ceil(Math.sqrt(e.length)),r=n,i=new Float32Array(n*r*4);this._resize(n,r);for(var a=0,o=0;o<e.length;o++){var s=e[o];i[a++]=s.x||0,i[a++]=s.y||0,i[a++]=s.mass||1,i[a++]=s.size||1}this._positionSourceTex.pixels=i;var c=this._edgeForceMesh.geometry,l=t.length;c.attributes.node1.init(l*2),c.attributes.node2.init(l*2),c.attributes.weight.init(l*2);for(var u=[],o=0;o<t.length;o++){var d=c.attributes,f=t[o].weight;f??=1,d.node1.set(o,this.getNodeUV(t[o].node1,u)),d.node2.set(o,this.getNodeUV(t[o].node2,u)),d.weight.set(o,f),d.node1.set(o+l,this.getNodeUV(t[o].node2,u)),d.node2.set(o+l,this.getNodeUV(t[o].node1,u)),d.weight.set(o+l,f)}var p=this._weightedSumMesh.geometry;p.attributes.node.init(e.length);for(var o=0;o<e.length;o++)p.attributes.node.set(o,this.getNodeUV(o,u));c.dirty(),p.dirty(),this._nodeRepulsionPass.material.define(`fragment`,`NODE_COUNT`,e.length),this._nodeRepulsionPass.material.setUniform(`textureSize`,[n,r]),this._inited=!1,this._frame=0},Uc.prototype.getNodes=function(){return this._nodes},Uc.prototype.getEdges=function(){return this._edges},Uc.prototype.step=function(e){this._inited||=(this._initFromSource(e),!0),this._frame++,this._framebuffer.attach(this._forceTex),this._framebuffer.bind(e);var t=this._nodeRepulsionPass;t.setUniform(`strongGravityMode`,this.strongGravityMode),t.setUniform(`gravity`,this.gravity),t.setUniform(`gravityCenter`,this._gravityCenter),t.setUniform(`scaling`,this.scaling),t.setUniform(`preventOverlap`,this.preventOverlap),t.setUniform(`positionTex`,this._positionPrevTex),t.render(e);var n=this._edgeForceMesh;n.material.set(`linLogMode`,this.linLogMode),n.material.set(`edgeWeightInfluence`,this.edgeWeightInfluence),n.material.set(`preventOverlap`,this.preventOverlap),n.material.set(`positionTex`,this._positionPrevTex),e.gl.enable(e.gl.BLEND),e.renderPass([n],this._dummyCamera),this._framebuffer.attach(this._weightedSumTex),e.gl.clearColor(0,0,0,0),e.gl.clear(e.gl.COLOR_BUFFER_BIT),e.gl.enable(e.gl.BLEND);var r=this._weightedSumMesh;r.material.set(`positionTex`,this._positionPrevTex),r.material.set(`forceTex`,this._forceTex),r.material.set(`forcePrevTex`,this._forcePrevTex),e.renderPass([r],this._dummyCamera),this._framebuffer.attach(this._globalSpeedTex);var i=this._globalSpeedPass;i.setUniform(`globalSpeedPrevTex`,this._globalSpeedPrevTex),i.setUniform(`weightedSumTex`,this._weightedSumTex),i.setUniform(`jitterTolerence`,this.jitterTolerence),e.gl.disable(e.gl.BLEND),i.render(e);var a=this._positionPass;this._framebuffer.attach(this._positionTex),a.setUniform(`globalSpeedTex`,this._globalSpeedTex),a.setUniform(`positionTex`,this._positionPrevTex),a.setUniform(`forceTex`,this._forceTex),a.setUniform(`forcePrevTex`,this._forcePrevTex),a.render(e),this._framebuffer.unbind(e),this._swapTexture()},Uc.prototype.update=function(e,t,n){t??=1,t=Math.max(t,1);for(var r=0;r<t;r++)this.step(e);n&&n()},Uc.prototype.getNodePositionTexture=function(){return this._inited?this._positionPrevTex:this._positionSourceTex},Uc.prototype.getNodeUV=function(e,t){t||=[];var n=this._positionTex.width,r=this._positionTex.height;return t[0]=e%n/(n-1),t[1]=Math.floor(e/n)/(r-1)||0,t},Uc.prototype.getNodePosition=function(e,t){var n=this._positionArr,r=this._positionTex.width,i=this._positionTex.height,a=r*i;(!n||n.length!==a*4)&&(n=this._positionArr=new Float32Array(a*4)),this._framebuffer.bind(e),this._framebuffer.attach(this._positionPrevTex),e.gl.readPixels(0,0,r,i,e.gl.RGBA,e.gl.FLOAT,n),this._framebuffer.unbind(e),t||=new Float32Array(this._nodes.length*2);for(var o=0;o<this._nodes.length;o++)t[o*2]=n[o*4],t[o*2+1]=n[o*4+1];return t},Uc.prototype.getTextureData=function(e,t){var n=this[`_`+t+`Tex`],r=n.width,i=n.height;this._framebuffer.bind(e),this._framebuffer.attach(n);var a=new Float32Array(r*i*4);return e.gl.readPixels(0,0,r,i,e.gl.RGBA,e.gl.FLOAT,a),this._framebuffer.unbind(e),a},Uc.prototype.getTextureSize=function(){return{width:this._positionTex.width,height:this._positionTex.height}},Uc.prototype.isFinished=function(e){return this._frame>e},Uc.prototype._swapTexture=function(){var e=this._positionPrevTex;this._positionPrevTex=this._positionTex,this._positionTex=e;var e=this._forcePrevTex;this._forcePrevTex=this._forceTex,this._forceTex=e;var e=this._globalSpeedPrevTex;this._globalSpeedPrevTex=this._globalSpeedTex,this._globalSpeedTex=e},Uc.prototype._initFromSource=function(e){this._framebuffer.attach(this._positionPrevTex),this._framebuffer.bind(e),this._copyPass.setUniform(`texture`,this._positionSourceTex),this._copyPass.render(e),e.gl.clearColor(0,0,0,0),this._framebuffer.attach(this._forcePrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.attach(this._globalSpeedPrevTex),e.gl.clear(e.gl.COLOR_BUFFER_BIT),this._framebuffer.unbind(e)},Uc.prototype._resize=function(e,t){[`_positionSourceTex`,`_positionTex`,`_positionPrevTex`,`_forceTex`,`_forcePrevTex`].forEach(function(n){this[n].width=e,this[n].height=t,this[n].dirty()},this)},Uc.prototype.dispose=function(e){this._framebuffer.dispose(e),this._copyPass.dispose(e),this._nodeRepulsionPass.dispose(e),this._positionPass.dispose(e),this._globalSpeedPass.dispose(e),this._edgeForceMesh.geometry.dispose(e),this._weightedSumMesh.geometry.dispose(e),this._positionSourceTex.dispose(e),this._positionTex.dispose(e),this._positionPrevTex.dispose(e),this._forceTex.dispose(e),this._forcePrevTex.dispose(e),this._weightedSumTex.dispose(e),this._globalSpeedTex.dispose(e),this._globalSpeedPrevTex.dispose(e)};function Wc(){var e={create:function(){return new Float32Array(2)},dist:function(e,t){var n=t[0]-e[0],r=t[1]-e[1];return Math.sqrt(n*n+r*r)},len:function(e){var t=e[0],n=e[1];return Math.sqrt(t*t+n*n)},scaleAndAdd:function(e,t,n,r){return e[0]=t[0]+n[0]*r,e[1]=t[1]+n[1]*r,e},scale:function(e,t,n){return e[0]=t[0]*n,e[1]=t[1]*n,e},add:function(e,t,n){return e[0]=t[0]+n[0],e[1]=t[1]+n[1],e},sub:function(e,t,n){return e[0]=t[0]-n[0],e[1]=t[1]-n[1],e},normalize:function(e,t){var n=t[0],r=t[1],i=n*n+r*r;return i>0&&(i=1/Math.sqrt(i),e[0]=t[0]*i,e[1]=t[1]*i),e},negate:function(e,t){return e[0]=-t[0],e[1]=-t[1],e},copy:function(e,t){return e[0]=t[0],e[1]=t[1],e},set:function(e,t,n){return e[0]=t,e[1]=n,e}};function t(){this.subRegions=[],this.nSubRegions=0,this.node=null,this.mass=0,this.centerOfMass=null,this.bbox=new Float32Array(4),this.size=0}var n=t.prototype;n.beforeUpdate=function(){for(var e=0;e<this.nSubRegions;e++)this.subRegions[e].beforeUpdate();this.mass=0,this.centerOfMass&&(this.centerOfMass[0]=0,this.centerOfMass[1]=0),this.nSubRegions=0,this.node=null},n.afterUpdate=function(){this.subRegions.length=this.nSubRegions;for(var e=0;e<this.nSubRegions;e++)this.subRegions[e].afterUpdate()},n.addNode=function(e){if(this.nSubRegions===0)if(this.node==null){this.node=e;return}else this._addNodeToSubRegion(this.node),this.node=null;this._addNodeToSubRegion(e),this._updateCenterOfMass(e)},n.findSubRegion=function(e,t){for(var n=0;n<this.nSubRegions;n++){var r=this.subRegions[n];if(r.contain(e,t))return r}},n.contain=function(e,t){return this.bbox[0]<=e&&this.bbox[2]>=e&&this.bbox[1]<=t&&this.bbox[3]>=t},n.setBBox=function(e,t,n,r){this.bbox[0]=e,this.bbox[1]=t,this.bbox[2]=n,this.bbox[3]=r,this.size=(n-e+r-t)/2},n._newSubRegion=function(){var e=this.subRegions[this.nSubRegions];return e||(e=new t,this.subRegions[this.nSubRegions]=e),this.nSubRegions++,e},n._addNodeToSubRegion=function(e){var t=this.findSubRegion(e.position[0],e.position[1]),n=this.bbox;if(!t){var r=(n[0]+n[2])/2,i=(n[1]+n[3])/2,a=(n[2]-n[0])/2,o=(n[3]-n[1])/2,s=+(e.position[0]>=r),c=+(e.position[1]>=i),t=this._newSubRegion();t.setBBox(s*a+n[0],c*o+n[1],(s+1)*a+n[0],(c+1)*o+n[1])}t.addNode(e)},n._updateCenterOfMass=function(e){this.centerOfMass??=new Float32Array(2);var t=this.centerOfMass[0]*this.mass,n=this.centerOfMass[1]*this.mass;t+=e.position[0]*e.mass,n+=e.position[1]*e.mass,this.mass+=e.mass,this.centerOfMass[0]=t/this.mass,this.centerOfMass[1]=n/this.mass};function r(){this.position=new Float32Array(2),this.force=e.create(),this.forcePrev=e.create(),this.mass=1,this.inDegree=0,this.outDegree=0}function i(e,t){this.source=e,this.target=t,this.weight=1}function a(){this.autoSettings=!0,this.barnesHutOptimize=!0,this.barnesHutTheta=1.5,this.repulsionByDegree=!0,this.linLogMode=!1,this.strongGravityMode=!1,this.gravity=1,this.scaling=1,this.edgeWeightInfluence=1,this.jitterTolerence=.1,this.preventOverlap=!1,this.dissuadeHubs=!1,this.rootRegion=new t,this.rootRegion.centerOfMass=e.create(),this.nodes=[],this.edges=[],this.bbox=new Float32Array(4),this.gravityCenter=null,this._massArr=null,this._swingingArr=null,this._sizeArr=null,this._globalSpeed=0}var o=a.prototype;o.initNodes=function(e,t,n){var i=t.length;this.nodes.length=0;for(var a=n!==void 0,o=0;o<i;o++){var s=new r;s.position[0]=e[o*2],s.position[1]=e[o*2+1],s.mass=t[o],a&&(s.size=n[o]),this.nodes.push(s)}this._massArr=t,this._swingingArr=new Float32Array(i),a&&(this._sizeArr=n)},o.initEdges=function(e,t){var n=e.length/2;this.edges.length=0;for(var r=0;r<n;r++){var a=e[r*2],o=e[r*2+1],s=this.nodes[a],c=this.nodes[o];if(!s||!c){console.error(`Node not exists, try initNodes before initEdges`);return}s.outDegree++,c.inDegree++;var l=new i(s,c);t&&(l.weight=t[r]),this.edges.push(l)}},o.updateSettings=function(){if(this.repulsionByDegree)for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];t.mass=t.inDegree+t.outDegree+1}else for(var e=0;e<this.nodes.length;e++){var t=this.nodes[e];t.mass=this._massArr[e]}},o.update=function(){var t=this.nodes.length;if(this.updateSettings(),this.updateBBox(),this.barnesHutOptimize){this.rootRegion.setBBox(this.bbox[0],this.bbox[1],this.bbox[2],this.bbox[3]),this.rootRegion.beforeUpdate();for(var n=0;n<t;n++)this.rootRegion.addNode(this.nodes[n]);this.rootRegion.afterUpdate()}for(var n=0;n<t;n++){var r=this.nodes[n];e.copy(r.forcePrev,r.force),e.set(r.force,0,0)}for(var n=0;n<t;n++){var i=this.nodes[n];if(this.barnesHutOptimize)this.applyRegionToNodeRepulsion(this.rootRegion,i);else for(var a=n+1;a<t;a++){var o=this.nodes[a];this.applyNodeToNodeRepulsion(i,o,!1)}this.gravity>0&&(this.strongGravityMode?this.applyNodeStrongGravity(i):this.applyNodeGravity(i))}for(var n=0;n<this.edges.length;n++)this.applyEdgeAttraction(this.edges[n]);for(var s=0,c=0,l=e.create(),n=0;n<t;n++){var r=this.nodes[n],u=e.dist(r.force,r.forcePrev);s+=u*r.mass,e.add(l,r.force,r.forcePrev);var d=e.len(l)*.5;c+=d*r.mass,this._swingingArr[n]=u}var f=this.jitterTolerence*this.jitterTolerence*c/s;this._globalSpeed>0&&(f=Math.min(f/this._globalSpeed,1.5)*this._globalSpeed),this._globalSpeed=f;for(var n=0;n<t;n++){var r=this.nodes[n],u=this._swingingArr[n],p=.1*f/(1+f*Math.sqrt(u)),m=e.len(r.force);m>0&&(p=Math.min(m*p,10)/m,e.scaleAndAdd(r.position,r.position,r.force,p))}},o.applyRegionToNodeRepulsion=function(){var t=e.create();return function(n,r){if(n.node)this.applyNodeToNodeRepulsion(n.node,r,!0);else{e.sub(t,r.position,n.centerOfMass);var i=t[0]*t[0]+t[1]*t[1];if(i>this.barnesHutTheta*n.size*n.size){var a=this.scaling*r.mass*n.mass/i;e.scaleAndAdd(r.force,r.force,t,a)}else for(var o=0;o<n.nSubRegions;o++)this.applyRegionToNodeRepulsion(n.subRegions[o],r)}}}(),o.applyNodeToNodeRepulsion=function(){var t=e.create();return function(n,r,i){if(n!=r){e.sub(t,n.position,r.position);var a=t[0]*t[0]+t[1]*t[1];if(a!==0){var o;if(this.preventOverlap){var s=Math.sqrt(a);if(s=s-n.size-r.size,s>0)o=this.scaling*n.mass*r.mass/(s*s);else if(s<0)o=this.scaling*100*n.mass*r.mass;else return}else o=this.scaling*n.mass*r.mass/a;e.scaleAndAdd(n.force,n.force,t,o),e.scaleAndAdd(r.force,r.force,t,-o)}}}}(),o.applyEdgeAttraction=function(){var t=e.create();return function(n){var r=n.source,i=n.target;e.sub(t,r.position,i.position);var a=e.len(t),o=this.edgeWeightInfluence===0?1:this.edgeWeightInfluence===1?n.weight:n.weight**+this.edgeWeightInfluence,s;this.preventOverlap&&(a=a-r.size-i.size,a<=0)||(s=this.linLogMode?-o*Math.log(a+1)/(a+1):-o,e.scaleAndAdd(r.force,r.force,t,s),e.scaleAndAdd(i.force,i.force,t,-s))}}(),o.applyNodeGravity=function(){var t=e.create();return function(n){e.sub(t,this.gravityCenter,n.position);var r=e.len(t);e.scaleAndAdd(n.force,n.force,t,this.gravity*n.mass/(r+1))}}(),o.applyNodeStrongGravity=function(){var t=e.create();return function(n){e.sub(t,this.gravityCenter,n.position),e.scaleAndAdd(n.force,n.force,t,this.gravity*n.mass)}}(),o.updateBBox=function(){for(var e=1/0,t=1/0,n=-1/0,r=-1/0,i=0;i<this.nodes.length;i++){var a=this.nodes[i].position;e=Math.min(e,a[0]),t=Math.min(t,a[1]),n=Math.max(n,a[0]),r=Math.max(r,a[1])}this.bbox[0]=e,this.bbox[1]=t,this.bbox[2]=n,this.bbox[3]=r},o.getGlobalSpeed=function(){return this._globalSpeed};var s=null;self.onmessage=function(e){switch(e.data.cmd){case`init`:s=new a,s.initNodes(e.data.nodesPosition,e.data.nodesMass,e.data.nodesSize),s.initEdges(e.data.edges,e.data.edgesWeight);break;case`updateConfig`:if(s)for(var t in e.data.config)s[t]=e.data.config[t];break;case`update`:var n=e.data.steps;if(s){for(var r=0;r<n;r++)s.update();for(var i=s.nodes.length,o=new Float32Array(i*2),r=0;r<i;r++){var c=s.nodes[r];o[r*2]=c.position[0],o[r*2+1]=c.position[1]}self.postMessage({buffer:o.buffer,globalSpeed:s.getGlobalSpeed()},[o.buffer])}else{var l=new Float32Array;self.postMessage({buffer:l.buffer,globalSpeed:s.getGlobalSpeed()},[l.buffer])}break}}}var Gc=Wc.toString();Gc=Gc.slice(Gc.indexOf(`{`)+1,Gc.lastIndexOf(`}`));var Kc={barnesHutOptimize:!0,barnesHutTheta:1.5,repulsionByDegree:!0,linLogMode:!1,strongGravityMode:!1,gravity:1,scaling:1,edgeWeightInfluence:1,jitterTolerence:.1,preventOverlap:!1,dissuadeHubs:!1,gravityCenter:null},qc=function(e){for(var t in Kc)this[t]=Kc[t];if(e)for(var t in e)this[t]=e[t];this._nodes=[],this._edges=[],this._disposed=!1,this._positionTex=new U({type:H.FLOAT,flipY:!1,minFilter:H.NEAREST,magFilter:H.NEAREST})};qc.prototype.initData=function(e,t){var n=new Blob([Gc]),r=window.URL.createObjectURL(n);this._worker=new Worker(r),this._worker.onmessage=this._$onupdate.bind(this),this._nodes=e,this._edges=t,this._frame=0;for(var i=e.length,a=t.length,o=new Float32Array(i*2),s=new Float32Array(i),c=new Float32Array(i),l=new Float32Array(a*2),u=new Float32Array(a),d=0;d<e.length;d++){var f=e[d];o[d*2]=f.x,o[d*2+1]=f.y,s[d]=f.mass==null?1:f.mass,c[d]=f.size==null?1:f.size}for(var d=0;d<t.length;d++){var p=t[d],m=p.node1,h=p.node2;l[d*2]=m,l[d*2+1]=h,u[d]=p.weight==null?1:p.weight}var g=Math.ceil(Math.sqrt(e.length)),_=g,v=new Float32Array(g*_*4),y=this._positionTex;y.width=g,y.height=_,y.pixels=v,this._worker.postMessage({cmd:`init`,nodesPosition:o,nodesMass:s,nodesSize:c,edges:l,edgesWeight:u}),this._globalSpeed=1/0},qc.prototype.updateOption=function(e){var t={};for(var n in Kc)t[n]=Kc[n];var r=this._nodes,i=this._edges,a=r.length;if(a>5e4?t.jitterTolerence=10:a>5e3?t.jitterTolerence=1:t.jitterTolerence=.1,a>100?t.scaling=2:t.scaling=10,a>1e3?t.barnesHutOptimize=!0:t.barnesHutOptimize=!1,e)for(var n in Kc)e[n]!=null&&(t[n]=e[n]);if(!t.gravityCenter){for(var o=[1/0,1/0],s=[-1/0,-1/0],c=0;c<r.length;c++)o[0]=Math.min(r[c].x,o[0]),o[1]=Math.min(r[c].y,o[1]),s[0]=Math.max(r[c].x,s[0]),s[1]=Math.max(r[c].y,s[1]);t.gravityCenter=[(o[0]+s[0])*.5,(o[1]+s[1])*.5]}for(var c=0;c<i.length;c++){var l=i[c].node1,u=i[c].node2;r[l].degree=(r[l].degree||0)+1,r[u].degree=(r[u].degree||0)+1}this._worker&&this._worker.postMessage({cmd:`updateConfig`,config:t})},qc.prototype.update=function(e,t,n){t??=1,t=Math.max(t,1),this._frame+=t,this._onupdate=n,this._worker&&this._worker.postMessage({cmd:`update`,steps:Math.round(t)})},qc.prototype._$onupdate=function(e){if(!this._disposed){var t=new Float32Array(e.data.buffer);this._globalSpeed=e.data.globalSpeed,this._positionArr=t,this._updateTexture(t),this._onupdate&&this._onupdate()}},qc.prototype.getNodePositionTexture=function(){return this._positionTex},qc.prototype.getNodeUV=function(e,t){t||=[];var n=this._positionTex.width,r=this._positionTex.height;return t[0]=e%n/(n-1),t[1]=Math.floor(e/n)/(r-1),t},qc.prototype.getNodes=function(){return this._nodes},qc.prototype.getEdges=function(){return this._edges},qc.prototype.isFinished=function(e){return this._frame>e},qc.prototype.getNodePosition=function(e,t){if(t||=new Float32Array(this._nodes.length*2),this._positionArr)for(var n=0;n<this._positionArr.length;n++)t[n]=this._positionArr[n];return t},qc.prototype._updateTexture=function(e){for(var t=this._positionTex.pixels,n=0,r=0;r<e.length;)t[n++]=e[r++],t[n++]=e[r++],t[n++]=1,t[n++]=1;this._positionTex.dirty()},qc.prototype.dispose=function(e){this._disposed=!0,this._worker=null};var Jc=He.extend(function(){return{zr:null,viewGL:null,minZoom:.2,maxZoom:5,_needsUpdate:!1,_dx:0,_dy:0,_zoom:1}},function(){this._mouseDownHandler=this._mouseDownHandler.bind(this),this._mouseWheelHandler=this._mouseWheelHandler.bind(this),this._mouseMoveHandler=this._mouseMoveHandler.bind(this),this._mouseUpHandler=this._mouseUpHandler.bind(this),this._update=this._update.bind(this)},{init:function(){var e=this.zr;e.on(`mousedown`,this._mouseDownHandler),e.on(`mousewheel`,this._mouseWheelHandler),e.on(`globalout`,this._mouseUpHandler),e.animation.on(`frame`,this._update)},setTarget:function(e){this._target=e},setZoom:function(e){this._zoom=Math.max(Math.min(e,this.maxZoom),this.minZoom),this._needsUpdate=!0},setOffset:function(e){this._dx=e[0],this._dy=e[1],this._needsUpdate=!0},getZoom:function(){return this._zoom},getOffset:function(){return[this._dx,this._dy]},_update:function(){if(this._target&&this._needsUpdate){var e=this._target,t=this._zoom;e.position.x=this._dx,e.position.y=this._dy,e.scale.set(t,t,t),this.zr.refresh(),this._needsUpdate=!1,this.trigger(`update`)}},_mouseDownHandler:function(e){if(!e.target){var t=e.offsetX,n=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(t,n))){this.zr.on(`mousemove`,this._mouseMoveHandler),this.zr.on(`mouseup`,this._mouseUpHandler);var r=this._convertPos(t,n);this._x=r.x,this._y=r.y}}},_convertPos:function(e,t){var n=this.viewGL.camera,r=this.viewGL.viewport;return{x:(e-r.x)/r.width*(n.right-n.left)+n.left,y:(t-r.y)/r.height*(n.bottom-n.top)+n.top}},_mouseMoveHandler:function(e){var t=this._convertPos(e.offsetX,e.offsetY);this._dx+=t.x-this._x,this._dy+=t.y-this._y,this._x=t.x,this._y=t.y,this._needsUpdate=!0},_mouseUpHandler:function(e){this.zr.off(`mousemove`,this._mouseMoveHandler),this.zr.off(`mouseup`,this._mouseUpHandler)},_mouseWheelHandler:function(e){e=e.event;var t=e.wheelDelta||-e.detail;if(t!==0){var n=e.offsetX,r=e.offsetY;if(!(this.viewGL&&!this.viewGL.containPoint(n,r))){var i=t>0?1.1:.9,a=Math.max(Math.min(this._zoom*i,this.maxZoom),this.minZoom);i=a/this._zoom;var o=this._convertPos(n,r),s=(o.x-this._dx)*(i-1),c=(o.y-this._dy)*(i-1);this._dx-=s,this._dy-=c,this._zoom=a,this._needsUpdate=!0}}},dispose:function(){var e=this.zr;e.off(`mousedown`,this._mouseDownHandler),e.off(`mousemove`,this._mouseMoveHandler),e.off(`mouseup`,this._mouseUpHandler),e.off(`mousewheel`,this._mouseWheelHandler),e.off(`globalout`,this._mouseUpHandler),e.animation.off(`frame`,this._update)}}),Yc=`@export ecgl.lines2D.vertex

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

attribute vec2 position: POSITION;
attribute vec4 a_Color : COLOR;
varying vec4 v_Color;

#ifdef POSITIONTEXTURE_ENABLED
uniform sampler2D positionTexture;
#endif

void main()
{
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 v_Color = a_Color;
}

@end

@export ecgl.lines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;

void main()
{
 gl_FragColor = color * v_Color;
}
@end


@export ecgl.meshLines2D.vertex

attribute vec2 position: POSITION;
attribute vec2 normal;
attribute float offset;
attribute vec4 a_Color : COLOR;

uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;
uniform vec4 viewport : VIEWPORT;

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 vec4 p2 = worldViewProjection * vec4(position + normal, -10.0, 1.0);
 gl_Position = worldViewProjection * vec4(position, -10.0, 1.0);

 p2.xy /= p2.w;
 gl_Position.xy /= gl_Position.w;

 vec2 N = normalize(p2.xy - gl_Position.xy);
 gl_Position.xy += N * offset / viewport.zw * 2.0;

 gl_Position.xy *= gl_Position.w;

 v_Color = a_Color;
}
@end


@export ecgl.meshLines2D.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];

varying vec4 v_Color;
varying float v_Miter;

void main()
{
 gl_FragColor = color * v_Color;
}

@end`,Xc=ur.vec2;Y.Shader.import(Yc);var Zc=1,Qc=l.extend({type:`graphGL`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this.viewGL=new Q(`orthographic`),this.viewGL.camera.left=this.viewGL.camera.right=0,this.viewGL.add(this.groupGL),this._pointsBuilder=new Hs(!0,t),this._forceEdgesMesh=new Y.Mesh({material:new Y.Material({shader:Y.createShader(`ecgl.forceAtlas2.edges`),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new Y.Geometry({attributes:{node:new Y.Geometry.Attribute(`node`,`float`,2),color:new Y.Geometry.Attribute(`color`,`float`,4,`COLOR`)},dynamic:!0,mainAttribute:`node`}),renderOrder:-1,mode:Y.Mesh.LINES}),this._edgesMesh=new Y.Mesh({material:new Y.Material({shader:Y.createShader(`ecgl.meshLines2D`),transparent:!0,depthMask:!1,depthTest:!1}),$ignorePicking:!0,geometry:new Vc({useNativeLine:!1,dynamic:!0}),renderOrder:-1,culling:!1}),this._layoutId=0,this._control=new Jc({zr:t.getZr(),viewGL:this.viewGL}),this._control.setTarget(this.groupGL),this._control.init(),this._clickHandler=this._clickHandler.bind(this)},render:function(e,t,n){this.groupGL.add(this._pointsBuilder.rootNode),this._model=e,this._api=n,this._initLayout(e,t,n),this._pointsBuilder.update(e,t,n),this._forceLayoutInstance instanceof Uc||this.groupGL.remove(this._forceEdgesMesh),this._updateCamera(e,n),this._control.off(`update`),this._control.on(`update`,function(){n.dispatchAction({type:`graphGLRoam`,seriesId:e.id,zoom:this._control.getZoom(),offset:this._control.getOffset()}),this._pointsBuilder.updateView(this.viewGL.camera)},this),this._control.setZoom(G.firstNotNull(e.get(`zoom`),1)),this._control.setOffset(e.get(`offset`)||[0,0]);var r=this._pointsBuilder.getPointsMesh();if(r.off(`mousemove`,this._mousemoveHandler),r.off(`mouseout`,this._mouseOutHandler,this),n.getZr().off(`click`,this._clickHandler),this._pointsBuilder.highlightOnMouseover=!0,e.get(`focusNodeAdjacency`)){var i=e.get(`focusNodeAdjacencyOn`);i===`click`?n.getZr().on(`click`,this._clickHandler):i===`mouseover`&&(r.on(`mousemove`,this._mousemoveHandler,this),r.on(`mouseout`,this._mouseOutHandler,this),this._pointsBuilder.highlightOnMouseover=!1)}this._lastMouseOverDataIndex=-1},_clickHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?this._api.dispatchAction({type:`graphGLFocusNodeAdjacency`,seriesId:this._model.id,dataIndex:t}):this._api.dispatchAction({type:`graphGLUnfocusNodeAdjacency`,seriesId:this._model.id})}},_mousemoveHandler:function(e){if(!this._layouting){var t=this._pointsBuilder.getPointsMesh().dataIndex;t>=0?t!==this._lastMouseOverDataIndex&&this._api.dispatchAction({type:`graphGLFocusNodeAdjacency`,seriesId:this._model.id,dataIndex:t}):this._mouseOutHandler(e),this._lastMouseOverDataIndex=t}},_mouseOutHandler:function(e){this._layouting||(this._api.dispatchAction({type:`graphGLUnfocusNodeAdjacency`,seriesId:this._model.id}),this._lastMouseOverDataIndex=-1)},_updateForceEdgesGeometry:function(e,t){var n=this._forceEdgesMesh.geometry,r=t.getEdgeData(),i=0,a=this._forceLayoutInstance,o=r.count()*2;n.attributes.node.init(o),n.attributes.color.init(o),r.each(function(t){var o=e[t];n.attributes.node.set(i,a.getNodeUV(o.node1)),n.attributes.node.set(i+1,a.getNodeUV(o.node2));var s=Na(r,o.dataIndex),c=Y.parseColor(s);c[3]*=G.firstNotNull(Pa(r,o.dataIndex),1),n.attributes.color.set(i,c),n.attributes.color.set(i+1,c),i+=2}),n.dirty()},_updateMeshLinesGeometry:function(){var e=this._model.getEdgeData(),t=this._edgesMesh.geometry,e=this._model.getEdgeData(),n=this._model.getData().getLayout(`points`);t.resetOffset(),t.setVertexCount(e.count()*t.getLineVertexCount()),t.setTriangleCount(e.count()*t.getLineTriangleCount());var r=[],i=[],a=[`lineStyle`,`width`];this._originalEdgeColors=new Float32Array(e.count()*4),this._edgeIndicesMap=new Float32Array(e.count()),e.each(function(o){var s=e.graph.getEdgeByIndex(o),c=s.node1.dataIndex*2,l=s.node2.dataIndex*2;r[0]=n[c],r[1]=n[c+1],i[0]=n[l],i[1]=n[l+1];var u=Na(e,s.dataIndex),d=Y.parseColor(u);d[3]*=G.firstNotNull(Pa(e,s.dataIndex),1);var f=e.getItemModel(s.dataIndex),p=G.firstNotNull(f.get(a),1)*this._api.getDevicePixelRatio();t.addLine(r,i,d,p);for(var m=0;m<4;m++)this._originalEdgeColors[s.dataIndex*4+m]=d[m];this._edgeIndicesMap[s.dataIndex]=o},this),t.dirty()},_updateForceNodesGeometry:function(e){for(var t=this._pointsBuilder.getPointsMesh(),n=[],r=0;r<e.count();r++)this._forceLayoutInstance.getNodeUV(r,n),t.geometry.attributes.position.set(r,n);t.geometry.dirty(`position`)},_initLayout:function(e,t,n){var r=e.get(`layout`),i=e.getGraph(),o=te(e.getBoxLayoutParams(),{width:n.getWidth(),height:n.getHeight()});r===`force`&&(r=`forceAtlas2`),this.stopLayout(e,t,n,{beforeLayout:!0});var s=e.getData(),c=e.getData();if(r===`forceAtlas2`){var l=e.getModel(`forceAtlas2`),u=this._forceLayoutInstance,d=[],f=[],p=s.getDataExtent(`value`),m=c.getDataExtent(`value`),h=G.firstNotNull(l.get(`edgeWeight`),1),g=G.firstNotNull(l.get(`nodeWeight`),1);typeof h==`number`&&(h=[h,h]),typeof g==`number`&&(g=[g,g]);var _=0,v={},y=new Float32Array(s.count()*2);if(i.eachNode(function(e){var t=e.dataIndex,n=s.get(`value`,t),r,i;if(s.hasItemOption){var c=s.getItemModel(t);r=c.get(`x`),i=c.get(`y`)}r??(r=o.x+Math.random()*o.width,i=o.y+Math.random()*o.height),y[_*2]=r,y[_*2+1]=i,v[e.id]=_++;var l=a(n,p,g);isNaN(l)&&(l=isNaN(g[0])?1:g[0]),d.push({x:r,y:i,mass:l,size:s.getItemVisual(t,`symbolSize`)})}),s.setLayout(`points`,y),i.eachEdge(function(e){var t=e.dataIndex,n=a(s.get(`value`,t),m,h);isNaN(n)&&(n=isNaN(h[0])?1:h[0]),f.push({node1:v[e.node1.id],node2:v[e.node2.id],weight:n,dataIndex:t})}),!u){var b=l.get(`GPU`);this._forceLayoutInstance&&(b&&!(this._forceLayoutInstance instanceof Uc)||!b&&!(this._forceLayoutInstance instanceof qc))&&(this._forceLayoutInstanceToDispose=this._forceLayoutInstance),u=this._forceLayoutInstance=b?new Uc:new qc}u.initData(d,f),u.updateOption(l.option),this._updateForceEdgesGeometry(u.getEdges(),e),this._updatePositionTexture(),n.dispatchAction({type:`graphGLStartLayout`,from:this.uid})}else{var y=new Float32Array(s.count()*2),_=0;i.eachNode(function(e){var t=e.dataIndex,n,r;if(s.hasItemOption){var i=s.getItemModel(t);n=i.get(`x`),r=i.get(`y`)}y[_++]=n,y[_++]=r}),s.setLayout(`points`,y),this._updateAfterLayout(e,t,n)}},_updatePositionTexture:function(){var e=this._forceLayoutInstance.getNodePositionTexture();this._pointsBuilder.setPositionTexture(e),this._forceEdgesMesh.material.set(`positionTex`,e)},startLayout:function(e,t,n,r){if(!(r&&r.from!=null&&r.from!==this.uid)){var i=this.viewGL,n=this._api,a=this._forceLayoutInstance,o=this._model.getData(),s=this._model.getModel(`forceAtlas2`);if(a&&(this.groupGL.remove(this._edgesMesh),this.groupGL.add(this._forceEdgesMesh),this._forceLayoutInstance)){this._updateForceNodesGeometry(e.getData()),this._pointsBuilder.hideLabels();var c=this,l=this._layoutId=Zc++,u=s.getShallow(`maxSteps`),d=s.getShallow(`steps`),f=0,p=Math.max(d*2,20),m=function(t){if(t===c._layoutId){if(a.isFinished(u)){n.dispatchAction({type:`graphGLStopLayout`,from:c.uid}),n.dispatchAction({type:`graphGLFinishLayout`,points:o.getLayout(`points`),from:c.uid});return}a.update(i.layer.renderer,d,function(){c._updatePositionTexture(),f+=d,f>=p&&(c._syncNodePosition(e),f=0),n.getZr().refresh(),se(function(){m(t)})})}};se(function(){c._forceLayoutInstanceToDispose&&=(c._forceLayoutInstanceToDispose.dispose(i.layer.renderer),null),m(l)}),this._layouting=!0}}},stopLayout:function(e,t,n,r){r&&r.from!=null&&r.from!==this.uid||(this._layoutId=0,this.groupGL.remove(this._forceEdgesMesh),this.groupGL.add(this._edgesMesh),this._forceLayoutInstance&&this.viewGL.layer&&(r&&r.beforeLayout||(this._syncNodePosition(e),this._updateAfterLayout(e,t,n)),this._api.getZr().refresh(),this._layouting=!1))},_syncNodePosition:function(e){var t=this._forceLayoutInstance.getNodePosition(this.viewGL.layer.renderer);e.getData().setLayout(`points`,t),e.setNodePosition(t)},_updateAfterLayout:function(e,t,n){this._updateMeshLinesGeometry(),this._pointsBuilder.removePositionTexture(),this._pointsBuilder.updateLayout(e,t,n),this._pointsBuilder.updateView(this.viewGL.camera),this._pointsBuilder.updateLabels(),this._pointsBuilder.showLabels()},focusNodeAdjacency:function(e,t,n,r){var i=this._model.getData();this._downplayAll();var a=r.dataIndex,o=i.graph,s=[],c=o.getNodeByIndex(a);s.push(c),c.edges.forEach(function(e){e.dataIndex<0||(e.node1!==c&&s.push(e.node1),e.node2!==c&&s.push(e.node2))},this),this._pointsBuilder.fadeOutAll(.05),this._fadeOutEdgesAll(.05),s.forEach(function(e){this._pointsBuilder.highlight(i,e.dataIndex)},this),this._pointsBuilder.updateLabels(s.map(function(e){return e.dataIndex}));var l=[];c.edges.forEach(function(e){e.dataIndex>=0&&(this._highlightEdge(e.dataIndex),l.push(e))},this),this._focusNodes=s,this._focusEdges=l},unfocusNodeAdjacency:function(e,t,n,r){this._downplayAll(),this._pointsBuilder.fadeInAll(),this._fadeInEdgesAll(),this._pointsBuilder.updateLabels()},_highlightEdge:function(e){var t=this._model.getEdgeData().getItemModel(e),n=Y.parseColor(t.get(`emphasis.lineStyle.color`)||t.get(`lineStyle.color`)),r=G.firstNotNull(t.get(`emphasis.lineStyle.opacity`),t.get(`lineStyle.opacity`),1);n[3]*=r,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],n)},_downplayAll:function(){this._focusNodes&&this._focusNodes.forEach(function(e){this._pointsBuilder.downplay(this._model.getData(),e.dataIndex)},this),this._focusEdges&&this._focusEdges.forEach(function(e){this._downplayEdge(e.dataIndex)},this)},_downplayEdge:function(e){var t=this._getColor(e,[]);this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[e],t)},_setEdgeFade:function(){var e=[];return function(t,n){this._getColor(t,e),e[3]*=n,this._edgesMesh.geometry.setItemColor(this._edgeIndicesMap[t],e)}}(),_getColor:function(e,t){for(var n=0;n<4;n++)t[n]=this._originalEdgeColors[e*4+n];return t},_fadeOutEdgesAll:function(e){this._model.getData().graph.eachEdge(function(t){this._setEdgeFade(t.dataIndex,e)},this)},_fadeInEdgesAll:function(){this._fadeOutEdgesAll(1)},_updateCamera:function(e,t){this.viewGL.setViewport(0,0,t.getWidth(),t.getHeight(),t.getDevicePixelRatio());for(var n=this.viewGL.camera,r=e.getData().getLayout(`points`),i=Xc.create(1/0,1/0),a=Xc.create(-1/0,-1/0),o=[],s=0;s<r.length;)o[0]=r[s++],o[1]=r[s++],Xc.min(i,i,o),Xc.max(a,a,o);var c=(a[1]+i[1])/2,l=(a[0]+i[0])/2;if(!(l>n.left&&l<n.right&&c<n.bottom&&c>n.top)){var u=Math.max(a[0]-i[0],10),d=u/t.getWidth()*t.getHeight();u*=1.4,d*=1.4,i[0]-=u*.2,n.left=i[0],n.top=c-d/2,n.bottom=c+d/2,n.right=u+i[0],n.near=0,n.far=100}},dispose:function(){var e=this.viewGL.layer.renderer;this._forceLayoutInstance&&this._forceLayoutInstance.dispose(e),this.groupGL.removeAll(),this._layoutId=-1,this._pointsBuilder.dispose()},remove:function(){this.groupGL.removeAll(),this._control.dispose()}});function $c(e){return e instanceof Array||(e=[e,e]),e}function el(e){e.registerChartView(Qc),e.registerSeriesModel(Rc),e.registerVisual(function(e){let t={};e.eachSeriesByType(`graphGL`,function(e){var n=e.getCategoriesData(),r=e.getData(),i={};n.each(function(r){var a=n.getName(r);i[`ec-`+a]=r;var o=n.getItemModel(r),s=o.getModel(`itemStyle`).getItemStyle();s.fill||=e.getColorFromPalette(a,t),n.setItemVisual(r,`style`,s);var c=[`symbol`,`symbolSize`,`symbolKeepAspect`];for(let e=0;e<c.length;e++){var l=o.getShallow(c[e],!0);l!=null&&n.setItemVisual(r,c[e],l)}}),n.count()&&r.each(function(e){let t=r.getItemModel(e).getShallow(`category`);if(t!=null){typeof t==`string`&&(t=i[`ec-`+t]);var a=n.getItemVisual(t,`style`);ye(r.ensureUniqueItemVisual(e,`style`),a);var o=[`symbol`,`symbolSize`,`symbolKeepAspect`];for(let i=0;i<o.length;i++)r.setItemVisual(e,o[i],n.getItemVisual(t,o[i]))}})})}),e.registerVisual(function(e){e.eachSeriesByType(`graphGL`,function(e){var t=e.getGraph(),n=e.getEdgeData(),r=$c(e.get(`edgeSymbol`)),i=$c(e.get(`edgeSymbolSize`));n.setVisual(`drawType`,`stroke`),n.setVisual(`fromSymbol`,r&&r[0]),n.setVisual(`toSymbol`,r&&r[1]),n.setVisual(`fromSymbolSize`,i&&i[0]),n.setVisual(`toSymbolSize`,i&&i[1]),n.setVisual(`style`,e.getModel(`lineStyle`).getLineStyle()),n.each(function(e){var r=n.getItemModel(e),i=t.getEdgeByIndex(e),a=$c(r.getShallow(`symbol`,!0)),o=$c(r.getShallow(`symbolSize`,!0)),s=r.getModel(`lineStyle`).getLineStyle(),c=n.ensureUniqueItemVisual(e,`style`);switch(ye(c,s),c.stroke){case`source`:var l=i.node1.getVisual(`style`);c.stroke=l&&l.fill;break;case`target`:var l=i.node2.getVisual(`style`);c.stroke=l&&l.fill;break}a[0]&&i.setVisual(`fromSymbol`,a[0]),a[1]&&i.setVisual(`toSymbol`,a[1]),o[0]&&i.setVisual(`fromSymbolSize`,o[0]),o[1]&&i.setVisual(`toSymbolSize`,o[1])})})}),e.registerAction({type:`graphGLRoam`,event:`graphglroam`,update:`series.graphGL:roam`},function(e,t){t.eachComponent({mainType:`series`,query:e},function(t){t.setView(e)})});function t(){}e.registerAction({type:`graphGLStartLayout`,event:`graphgllayoutstarted`,update:`series.graphGL:startLayout`},t),e.registerAction({type:`graphGLStopLayout`,event:`graphgllayoutstopped`,update:`series.graphGL:stopLayout`},t),e.registerAction({type:`graphGLFocusNodeAdjacency`,event:`graphGLFocusNodeAdjacency`,update:`series.graphGL:focusNodeAdjacency`},t),e.registerAction({type:`graphGLUnfocusNodeAdjacency`,event:`graphGLUnfocusNodeAdjacency`,update:`series.graphGL:unfocusNodeAdjacency`},t)}P(el);var tl=v.extend({type:`series.flowGL`,dependencies:[`geo`,`grid`,`bmap`],visualStyleAccessPath:`itemStyle`,getInitialData:function(e,t){var n=this.get(`coordinateSystem`),r=n===`geo`?[`lng`,`lat`]:ce(n)||[`x`,`y`];r.push(`vx`,`vy`);var i=new y(o(this.getSource(),{coordDimensions:r,encodeDefine:this.get(`encode`),dimensionsDefine:this.get(`dimensions`)}),this);return i.initData(this.getSource()),i},defaultOption:{coordinateSystem:`cartesian2d`,zlevel:10,supersampling:1,particleType:`point`,particleDensity:128,particleSize:1,particleSpeed:1,particleTrail:2,colorTexture:null,gridWidth:`auto`,gridHeight:`auto`,itemStyle:{color:`#fff`,opacity:.8}}}),nl=V.extend(function(){return{dynamic:!0,attributes:{position:new V.Attribute(`position`,`float`,3,`POSITION`)}}},{resetOffset:function(){this._vertexOffset=0,this._faceOffset=0},setLineCount:function(e){var t=this.attributes,n=4*e,r=2*e;this.vertexCount!==n&&t.position.init(n),this.triangleCount!==r&&(r===0?this.indices=null:this.indices=this.vertexCount>65535?new Uint32Array(r*3):new Uint16Array(r*3))},addLine:function(e){var t=this._vertexOffset;this.attributes.position.set(t,[e[0],e[1],1]),this.attributes.position.set(t+1,[e[0],e[1],-1]),this.attributes.position.set(t+2,[e[0],e[1],2]),this.attributes.position.set(t+3,[e[0],e[1],-2]),this.setTriangleIndices(this._faceOffset++,[t,t+1,t+2]),this.setTriangleIndices(this._faceOffset++,[t+1,t+2,t+3]),this._vertexOffset+=4}});I.import(`@export ecgl.vfParticle.particle.fragment

uniform sampler2D particleTexture;
uniform sampler2D spawnTexture;
uniform sampler2D velocityTexture;

uniform float deltaTime;
uniform float elapsedTime;

uniform float speedScaling : 1.0;

uniform vec2 textureSize;
uniform vec4 region : [0, 0, 1, 1];
uniform float firstFrameTime;

varying vec2 v_Texcoord;


void main()
{
 vec4 p = texture2D(particleTexture, v_Texcoord);
 bool spawn = false;
 if (p.w <= 0.0) {
 p = texture2D(spawnTexture, fract(v_Texcoord + elapsedTime / 10.0));
 p.w -= firstFrameTime;
 spawn = true;
 }
 vec2 v = texture2D(velocityTexture, fract(p.xy * region.zw + region.xy)).xy;
 v = (v - 0.5) * 2.0;
 p.z = length(v);
 p.xy += v * deltaTime / 10.0 * speedScaling;
 p.w -= deltaTime;

 if (spawn || p.xy != fract(p.xy)) {
 p.z = 0.0;
 }
 p.xy = fract(p.xy);

 gl_FragColor = p;
}
@end

@export ecgl.vfParticle.renderPoints.vertex

#define PI 3.1415926

attribute vec2 texcoord : TEXCOORD_0;

uniform sampler2D particleTexture;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

uniform float size : 1.0;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 vec4 p = texture2D(particleTexture, texcoord);

 if (p.w > 0.0 && p.z > 1e-5) {
 gl_Position = worldViewProjection * vec4(p.xy * 2.0 - 1.0, 0.0, 1.0);
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }

 v_Mag = p.z;
 v_Uv = p.xy;

 gl_PointSize = size;
}

@end

@export ecgl.vfParticle.renderPoints.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;
uniform sampler2D spriteTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
#ifdef SPRITETEXTURE_ENABLED
 gl_FragColor *= texture2D(spriteTexture, gl_PointCoord);
 if (color.a == 0.0) {
 discard;
 }
#endif
#ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end

@export ecgl.vfParticle.renderLines.vertex

#define PI 3.1415926

attribute vec3 position : POSITION;

uniform sampler2D particleTexture;
uniform sampler2D prevParticleTexture;

uniform float size : 1.0;
uniform vec4 vp: VIEWPORT;
uniform mat4 worldViewProjection : WORLDVIEWPROJECTION;

varying float v_Mag;
varying vec2 v_Uv;

@import clay.util.rand

void main()
{
 vec4 p = texture2D(particleTexture, position.xy);
 vec4 p2 = texture2D(prevParticleTexture, position.xy);

 p.xy = p.xy * 2.0 - 1.0;
 p2.xy = p2.xy * 2.0 - 1.0;

 if (p.w > 0.0 && p.z > 1e-5) {
 vec2 dir = normalize(p.xy - p2.xy);
 vec2 norm = vec2(dir.y / vp.z, -dir.x / vp.w) * sign(position.z) * size;
 if (abs(position.z) == 2.0) {
 gl_Position = vec4(p.xy + norm, 0.0, 1.0);
 v_Uv = p.xy;
 v_Mag = p.z;
 }
 else {
 gl_Position = vec4(p2.xy + norm, 0.0, 1.0);
 v_Mag = p2.z;
 v_Uv = p2.xy;
 }
 gl_Position = worldViewProjection * gl_Position;
 }
 else {
 gl_Position = vec4(100000.0, 100000.0, 100000.0, 1.0);
 }
}

@end

@export ecgl.vfParticle.renderLines.fragment

uniform vec4 color : [1.0, 1.0, 1.0, 1.0];
uniform sampler2D gradientTexture;
uniform sampler2D colorTexture;

varying float v_Mag;
varying vec2 v_Uv;

void main()
{
 gl_FragColor = color;
 #ifdef GRADIENTTEXTURE_ENABLED
 gl_FragColor *= texture2D(gradientTexture, vec2(v_Mag, 0.5));
#endif
#ifdef COLORTEXTURE_ENABLED
 gl_FragColor *= texture2D(colorTexture, v_Uv);
#endif
}

@end
`);function rl(e){var t=document.createElement(`canvas`);t.width=t.height=e;var n=t.getContext(`2d`);return n.fillStyle=`#fff`,n.arc(e/2,e/2,e/2,0,Math.PI*2),n.fill(),t}var il=function(){this.motionBlurFactor=.99,this.vectorFieldTexture=new U({type:H.FLOAT,flipY:!1}),this.particleLife=[5,20],this._particleType=`point`,this._particleSize=1,this.particleColor=[1,1,1,1],this.particleSpeedScaling=1,this._thisFrameTexture=null,this._particlePass=null,this._spawnTexture=null,this._particleTexture0=null,this._particleTexture1=null,this._particlePointsMesh=null,this._surfaceFrameBuffer=null,this._elapsedTime=0,this._scene=null,this._camera=null,this._lastFrameTexture=null,this._supersampling=1,this._downsampleTextures=[],this._width=512,this._height=512,this.init()};il.prototype={constructor:il,init:function(){var e={type:H.FLOAT,minFilter:H.NEAREST,magFilter:H.NEAREST,useMipmap:!1};this._spawnTexture=new U(e),this._particleTexture0=new U(e),this._particleTexture1=new U(e),this._frameBuffer=new et({depthBuffer:!1}),this._particlePass=new tt({fragment:I.source(`ecgl.vfParticle.particle.fragment`)}),this._particlePass.setUniform(`velocityTexture`,this.vectorFieldTexture),this._particlePass.setUniform(`spawnTexture`,this._spawnTexture),this._downsamplePass=new tt({fragment:I.source(`clay.compositor.downsample`)});var t=new Qe({renderOrder:10,material:new Ve({shader:new I(I.source(`ecgl.vfParticle.renderPoints.vertex`),I.source(`ecgl.vfParticle.renderPoints.fragment`))}),mode:Qe.POINTS,geometry:new V({dynamic:!0,mainAttribute:`texcoord0`})}),n=new Qe({renderOrder:10,material:new Ve({shader:new I(I.source(`ecgl.vfParticle.renderLines.vertex`),I.source(`ecgl.vfParticle.renderLines.fragment`))}),geometry:new nl,culling:!1}),r=new Qe({material:new Ve({shader:new I(I.source(`ecgl.color.vertex`),I.source(`ecgl.color.fragment`))}),geometry:new We});r.material.enableTexture(`diffuseMap`),this._particlePointsMesh=t,this._particleLinesMesh=n,this._lastFrameFullQuadMesh=r,this._camera=new Je,this._thisFrameTexture=new U,this._lastFrameTexture=new U},setParticleDensity:function(e,t){for(var n=e*t,r=new Float32Array(n*4),i=0,a=this.particleLife,o=0;o<e;o++)for(var s=0;s<t;s++,i++){r[i*4]=Math.random(),r[i*4+1]=Math.random(),r[i*4+2]=Math.random();var c=(a[1]-a[0])*Math.random()+a[0];r[i*4+3]=c}this._particleType===`line`?this._setLineGeometry(e,t):this._setPointsGeometry(e,t),this._spawnTexture.width=e,this._spawnTexture.height=t,this._spawnTexture.pixels=r,this._particleTexture0.width=this._particleTexture1.width=e,this._particleTexture0.height=this._particleTexture1.height=t,this._particlePass.setUniform(`textureSize`,[e,t])},_setPointsGeometry:function(e,t){var n=e*t,r=this._particlePointsMesh.geometry,i=r.attributes;i.texcoord0.init(n);for(var a=0,o=0;o<e;o++)for(var s=0;s<t;s++,a++)i.texcoord0.value[a*2]=o/e,i.texcoord0.value[a*2+1]=s/t;r.dirty()},_setLineGeometry:function(e,t){var n=e*t,r=this._getParticleMesh().geometry;r.setLineCount(n),r.resetOffset();for(var i=0;i<e;i++)for(var a=0;a<t;a++)r.addLine([i/e,a/t]);r.dirty()},_getParticleMesh:function(){return this._particleType===`line`?this._particleLinesMesh:this._particlePointsMesh},update:function(e,t,n,r){var i=this._getParticleMesh(),a=this._frameBuffer,o=this._particlePass;r&&this._updateDownsampleTextures(e,t),i.material.set(`size`,this._particleSize*this._supersampling),i.material.set(`color`,this.particleColor),o.setUniform(`speedScaling`,this.particleSpeedScaling),a.attach(this._particleTexture1),o.setUniform(`firstFrameTime`,r?(this.particleLife[1]+this.particleLife[0])/2:0),o.setUniform(`particleTexture`,this._particleTexture0),o.setUniform(`deltaTime`,n),o.setUniform(`elapsedTime`,this._elapsedTime),o.render(e,a),i.material.set(`particleTexture`,this._particleTexture1),i.material.set(`prevParticleTexture`,this._particleTexture0),a.attach(this._thisFrameTexture),a.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT);var s=this._lastFrameFullQuadMesh;s.material.set(`diffuseMap`,this._lastFrameTexture),s.material.set(`color`,[1,1,1,this.motionBlurFactor]),this._camera.update(!0),e.renderPass([s,i],this._camera),a.unbind(e),this._downsample(e),this._swapTexture(),this._elapsedTime+=n},_downsample:function(e){var t=this._downsampleTextures;if(t.length!==0)for(var n=0,r=this._thisFrameTexture,i=t[n];i;)this._frameBuffer.attach(i),this._downsamplePass.setUniform(`texture`,r),this._downsamplePass.setUniform(`textureSize`,[r.width,r.height]),this._downsamplePass.render(e,this._frameBuffer),r=i,i=t[++n]},getSurfaceTexture:function(){var e=this._downsampleTextures;return e.length>0?e[e.length-1]:this._lastFrameTexture},setRegion:function(e){this._particlePass.setUniform(`region`,e)},resize:function(e,t){this._lastFrameTexture.width=e*this._supersampling,this._lastFrameTexture.height=t*this._supersampling,this._thisFrameTexture.width=e*this._supersampling,this._thisFrameTexture.height=t*this._supersampling,this._width=e,this._height=t},setParticleSize:function(e){var t=this._getParticleMesh();if(e<=2){t.material.disableTexture(`spriteTexture`),t.material.transparent=!1;return}this._spriteTexture||=new U,(!this._spriteTexture.image||this._spriteTexture.image.width!==e)&&(this._spriteTexture.image=rl(e),this._spriteTexture.dirty()),t.material.transparent=!0,t.material.enableTexture(`spriteTexture`),t.material.set(`spriteTexture`,this._spriteTexture),this._particleSize=e},setGradientTexture:function(e){var t=this._getParticleMesh().material;t[e?`enableTexture`:`disableTexture`](`gradientTexture`),t.setUniform(`gradientTexture`,e)},setColorTextureImage:function(e,t){this._getParticleMesh().material.setTextureImage(`colorTexture`,e,t,{flipY:!0})},setParticleType:function(e){this._particleType=e},clearFrame:function(e){var t=this._frameBuffer;t.attach(this._lastFrameTexture),t.bind(e),e.gl.clear(e.gl.DEPTH_BUFFER_BIT|e.gl.COLOR_BUFFER_BIT),t.unbind(e)},setSupersampling:function(e){this._supersampling=e,this.resize(this._width,this._height)},_updateDownsampleTextures:function(e,t){for(var n=this._downsampleTextures,r=Math.max(Math.floor(Math.log(this._supersampling/t.getDevicePixelRatio())/Math.log(2)),0),i=2,a=this._width*this._supersampling,o=this._height*this._supersampling,s=0;s<r;s++)n[s]=n[s]||new U,n[s].width=a/i,n[s].height=o/i,i*=2;for(;s<n.length;s++)n[s].dispose(e);n.length=r},_swapTexture:function(){var e=this._particleTexture0;this._particleTexture0=this._particleTexture1,this._particleTexture1=e;var e=this._thisFrameTexture;this._thisFrameTexture=this._lastFrameTexture,this._lastFrameTexture=e},dispose:function(e){e.disposeFrameBuffer(this._frameBuffer),e.disposeTexture(this.vectorFieldTexture),e.disposeTexture(this._spawnTexture),e.disposeTexture(this._particleTexture0),e.disposeTexture(this._particleTexture1),e.disposeTexture(this._thisFrameTexture),e.disposeTexture(this._lastFrameTexture),e.disposeGeometry(this._particleLinesMesh.geometry),e.disposeGeometry(this._particlePointsMesh.geometry),e.disposeGeometry(this._lastFrameFullQuadMesh.geometry),this._spriteTexture&&e.disposeTexture(this._spriteTexture),this._particlePass.dispose(e),this._downsamplePass.dispose(e),this._downsampleTextures.forEach(function(t){t.dispose(e)})}};var al=l.extend({type:`flowGL`,__ecgl__:!0,init:function(e,t){this.viewGL=new Q(`orthographic`),this.groupGL=new Y.Node,this.viewGL.add(this.groupGL),this._particleSurface=new il;var n=new Y.Mesh({geometry:new Y.PlaneGeometry,material:new Y.Material({shader:new Y.Shader({vertex:Y.Shader.source(`ecgl.color.vertex`),fragment:Y.Shader.source(`ecgl.color.fragment`)}),transparent:!0})});n.material.enableTexture(`diffuseMap`),this.groupGL.add(n),this._planeMesh=n},render:function(e,t,n){var r=this._particleSurface;r.setParticleType(e.get(`particleType`)),r.setSupersampling(e.get(`supersampling`)),this._updateData(e,n),this._updateCamera(n.getWidth(),n.getHeight(),n.getDevicePixelRatio());var i=G.firstNotNull(e.get(`particleDensity`),128);r.setParticleDensity(i,i);var a=this._planeMesh,o=+new Date,s=this,c=!0;a.__percent=0,a.stopAnimation(),a.animate(``,{loop:!0}).when(1e5,{__percent:1}).during(function(){var e=+new Date,t=Math.min(e-o,20);o+=t,s._renderer&&(r.update(s._renderer,n,t/1e3,c),a.material.set(`diffuseMap`,r.getSurfaceTexture())),c=!1}).start();var l=e.getModel(`itemStyle`),u=Y.parseColor(l.get(`color`));u[3]*=G.firstNotNull(l.get(`opacity`),1),a.material.set(`color`,u),r.setColorTextureImage(e.get(`colorTexture`),n),r.setParticleSize(e.get(`particleSize`)),r.particleSpeedScaling=e.get(`particleSpeed`),r.motionBlurFactor=1-.1**e.get(`particleTrail`)},updateTransform:function(e,t,n){this._updateData(e,n)},afterRender:function(e,t,n,r){var i=r.renderer;this._renderer=i},_updateData:function(e,t){var n=e.coordinateSystem,r=n.dimensions.map(function(t){return e.coordDimToDataDim(t)[0]}),i=e.getData(),a=i.getDataExtent(r[0]),o=i.getDataExtent(r[1]),s=e.get(`gridWidth`),c=e.get(`gridHeight`);if(s==null||s===`auto`){var l=(a[1]-a[0])/(o[1]-o[0]);s=Math.round(Math.sqrt(l*i.count()))}(c==null||c===`auto`)&&(c=Math.ceil(i.count()/s));var u=this._particleSurface.vectorFieldTexture,d=u.pixels;if(!d||d.length!==c*s*4)d=u.pixels=new Float32Array(s*c*4);else for(var f=0;f<d.length;f++)d[f]=0;var p=0,m=1/0,h=new Float32Array(i.count()*2),g=0,_=[[1/0,1/0],[-1/0,-1/0]];i.each([r[0],r[1],`vx`,`vy`],function(e,t,r,i){var a=n.dataToPoint([e,t]);h[g++]=a[0],h[g++]=a[1],_[0][0]=Math.min(a[0],_[0][0]),_[0][1]=Math.min(a[1],_[0][1]),_[1][0]=Math.max(a[0],_[1][0]),_[1][1]=Math.max(a[1],_[1][1]);var o=Math.sqrt(r*r+i*i);p=Math.max(p,o),m=Math.min(m,o)}),i.each([`vx`,`vy`],function(e,t,n){var r=Math.round((h[n*2]-_[0][0])/(_[1][0]-_[0][0])*(s-1)),i=((c-1-Math.round((h[n*2+1]-_[0][1])/(_[1][1]-_[0][1])*(c-1)))*s+r)*4;d[i]=e/p*.5+.5,d[i+1]=t/p*.5+.5,d[i+3]=1}),u.width=s,u.height=c,e.get(`coordinateSystem`)===`bmap`&&this._fillEmptyPixels(u),u.dirty(),this._updatePlanePosition(_[0],_[1],e,t),this._updateGradientTexture(i.getVisual(`visualMeta`),[m,p])},_fillEmptyPixels:function(e){var t=e.pixels,n=e.width,r=e.height;function i(e,i,a){e=Math.max(Math.min(e,n-1),0),i=Math.max(Math.min(i,r-1),0);var o=(i*(n-1)+e)*4;return t[o+3]===0?!1:(a[0]=t[o],a[1]=t[o+1],!0)}function a(e,t,n){n[0]=e[0]+t[0],n[1]=e[1]+t[1]}for(var o=[],s=[],c=[],l=[],u=[],d=0,f=0;f<r;f++)for(var p=0;p<n;p++){var m=(f*(n-1)+p)*4;t[m+3]===0&&(d=o[0]=o[1]=0,i(p-1,f,s)&&(d++,a(s,o,o)),i(p+1,f,c)&&(d++,a(c,o,o)),i(p,f-1,l)&&(d++,a(l,o,o)),i(p,f+1,u)&&(d++,a(u,o,o)),o[0]/=d,o[1]/=d,t[m]=o[0],t[m+1]=o[1]),t[m+3]=1}},_updateGradientTexture:function(e,t){if(!e||!e.length){this._particleSurface.setGradientTexture(null);return}this._gradientTexture=this._gradientTexture||new Y.Texture2D({image:document.createElement(`canvas`)});var n=this._gradientTexture,r=n.image;r.width=200,r.height=1;var i=r.getContext(`2d`),a=i.createLinearGradient(0,.5,r.width,.5);e[0].stops.forEach(function(e){var n;t[1]===t[0]?n=0:(n=e.value/t[1],n=Math.min(Math.max(n,0),1)),a.addColorStop(n,e.color)}),i.fillStyle=a,i.fillRect(0,0,r.width,r.height),n.dirty(),this._particleSurface.setGradientTexture(this._gradientTexture)},_updatePlanePosition:function(e,t,n,r){var i=this._limitInViewportAndFullFill(e,t,n,r);e=i.leftTop,t=i.rightBottom,this._particleSurface.setRegion(i.region),this._planeMesh.position.set((e[0]+t[0])/2,r.getHeight()-(e[1]+t[1])/2,0);var a=t[0]-e[0],o=t[1]-e[1];this._planeMesh.scale.set(a/2,o/2,1),this._particleSurface.resize(Math.max(Math.min(a,2048),1),Math.max(Math.min(o,2048),1)),this._renderer&&this._particleSurface.clearFrame(this._renderer)},_limitInViewportAndFullFill:function(e,t,n,r){var i=[Math.max(e[0],0),Math.max(e[1],0)],a=[Math.min(t[0],r.getWidth()),Math.min(t[1],r.getHeight())];if(n.get(`coordinateSystem`)===`bmap`){var o=n.getData().getDataExtent(n.coordDimToDataDim(`lng`)[0]);Math.floor(o[1]-o[0])>=359&&(i[0]>0&&(i[0]=0),a[0]<r.getWidth()&&(a[0]=r.getWidth()))}var s=t[0]-e[0],c=t[1]-e[1],l=a[0]-i[0],u=a[1]-i[1];return{leftTop:i,rightBottom:a,region:[(i[0]-e[0])/s,1-u/c-(i[1]-e[1])/c,l/s,u/c]}},_updateCamera:function(e,t,n){this.viewGL.setViewport(0,0,e,t,n);var r=this.viewGL.camera;r.left=r.bottom=0,r.top=t,r.right=e,r.near=0,r.far=100,r.position.z=10},remove:function(){this._planeMesh.stopAnimation(),this.groupGL.removeAll()},dispose:function(){this._renderer&&this._particleSurface.dispose(this._renderer),this.groupGL.removeAll()}});function ol(e){e.registerChartView(al),e.registerSeriesModel(tl)}P(ol);var sl=v.extend({type:`series.linesGL`,dependencies:[`grid`,`geo`],visualStyleAccessPath:`lineStyle`,visualDrawType:`stroke`,streamEnabled:!0,init:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),sl.superApply(this,`init`,arguments)},mergeOption:function(e){var t=this._processFlatCoordsArray(e.data);this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset,t.flatCoords&&(e.data=new Float32Array(t.count)),sl.superApply(this,`mergeOption`,arguments)},appendData:function(e){var t=this._processFlatCoordsArray(e.data);t.flatCoords&&(this._flatCoords?(this._flatCoords=ge(this._flatCoords,t.flatCoords),this._flatCoordsOffset=ge(this._flatCoordsOffset,t.flatCoordsOffset)):(this._flatCoords=t.flatCoords,this._flatCoordsOffset=t.flatCoordsOffset),e.data=new Float32Array(t.count)),this.getRawData().appendData(e.data)},_getCoordsFromItemModel:function(e){var t=this.getData().getItemModel(e);return t.option instanceof Array?t.option:t.getShallow(`coords`)},getLineCoordsCount:function(e){return this._flatCoordsOffset?this._flatCoordsOffset[e*2+1]:this._getCoordsFromItemModel(e).length},getLineCoords:function(e,t){if(this._flatCoordsOffset){for(var n=this._flatCoordsOffset[e*2],r=this._flatCoordsOffset[e*2+1],i=0;i<r;i++)t[i]=t[i]||[],t[i][0]=this._flatCoords[n+i*2],t[i][1]=this._flatCoords[n+i*2+1];return r}else{for(var a=this._getCoordsFromItemModel(e),i=0;i<a.length;i++)t[i]=t[i]||[],t[i][0]=a[i][0],t[i][1]=a[i][1];return a.length}},_processFlatCoordsArray:function(e){var t=0;if(this._flatCoords&&(t=this._flatCoords.length),typeof e[0]==`number`){for(var n=e.length,r=new Uint32Array(n),i=new Float64Array(n),a=0,o=0,s=0,c=0;c<n;){s++;var l=e[c++];r[o++]=a+t,r[o++]=l;for(var u=0;u<l;u++){var d=e[c++],f=e[c++];i[a++]=d,i[a++]=f}}return{flatCoordsOffset:new Uint32Array(r.buffer,0,o),flatCoords:i,count:s}}return{flatCoordsOffset:null,flatCoords:null,count:e.length}},getInitialData:function(e,t){var n=new y([`value`],this);return n.hasItemOption=!1,n.initData(e.data,[],function(e,t,r,i){if(e instanceof Array)return NaN;n.hasItemOption=!0;var a=e.value;if(a!=null)return a instanceof Array?a[i]:a}),n},defaultOption:{coordinateSystem:`geo`,zlevel:10,progressive:1e4,progressiveThreshold:5e4,blendMode:`source-over`,lineStyle:{opacity:.8},postEffect:{enable:!1,colorCorrection:{exposure:0,brightness:0,contrast:1,saturation:1,enable:!0}}}}),cl=l.extend({type:`linesGL`,__ecgl__:!0,init:function(e,t){this.groupGL=new Y.Node,this.viewGL=new Q(`orthographic`),this.viewGL.add(this.groupGL),this._glViewHelper=new Nc(this.viewGL),this._nativeLinesShader=Y.createShader(`ecgl.lines3D`),this._meshLinesShader=Y.createShader(`ecgl.meshLines3D`),this._linesMeshes=[],this._currentStep=0},render:function(e,t,n){this.groupGL.removeAll(),this._glViewHelper.reset(e,n);var r=this._linesMeshes[0];r||=this._linesMeshes[0]=this._createLinesMesh(e),this._linesMeshes.length=1,this.groupGL.add(r),this._updateLinesMesh(e,r,0,e.getData().count()),this.viewGL.setPostEffect(e.getModel(`postEffect`),n)},incrementalPrepareRender:function(e,t,n){this.groupGL.removeAll(),this._glViewHelper.reset(e,n),this._currentStep=0,this.viewGL.setPostEffect(e.getModel(`postEffect`),n)},incrementalRender:function(e,t,n,r){var i=this._linesMeshes[this._currentStep];i||(i=this._createLinesMesh(t),this._linesMeshes[this._currentStep]=i),this._updateLinesMesh(t,i,e.start,e.end),this.groupGL.add(i),r.getZr().refresh(),this._currentStep++},updateTransform:function(e,t,n){e.coordinateSystem.getRoamTransform&&this._glViewHelper.updateTransform(e,n)},_createLinesMesh:function(e){return new Y.Mesh({$ignorePicking:!0,material:new Y.Material({shader:Y.createShader(`ecgl.lines3D`),transparent:!0,depthMask:!1,depthTest:!1}),geometry:new Vc({segmentScale:10,useNativeLine:!0,dynamic:!1}),mode:Y.Mesh.LINES,culling:!1})},_updateLinesMesh:function(e,t,n,r){var i=e.getData();t.material.blend=e.get(`blendMode`)===`lighter`?Y.additiveBlend:null;var a=e.get(`lineStyle.curveness`)||0,o=e.get(`polyline`),s=t.geometry,c=e.coordinateSystem,l=G.firstNotNull(e.get(`lineStyle.width`),1);l>1?(t.material.shader!==this._meshLinesShader&&t.material.attachShader(this._meshLinesShader),t.mode=Y.Mesh.TRIANGLES):(t.material.shader!==this._nativeLinesShader&&t.material.attachShader(this._nativeLinesShader),t.mode=Y.Mesh.LINES),n||=0,r||=i.count(),s.resetOffset();var u=0,d=0,f=[],p=[],m=[],h=[],g=[],_=.3,v=.7;function y(){p[0]=f[0]*v+h[0]*_-(f[1]-h[1])*a,p[1]=f[1]*v+h[1]*_-(h[0]-f[0])*a,m[0]=f[0]*_+h[0]*v-(f[1]-h[1])*a,m[1]=f[1]*_+h[1]*v-(h[0]-f[0])*a}if(o||a!==0)for(var b=n;b<r;b++)if(o){var x=e.getLineCoordsCount(b);u+=s.getPolylineVertexCount(x),d+=s.getPolylineTriangleCount(x)}else e.getLineCoords(b,g),this._glViewHelper.dataToPoint(c,g[0],f),this._glViewHelper.dataToPoint(c,g[1],h),y(),u+=s.getCubicCurveVertexCount(f,p,m,h),d+=s.getCubicCurveTriangleCount(f,p,m,h);else{var S=r-n;u+=S*s.getLineVertexCount(),d+=S*s.getLineVertexCount()}s.setVertexCount(u),s.setTriangleCount(d);for(var C=n,w=[],b=n;b<r;b++){Y.parseColor(Na(i,C),w);var T=G.firstNotNull(Pa(i,C),1);w[3]*=T;for(var x=e.getLineCoords(b,g),E=0;E<x;E++)this._glViewHelper.dataToPoint(c,g[E],g[E]);o?s.addPolyline(g,w,l,0,x):a===0?s.addPolyline(g,w,l,0,2):(f=g[0],h=g[1],y(),s.addCubicCurve(f,p,m,h,w,l)),C++}},dispose:function(){this.groupGL.removeAll()},remove:function(){this.groupGL.removeAll()}});function ll(e){e.registerChartView(cl),e.registerSeriesModel(sl)}P(ll);