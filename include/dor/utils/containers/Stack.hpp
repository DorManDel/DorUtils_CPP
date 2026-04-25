/* ---------------------------------------------------------- */
#pragma once
/* ---------------------------------------------------------- */
#include <stdexcept>
#include <utility>
#include "dor/utils/core/Common.hpp"    // better for compiler uses -Iinclude
/* ---------------------------------------------------------- */
namespace dor::utils
{
    template<typename T>
    class Stack
    {
    private:
        T*   m_data;
        Size m_size;
        Size m_capacity;

    private:
        void reallocate(Size newCapacity)
        {
            T* newData = new T[newCapacity];

            for(Size i = 0; i < m_size; ++i)
                newData[i] = std::move(m_data[i]);

            delete[] m_data;
            m_data = newData;
            m_capacity = newCapacity;
        }

    public:
        Stack()
            : m_data(nullptr), m_size(0), m_capacity(0)
        {
        }

        ~Stack()
        {
            delete[] m_data;
        }

        void push(const T& value)
        {
            if(m_size == m_capacity)
            {
                Size newCapacity = (m_capacity == 0) ? 2 : m_capacity * 2;
                reallocate(newCapacity);
            }

            m_data[m_size++] = value;
        }

        void pop()
        {
            if(empty())
                throw std::underflow_error("Stack is empty");

            --m_size;
        }

        T& top()
        {
            if(empty())
                throw std::underflow_error("Stack is empty");

            return m_data[m_size - 1];
        }

        const T& top() const
        {
            if(empty())
                throw std::underflow_error("Stack is empty");

            return m_data[m_size - 1];
        }

        bool empty() const      {return m_size == 0;}

        Size size() const       {return m_size;}

        Size capacity() const   {return m_capacity;}

        void clear()            {m_size = 0;}
    };
}
/* ---------------------------------------------------------- */