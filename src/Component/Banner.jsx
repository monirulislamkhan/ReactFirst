const Banner = () => {
  return (
    <section class="bnr_sec">
      <img src="/images/home-page-banner.jpg" class="img-fluid img-big" alt="" />
      <img src="<?= _BASEURL_ ?>images/home-page-banner-small.jpg" class="img-fluid img-small" alt="" />
    </section>
  )
}
export default Banner;