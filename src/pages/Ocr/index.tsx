import React, { useState } from 'react';
import { Upload, message, Checkbox, Radio, Switch, Input, Card, Space, Button, Typography } from 'antd';

import { getTextOnlyByFileUsingPost, getTotalByUrlUsingPost } from '@/services/ocr/ocr';

const { Text, Paragraph } = Typography;

const MATCH_MODES = {
  DEFAULT: 'DEFAULT',
  ENGLISH: 'ENGLISH',
  ID: 'ID',
  CAR: 'CAR',
};

const Ocr: React.FC = () => {
  const [fileList, setFileList] = useState([]);
  const [matchMode, setMatchMode] = useState(MATCH_MODES.DEFAULT);
  const [useUrl, setUseUrl] = useState(false); // 是否使用URL识别
  const [urlValue, setUrlValue] = useState(''); // 存储URL输入值
  const [isProfessionalMode, setIsProfessionalMode] = useState(false); // 是否为专业模式
  const [resultDisplay, setResultDisplay] = useState(null); // 新增状态来存储识别结果

  const handleUpload = async (file) => {
    if (!file) return;
    try {
      const formData = new FormData();
      formData.append('file', file);
      const params = {
        filterType: matchMode,
        isAggregate: isProfessionalMode, // 代表专业模式
      };
      const response = await getTextOnlyByFileUsingPost(params, {}, file);
      if (response.code === 200) {
        displayResult(response.data);
      } else {
        message.error(response.msg || 'OCR识别出错');
      }
    } catch (error) {
      message.error('文件上传出错');
    }
  };

  const handleUrlSubmit = async () => {
    if (!urlValue) return;
    try {
      const params = {
        filterType: matchMode,
        isAggregate: isProfessionalMode, // 代表专业模式
        url: urlValue,
      };
      const response = await getTotalByUrlUsingPost(params);
      if (response.code === 200) {
        displayResult(response.data);
      } else {
        message.error(response.msg || '通过URL获取OCR结果出错');
      }
    } catch (error) {
      message.error('请求出错');
    }
  };

  const formatNonProfessionalResult = (results: string[]) => results.join('\n');

  const displayResult = (resultData) => {
    if (resultData) {
      let formattedResult;
      if (isProfessionalMode) {
        formattedResult = (
          <pre>
            <code>
            {JSON.stringify(resultData, null, 2)}
            </code>
          </pre>
        )
      } else {
        // 将每个字符串元素通过换行符连接起来
        const textResult = formatNonProfessionalResult(resultData);
        formattedResult = <pre>{textResult}</pre>; // 使用pre标签保留换行
      }
      setResultDisplay(formattedResult);
    }
  };

  const toggleRecognitionMethod = () => {
    setUseUrl(!useUrl);
  };

  const toggleProfessionalMode = () => {
    setIsProfessionalMode(!isProfessionalMode);
  };

  const changeMatchMode = (e) => {
    setMatchMode(e.target.value);
  };

  return (
    <>
      <Card title="OCR识别" style={{ width: '100%', marginBottom: '20px' }}>
        <Space direction="vertical" size="large" style={{ width: '100%' }}>
          {/* 识别方式切换 */}
          <Space>
            <Text>识别方式：</Text>
            <Switch checked={useUrl} onChange={toggleRecognitionMethod} />
            <Text>{useUrl ? '通过URL' : '上传文件'}</Text>
          </Space>

          {/* 上传或URL输入区 */}
          {useUrl ? (
            <Input
              placeholder="请输入图片URL"
              value={urlValue}
              onChange={(e) => setUrlValue(e.target.value)}
              onPressEnter={handleUrlSubmit}
              style={{ width: '100%', marginBottom: '10px' }}
            />
          ) : (
            <Upload.Dragger
              accept="image/*"
              fileList={fileList.slice(-1)}
              beforeUpload={(file) => {
                setFileList([file]);
                return false;
              }}
            >
              <p className="ant-upload-drag-icon">
                {/* 图标可以根据需要添加 */}
              </p>
              <p className="ant-upload-text">点击或拖拽文件到此区域上传</p>
              <p className="ant-upload-hint">支持单个文件上传</p>
            </Upload.Dragger>
          )}

          {/* 识别操作按钮 */}
          <Space>
            {useUrl ? (
              <Button type="primary" onClick={handleUrlSubmit}>开始识别</Button>
            ) : (
              <Button type="primary" onClick={() => handleUpload(fileList[0])}>上传并识别</Button>
            )}
          </Space>

          {/* 专业模式切换 */}
          <Space>
            <Text>专业模式：</Text>
            <Switch checked={isProfessionalMode} onChange={toggleProfessionalMode} />
          </Space>

          {/* 匹配模式选择（仅在非专业模式下显示） */}
          {!isProfessionalMode && (
            <Radio.Group onChange={changeMatchMode} value={matchMode}>
              <Radio value={MATCH_MODES.DEFAULT}>默认</Radio>
              <Radio value={MATCH_MODES.ENGLISH}>英文</Radio>
              <Radio value={MATCH_MODES.ID}>身份证</Radio>
              <Radio value={MATCH_MODES.CAR}>车牌</Radio>
            </Radio.Group>
          )}
        </Space>
      </Card>

      {/* 新增卡片用于展示识别结果 */}
      {resultDisplay && (
        <Card title="识别结果" style={{ width: '100%', marginTop: '20px' }}>
          {resultDisplay}
        </Card>
      )}
    </>
  );
};

export default Ocr;
