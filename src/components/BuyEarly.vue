<template>
    <div class="buyearly p-80">
            <h2 class="heading text-center">Автомобили которые мы выкупили недавно</h2>
            <div class="buyearly__block container">
                <div class="buyearly__block--each">
                    <div class="inside">
                        <div class="poster"  v-bind:style="{ backgroundImage: 'url(' + imageEaryle + ')' }"></div>
                        <p>2021 BMW 540i M Sport Review: Light on Sport, Heavy on Tech</p>
                    </div>
                </div>
                <div class="buyearly__block--each">
                    <div class="inside">
                        <div class="poster"  v-bind:style="{ backgroundImage: 'url(' + imageEaryle + ')' }"></div>
                        <p>2022 Volkswagen Taos First Drive: Exactly as Good as It Needs to Be</p>
                    </div>
                </div>
                <div class="buyearly__block--each">
                    <div class="inside">
                        <div class="poster"  v-bind:style="{ backgroundImage: 'url(' + imageEaryle + ')' }"></div>
                        <p>2021 Kia Sorento Hybrid Review: Big Vehicle With Small-Vehicle Fuel Economy</p>
                    </div>
                </div>
            </div>
            <div class="btn btn-primary">Продать свой автомобиль</div>
       </div>
</template>
<script>
export default {
   components: {
          
   },
   data() {
        return {
            imageEaryle:'https://s3-alpha-sig.figma.com/img/f4b3/84d4/1dafdfe426668c8439a158835e201cce?Expires=1722211200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=l0sfYs27HusQEndMlPwNEOGwSQ~fGx651KCWEAH2QZyN2gWmaB9yhxsi23V108pIShS91n5goC8wkyzvDs2ilcqZ4VJ8kflFe1SDgI~DXWd6woQ1RfBrwKvOkyxf4OM2~IZ2GHAFnP-rzi439JFZIg1tFJ3bx9PwuLu4OsvFsUpj9I1rvZHCCDPwRkU7hh03w8PPFqFrk8VG99XalDPRNHnN8NRaIR4KVtAnMxmGZRSE3P-TtdTn2qnbaK5MuL5UDRLDov6qIv~plCfCyZ1knSLgMng2xrRjbCMos-04tBUegr-~WV5o-5SYG4~kV1CmkCX0fukWuNaVjmgwMa8FPA__',
        }
   },
}
</script>