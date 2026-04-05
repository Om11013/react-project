import { X, ChevronDown } from 'lucide-react';
import { useEffect, useState } from 'react';

import type { CreateKnowledgeBasePanelProps } from '../types';

import { Button } from '@/components/common/Button';
import { Input } from '@/components/common/Input';


const CreateKnowledgeBasePanel = ({
  isOpen,
  onClose,
}: CreateKnowledgeBasePanelProps) => {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setMounted(true);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setVisible(true);
        });
      });
    } else {
      setVisible(false);
      const timeout = setTimeout(() => setMounted(false), 300);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  if (!mounted) return null;

  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 z-40 ${visible ? 'opacity-100' : 'opacity-0'}`}
        onClick={onClose}
      />

      <div
        className={`fixed inset-y-0 right-0 w-[480px] bg-white shadow-2xl flex flex-col transform transition-transform duration-300 ease-in-out z-50 ${visible ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between p-6 border-b border-gray-100">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Create New Knowledge Base
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                Best for quick answers from documents, websites and text files.
              </p>
            </div>
            <Button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 rounded-md transition-colors"
            >
              <X className="w-5 h-5 text-gray-500" />
            </Button>
          </div>

          <div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Name (Cannot be edited later)
                <span className="text-red-500">*</span>
              </label>
              <Input type="text" placeholder="Name" className="px-4 py-2.5" />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                placeholder="Description"
                rows={4}
                className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors resize-none"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                Vector Store<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white">
                  <option value="qdrant">Qdrant</option>
                  <option value="pinecone">Pinecone</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-gray-700">
                LLM Embedding Model<span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <select className="w-full appearance-none border border-gray-200 rounded-lg pl-4 pr-10 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition-colors bg-white">
                  <option value="text-embedding-ada-002">
                    text-embedding-ada-002
                  </option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-100 flex justify-end">
            <Button className="bg-[#4F46E5] hover:bg-[#4338CA] text-white px-6 py-2.5 rounded-lg text-sm font-medium">
              Create
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreateKnowledgeBasePanel;
