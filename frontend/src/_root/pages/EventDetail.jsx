import axios from "axios";

const EventDetail = () => {
  return (
    <div className="event-detail">
      <div className="w-[390px] h-[959px] relative bg-white">
        <img
          src="/assets/AM-ticket.jpg"
          className="w-[390px] h-[242px] left-0 top-0 absolute bg-zinc-300"
          alt="image-detail"
        />
        {/* <div className="w-[126px] h-[126px] left-[132px] top-[58px] absolute" /> */}
        <div className="left-[16px] top-[266px] absolute text-sm font-bold">
          Bandung
        </div>
        <div className="left-[16px] top-[383px] absolute text-base font-bold">
          Tentang Kegiatan Ini
        </div>
        <div className="left-[18px] top-[650px] absolute text-base font-bold">
          Detail Lokasi
        </div>
        <div className="w-[358px] left-[16px] top-[293px] absolute text-2xl font-bold">
          From 2 With Love (F2WL) <br /> 2024 - Gadhavestra
        </div>
        <div className="w-[358px] left-[16px] top-[413px] absolute text-sm font-normal">
          Lorem ipsum dolor sit amet consectetur. Pharetra eget pellentesque
          faucibus aenean. At et purus tellus cras arcu nunc cras vitae enim.
          Cras vestibulum nibh in ullamcorper. In mattis mi morbi consectetur
          fermentum id pretium donec.
          <br />
          <br />
          Lorem ipsum dolor sit amet consectetur. Pharetra eget pellentesque
          faucibus aenean. At et purus tellus cras arcu nunc cras vitae enim.
          Cras vestibulum nibh in ullamcorper. In mattis mi morbi consectetur
          fermentum id pretium donec.
        </div>
        <div className="">
          <div className="left-[16px] top-[875px] absolute text-xs font-normal">
            Harga Tiket
          </div>
          <div className="left-[16px] top-[890px] absolute text-sm font-bold">
            Rp148.500
          </div>
          <div className="w-20 h-[35px] px-[27px] py-[13px] left-[294px] top-[875px] absolute bg-emerald-600 rounded justify-center items-center gap-2.5 inline-flex">
            <div className="text-white text-xs font-bold">
              <button>Cek Tiket</button>
            </div>
          </div>
        </div>
        <div className="w-[356px] h-[111px] left-[18px] top-[680px] absolute bg-white rounded shadow" />
        <div className="left-[134px] top-[691px] absolute text-xs font-normal">
          Bandung
        </div>
        <div className="left-[134px] top-[711px] absolute text-sm font-bold">
          <a className="no-underline text-emerald-600" href="">
            Lihat Peta &gt;{" "}
          </a>
        </div>
        <div className="flex items-center justify-center w-[86px] h-[86px] left-[32px] top-[691px] absolute bg-zinc-300 rounded-lg">
          <img src="/assets/mdi_map-marker.png" alt="mdi-map" className="" />
        </div>
        <div className="w-[30px] h-[30px] left-[60px] top-[720px] absolute" />
      </div>
    </div>
  );
};

export default EventDetail;
