import EduLsit from "../../Component/EDU_list/EduList";
import Footer from "../../Component/Footer/Footer";
import Navbar from '../../Component/Navbar/Navbar';
import './EduSelect.css';
const EduSelect = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className="Edulist">
                <h1 className="heading_edu_suggestion">Suggestions</h1>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <EduLsit title={'Make Video On FullStack Web Development'} detail={'start value has mixed support, consider using flex-start instead'}></EduLsit>
                <div style={{display:'flex',justifyContent:"end",paddingRight:'25%',paddingTop:'20px'}}>
                    <a href="/" className="btn has-before">
                        <span className="span">Submit</span>

                        <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                    </a>
                </div>
            </div>
            <Footer></Footer>
        </>
    )
}
export default EduSelect;