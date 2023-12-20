import AdminSidebar from "../../components/admin/AdminSidebar";
import AdminIndexSection from "../../components/admin/AdminIndexSection";


export default function AdminIndex() {
    return(
        <div className="app-content">
            <div className="u-s-p-y-60">
                <div className="section__content">
                    <div className="dash">
                        <div className="container">

                            <div className="row">
                                <div className="col-lg-3 col-md-12">
                                    <AdminSidebar></AdminSidebar>
                                </div>

                                <div className="col-lg-9 col-md-12">
                                    <AdminIndexSection></AdminIndexSection>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}