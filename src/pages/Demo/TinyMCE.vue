<script setup lang="ts">
import Editor from '@tinymce/tinymce-vue'
import html2pdf from 'html2pdf.js'

const activeTab = ref('Preview')
const loading = ref(false)

const officialTitle = ref('通知公告')
const articleNumber = ref('〔2023〕XX号')
const articleTitle = ref('关于 XXXX 的通知')
const contentValue = ref('<p>&nbsp; &nbsp; 正文</p>')

const initOptions = {
  // language: 'zh-Hans',
  // promotion: false,
  // height: '65vh',
  // plugins: 'preview importcss searchreplace autolink autosave save directionality visualblocks visualchars fullscreen image link media table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap emoticons quickbars',
  width: '500pt',
  height: '60vh',
  language: 'zh-Hans',
  promotion: false,
  branding: false,
  menubar: false,
  toolbar1: 'undo redo | fontfamily fontsize | alignleft aligncenter alignright alignjustify',
  toolbar2: 'bold italic underline strikethrough blockquote forecolor backcolor',
  font_family_formats: '宋体=SimSun;黑体=SimHei;华文中宋=STZhongsong;微软雅黑=Microsoft YaHei;楷体=KaiTi;新宋体=NSimSun;仿宋=FangSong;仿宋_GB2312=仿宋_GB2312;',
  font_size_formats: '初号=42pt 小初=36pt 一号=26pt 小一=24pt 二号=22pt 小二=18pt 三号=16pt 小三=15pt 四号=14pt 小四=12pt 五号=10.5pt 小五=9pt',
  content_style: 'body { font-size:16pt; font-family:FangSong; text-align: justify; }' + 'p { margin:0 auto }',
  plugins: 'wordcount',
}
function officialTitleLetterSpacing(title: string) {
  /* 按最多 13 个字符计算 */
  const letterLength = title?.length || 11
  if (letterLength < 14)
    return (13 - letterLength) * 6
  else return 0
}
function officialTitleMarginLeft(title: string) {
  /* 按最多 13 个字符计算 */
  const marginValues = [0, 212, 180, 148, 118, 92, 75, 56, 40, 28, 20, 18, 18, 18]
  const letterLength = title?.length || 11
  if (letterLength < 14)
    return marginValues[letterLength]
  else return 0
}
async function generatePdf() {
  loading.value = true
  /* A4的纸张为 210mm * 297mm, 这里统一按照 1mm = 2.83pt 计算 */
  const unit_mm: number = 2.83
  const printOption = {
    /* 页边距 上，左，下，右 [37mm, 28mm, 35mm, 26mm] */
    margin: [37 * unit_mm, 28 * unit_mm, 35 * unit_mm, 26 * unit_mm],
    image: { type: 'jpeg', quality: 0.8 },
    html2canvas: { scale: 2 },
    /* 高度应该是 297 * unit_mm = 840.51，但是试出来 831.5 基本上不会出现截断
       宽度应该是 210 * unit_mm = 594.3，但是实际每行会少 1 个字符，加 16pt 做修正。 */
    jsPDF: { unit: 'pt', format: [610.3, 831.5] },
    // 避免分页截断内容
    // pagebreak: { mode: 'avoid-all' },
  }
  const filename = `${articleTitle.value}（${articleNumber.value}）`
  await html2pdf().set(printOption).from(document.getElementById('print-article')).save(filename)
  loading.value = false
}
</script>

<template>
  <AdminContainer>
    <template #header>
      <Message severity="secondary">
        <template #icon>
          <Icon name="i-carbon-information" />
        </template>
        直接使用 tinymce 官方的 vue 组件，下载了 self-host 包，并放在了 /public 文件夹下，这样组件不会因为使用官方 cdn 而产生付费告警了。需要更多自定义包括 menubar 、 toolbar 可以参考官方 api ，在 init 属性中酌情添加即可。
      </Message>

      <el-form label-suffix="：" class="mt">
        <div class="grid grid-cols-3 gap-10">
          <el-form-item label="红头标题">
            <el-input v-model="officialTitle" />
          </el-form-item>
          <el-form-item label="文章编号">
            <el-input v-model="articleNumber" />
          </el-form-item>
          <el-form-item label="文章标题">
            <el-input v-model="articleTitle" />
          </el-form-item>
        </div>
      </el-form>
    </template>
    <div class="flex flex-wrap">
      <Editor v-model="contentValue" tinymce-script-src="/js/tinymce/tinymce.min.js" :init="initOptions" />
      <el-tabs v-model="activeTab" class="ml-10 flex-1" type="border-card">
        <el-tab-pane label="ModelValue" name="ModelValue">
          {{ contentValue }}
        </el-tab-pane>
        <el-tab-pane label="预览" name="Preview">
          <el-button type="primary" text bg class="mb-2 text-lg" :loading="loading" @click="generatePdf">
            <Icon name="i-carbon-document-pdf" class="mr-1" />
            下载 PDF
          </el-button>
          <div class="article-bg">
            <div class="article-main">
              <div id="print-article">
                <div>
                  <div
                    class="official-title transform-origin-l transform-scale-x-55 whitespace-nowrap"
                    :style="`letter-spacing: ${officialTitleLetterSpacing(officialTitle)}pt; margin-left: ${officialTitleMarginLeft(officialTitle)}pt;`"
                  >
                    {{ officialTitle }}
                  </div>
                  <p class="article-number">
                    {{ articleNumber }}
                  </p>
                  <div class="print-divider" />
                  <p class="print-title">
                    {{ articleTitle }}
                  </p>
                </div>

                <div class="print-content" v-html="contentValue" />
              </div>
            </div>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </AdminContainer>
</template>

<style>
/* article 公文正文样式 */
.article-bg {
  margin: 0 auto;
  width: 610.3pt;
  background: url('/image/detail-bg.png');
  padding-top: 104.71pt;
  padding-bottom: 99.05pt;
}

.article-main {
  width: 457.48pt;
  padding-left: 79.24pt;
  padding-right: 73.58pt;
  box-sizing: unset;
}

.official-title {
  color: #f00;
  font-size: 57.5pt;
  font-weight: 600;
  font-family: "宋体", "SimSun";
  margin: 0 auto;
  line-height: 57.9pt !important;
  padding-bottom: 38px !important;
}

.red-header {
  color: #f00;
  font-size: 40pt;
  font-weight: 600;
  font-family: "宋体", "SimSun";
  margin: 0 auto;
  text-align: center;
  line-height: 55.8pt !important;
}

.article-number {
  font-family: "仿宋", "FangSong";
  color: black;
  font-size: 16pt;
  text-align: center;
  margin: 0 auto;
  line-height: 38px;
}

.print-divider {
  background-color: #f00;
  margin-top: 7.5pt !important;
  height: 1.45pt !important;
  margin-bottom: 28pt !important;
}

.print-title {
  font-family: "华文中宋", "STZhongsong", "宋体", "SimSun";
  color: black;
  font-size: 22pt;
  font-weight: bold;
  text-align: center;
  margin: 0 auto;
  line-height: 38px !important;
  padding-bottom: 20.95pt !important;
}

.print-content {
  font-family: "仿宋", "FangSong";
  color: black;
  text-align: justify;
  font-size: 16pt !important;
  line-height: 38px !important;
}

.print-content p {
  margin: 0 auto;
  line-height: 38px !important;
}

.print-content span {
  line-height: 1 !important;
}

.print-content h2 {
  margin: 0 auto;
  font-family: "黑体", "SimHei";
  font-size: 16pt !important;
  line-height: 38px !important;
}
</style>
