import React from 'react';

const Tab=(props)=>{

    return(
        <>
                <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home"
                            aria-selected="true">Genel Bilgiler
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile"
                            aria-selected="false">Kurumsal Bilgiler
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact"
                            aria-selected="false">Bordro Bilgileri
                    </button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-disabled-tab" data-bs-toggle="pill"
                            data-bs-target="#pills-disabled" type="button" role="tab" aria-controls="pills-disabled"
                            aria-selected="false" > Özlük bilgilerim
                    </button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel"
                     aria-labelledby="pills-home-tab" tabindex="0">

                    <p className="fs-5 fw-bold lh-sm ">Murat Demir </p>
                    <p className="fs-7 fw-light lh-sm">Software Team Lead
                        <p className="fs-6 fw-light lh-sm"> Software Solutions Telco
                            <p className="fs-6 fw-light lh-sm"> Team Lead</p> </p></p>
                    <p className="fs-7 fw-light lh-sm"> Sicil No: <p className="fs-7 fw-normal">....</p> </p>
                    <p className="fs-7 fw-light lh-sm"> Yönetici: <p className="fs-7 fw-normal">Serdal Yıldız</p> </p>
                    <p className="fs-7 fw-light lh-sm"> Üst Yönetici: <p className="fs-7 fw-normal">Mete Sansal</p> </p>
                    <p className="fs-7 fw-light lh-sm"> Medeni Hal: <p className="fs-7 fw-normal">Evli</p> </p>
                    <p className="fs-7 fw-light lh-sm"> Telefon: <p className="fs-7 fw-normal">0554..</p> </p>
                    <p className="fs-7 fw-light lh-sm"> E-posta: <p className="fs-7 fw-normal">murat.demir@kron.com.tr</p> </p>
                    <p className="fs-7 fw-light lh-sm"> Doğum: <p className=" fs-7 fw-normal">01.07.1986</p> </p>
                    <p className="fs-7 fw-light lh-sm"> Üniversite: </p>
                    <p className="fs-7 fw-light lh-sm"> Bölüm:  </p>
                    <button type="button" className="btn btn-primary">Düzenle</button>

                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab"
                     tabindex="0">...
                </div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab"
                     tabindex="0">...
                </div>
                <div className="tab-pane fade" id="pills-disabled" role="tabpanel" aria-labelledby="pills-disabled-tab"
                     tabindex="0">...
                </div>
            </div>
        </>
    )
}
export default Tab;